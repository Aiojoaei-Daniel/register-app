import axios from 'axios';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

import { ERRORS, TOAST, PATH, CAR_OPTIONS } from '../copy';

import { checkModalInputs, getTax, processesCarData } from '../utils';

@Component({
  selector: 'app-cars-modal',
  templateUrl: './cars-modal.component.html',
})
export class CarsModalComponent implements OnInit {
  @Input() id_car: number | undefined;

  modal = {
    brand: '',
    model: '',
    productionYear: 2000,
    cc: 0,
    tax: 50,
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
    if (this.id_car) {
      this._spinner.show();

      axios
        .get(`/api/${PATH}/${this.id_car}`)
        .then(({ data }) => {
          this.modal = data;
          this._spinner.hide();
        })
        .catch(() => this.toastr.error(ERRORS.LOADING_DATA));
    }
  }

  calculateTax(cc: any) {
    this.modal.tax = getTax(parseInt(cc));
  }

  save(): void {
    this._spinner.show();
    const car = processesCarData(this.modal);
    const errorMessage: any = checkModalInputs(car);

    if (errorMessage) {
      this._spinner.hide();
      this.toastr.error(errorMessage);
    } else {
      if (!this.id_car) {
        axios
          .post(`/api/${PATH}`, car)
          .then(() => {
            this._spinner.hide();
            this.toastr.success(TOAST.SAVE.SUCCESS);
            this.activeModal.close();
          })
          .catch(() => this.toastr.error(TOAST.SAVE.ERROR));
      } else {
        axios
          .put(`/api/${PATH}`, car)
          .then(() => {
            this._spinner.hide();
            this.toastr.success(TOAST.EDIT.SUCCESS);
            this.activeModal.close();
          })
          .catch(() => this.toastr.error(TOAST.EDIT.ERROR));
      }
    }
  }
}
