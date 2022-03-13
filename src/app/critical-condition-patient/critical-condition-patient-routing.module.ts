import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriticalConditionPatientPage } from './critical-condition-patient.page';

const routes: Routes = [
  {
    path: '',
    component: CriticalConditionPatientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriticalConditionPatientPageRoutingModule {}
