import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAllPatientPageRoutingModule } from './view-all-patient-routing.module';

import { ViewAllPatientPage } from './view-all-patient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAllPatientPageRoutingModule
  ],
  declarations: [ViewAllPatientPage]
})
export class ViewAllPatientPageModule {}
