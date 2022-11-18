import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PersonsComponent, CarsComponent } from './components';

import { CarsModalComponent } from './components/cars/cars-modal/cars-modal.component';
import { PersonsModalComponent } from './components/persons/persons-modal/persons-modal.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import {
  MatTooltipModule,
  MAT_TOOLTIP_DEFAULT_OPTIONS,
} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    HeaderComponent,
    PersonsComponent,
    CarsModalComponent,
    PersonsModalComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    NgbModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    NgSelectModule,
    NgxSpinnerModule,
    MatTooltipModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      timeOut: 3000,
      extendedTimeOut: 3000,
      progressBar: true,
      closeButton: true,
      enableHtml: true,
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: MAT_TOOLTIP_DEFAULT_OPTIONS,
      useValue: { disableTooltipInteractivity: true },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
