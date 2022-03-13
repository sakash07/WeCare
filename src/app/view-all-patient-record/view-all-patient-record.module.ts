import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAllPatientRecordPageRoutingModule } from './view-all-patient-record-routing.module';

import { ViewAllPatientRecordPage } from './view-all-patient-record.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAllPatientRecordPageRoutingModule
  ],
  declarations: [ViewAllPatientRecordPage]
})
export class ViewAllPatientRecordPageModule {}
