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
import { CarsModalComponent } from './cars-modal/cars-modal.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { filterCars } from './utils';
import {
  ERRORS,
  CONFIRM_DIALOG,
  TOAST,
  PATH,
  HEADERS,
  SEARCH_FILTERS,
  TABLE_TEXT,
  TABLE_DATA,
} from './copy';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  faPlus = faPlus;
  faChevronUp = faChevronUp;

  limit: number = 70;
  showBackTop: string = '';

  cars: any = [];
  filteredCars: any = [];
  filters: any = {
    brand: '',
    model: '',
    productionYear: '',
    cc: '',
    tax: '',
  };

  headers: any = HEADERS;
  searchFilters: any[] = SEARCH_FILTERS;
  tableText: any = TABLE_TEXT;
  tableData: any = TABLE_DATA;

  @HostListener('document:keyup', ['$event'])
  handleDeleteKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Backspace') {
      this.filteredCars = [...this.cars];
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
        this.cars = data;
        this.filteredCars = this.cars;

        this._spinner.hide();
      })
      .catch(() => this.toastr.error(ERRORS.LOADING_DATA));
  };

  addEdit = (id_car?: number): void => {
    const modalRef = this._modal.open(CarsModalComponent, {
      size: 'lg',
      keyboard: false,
      backdrop: 'static',
    });

    modalRef.componentInstance.id_car = id_car;
    modalRef.closed.subscribe(() => {
      modalRef.componentInstance.id_car = null;
      this.loadData();
    });
  };

  delete = (car: any): void => {
    const modalRef = this._modal.open(ConfirmDialogComponent, {
      size: 'lg',
      keyboard: false,
      backdrop: 'static',
    });
    modalRef.componentInstance.title = CONFIRM_DIALOG.TITLE;
    modalRef.componentInstance.content = `<p class='text-center mt-1 mb-1'>${CONFIRM_DIALOG.BODY} <b>${car.brand}</b> <b>${car.model}</b>?`;
    modalRef.closed.subscribe(() => {
      axios
        .delete(`/api/cars/${car.id}`)
        .then(() => {
          this.toastr.success(TOAST.DELETE.SUCCESS);
          this.loadData();
        })
        .catch(() => this.toastr.error(TOAST.DELETE.ERROR));
    });
  };

  onSearch() {
    const filteredCars = filterCars(this.filteredCars, this.filters);

    this.filteredCars = filteredCars;
  }

  deleteFilters() {
    this.filters = {
      brand: '',
      model: '',
      productionYear: '',
      cc: '',
      tax: '',
    };

    this.filteredCars = [...this.cars];
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
