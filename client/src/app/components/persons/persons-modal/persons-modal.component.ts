import axios from 'axios';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

import {
  getBirthDate,
  getCurrentDate,
  getPersonAge,
  checkModalInputs,
} from '../utils';
import { ERRORS, TOAST, PATH, CAR_OPTIONS } from './../copy';
import { processesPersonData } from './../utils/processesPersonData';

@Component({
  selector: 'app-persons-modal',
  templateUrl: './persons-modal.component.html',
})
export class PersonsModalComponent implements OnInit {
  @Input() id_person: number | undefined;

  modal = {
    firstName: '',
    lastName: '',
    personalId: '',
    age: 18,
    cars: [],
  } as any;

  carOptions: any[] = CAR_OPTIONS;

  constructor(
    private _spinner: NgxSpinnerService,
    public activeModal: NgbActiveModal,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    if (this.id_person) {
      this._spinner.show();

      axios
        .get(`/api/${PATH}/${this.id_person}`)
        .then(({ data }) => {
          this.modal = { ...data, cars: JSON.parse(data.cars) };
          this._spinner.hide();
        })
        .catch(() => this.toastr.error(ERRORS.LOADING_DATA));
    }

    // get the cars from the cars database to use as options for the select field
    axios
      .get(`/api/cars`)
      .then(({ data }) => {
        this.carOptions = data ? data : CAR_OPTIONS;
        this._spinner.hide();
      })
      .catch(() => this.toastr.error(ERRORS.LOADING_DATA));
  }

  save(): void {
    this._spinner.show();

    const errorMessage: any = checkModalInputs(this.modal);

    if (errorMessage || this.getAge() !== ERRORS.NO_ERRORS) {
      this._spinner.hide();
      this.toastr.error(errorMessage);
    } else {
      const person = processesPersonData(this.modal);

      if (!this.id_person) {
        axios
          .post(`/api/${PATH}`, person)
          .then(() => {
            this._spinner.hide();
            this.toastr.success(TOAST.SAVE.SUCCESS);
            this.activeModal.close();
          })
          .catch(() => this.toastr.error(TOAST.SAVE.ERROR));
      } else {
        axios
          .put(`/api/${PATH}`, person)
          .then(() => {
            this._spinner.hide();
            this.toastr.success(TOAST.EDIT.SUCCESS);
            this.activeModal.close();
          })
          .catch(() => this.toastr.error(TOAST.EDIT.ERROR));
      }
    }
  }

  getAge() {
    if (this.modal.personalId.length < 7) {
      return ERRORS.NO_ERRORS;
    }

    const currentDate = getCurrentDate();

    const birthDate = getBirthDate(this.modal.personalId, currentDate.year);
    if (birthDate === null) {
      this.toastr.error(ERRORS.WRONG_PERSONAL_ID);
      return;
    }

    const personAge: any = getPersonAge(currentDate, birthDate);
    if (personAge === null) {
      this.toastr.error(ERRORS.TOO_YOUNG);
      return;
    }

    this.modal.age = personAge.years;
    return ERRORS.NO_ERRORS;
  }
}
