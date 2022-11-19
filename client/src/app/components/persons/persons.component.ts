import axios from 'axios';
import { Component, OnInit, HostListener } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  faPlus,
  faEdit,
  faTrashAlt,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import { SCROLL_TOP, SET_HEIGHT } from 'src/app/utils/utils-table';
import { PersonsModalComponent } from './persons-modal/persons-modal.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { filterPersons } from './utils';
import { ERRORS, CONFIRM_DIALOG, TOAST, PATH } from './copy';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss'],
})
export class PersonsComponent implements OnInit {
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  faPlus = faPlus;
  faChevronUp = faChevronUp;

  limit: number = 70;
  showBackTop: string = '';

  persons: any = [];
  filteredPersons: any = [];
  filters = {
    name: '',
    personalId: '',
    age: '',
    cars: '',
  };

  @HostListener('document: keyup', [`$event`])
  handleDeleteEvent(event: KeyboardEvent) {
    if (event.key === 'Backspace') {
      this.filteredPersons = [...this.persons];
      this.onSearch();
    }
  }

  constructor(
    private _modal: NgbModal,
    private _spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {
    SET_HEIGHT('view', 20, 'height');
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData = (): void => {
    this._spinner.show();
    axios
      .get(`/api/${PATH}`)
      .then(({ data }) => {
        this.persons = [...data].map((person: any) => {
          return {
            ...person,
            cars: JSON.parse(person.cars),
          };
        });
        this.filteredPersons = this.persons;

        this._spinner.hide();
      })
      .catch(() => this.toastr.error(ERRORS.LOADING_DATA));
  };

  addEdit = (id_person?: number): void => {
    const modalRef = this._modal.open(PersonsModalComponent, {
      size: 'lg',
      keyboard: false,
      backdrop: 'static',
    });

    modalRef.componentInstance.id_person = id_person;
    modalRef.closed.subscribe(() => {
      modalRef.componentInstance.id_person = null;
      this.loadData();
    });
  };

  delete = (person: any): void => {
    const modalRef = this._modal.open(ConfirmDialogComponent, {
      size: 'lg',
      keyboard: false,
      backdrop: 'static',
    });
    modalRef.componentInstance.title = CONFIRM_DIALOG.TITLE;
    modalRef.componentInstance.content = `<p class='text-center mt-1 mb-1'>${CONFIRM_DIALOG.BODY} <b>${person.firstName}</b> <b>${person.lastName}</b>?`;
    modalRef.closed.subscribe(() => {
      axios
        .delete(`/api/${PATH}/${person.id}`)
        .then(() => {
          this.toastr.success(TOAST.DELETE.SUCCESS);
          this.loadData();
        })
        .catch(() => this.toastr.error(TOAST.DELETE.ERROR));
    });
  };

  onSearch() {
    const filteredPersons = filterPersons(this.filteredPersons, this.filters);

    this.filteredPersons = filteredPersons;
  }

  deleteFilters() {
    this.filters = {
      name: '',
      personalId: '',
      age: '',
      cars: '',
    };

    this.filteredPersons = [...this.persons];
  }

  onResize(): void {
    SET_HEIGHT('view', 20, 'height');
  }

  showTopButton(): void {
    if (
      document.getElementsByClassName('view-scroll-informations')[0].scrollTop >
      500
    ) {
      this.showBackTop = 'show';
    } else {
      this.showBackTop = '';
    }
  }

  onScrollDown(): void {
    this.limit += 20;
  }

  onScrollTop(): void {
    SCROLL_TOP('view-scroll-informations', 0);
    this.limit = 70;
  }
}
