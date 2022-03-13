import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriticalConditionPatientPageRoutingModule } from './critical-condition-patient-routing.module';

import { CriticalConditionPatientPage } from './critical-condition-patient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriticalConditionPatientPageRoutingModule
  ],
  declarations: [CriticalConditionPatientPage]
})
export class CriticalConditionPatientPageModule {}
