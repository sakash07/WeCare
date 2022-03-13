import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAllPatientPage } from './view-all-patient.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAllPatientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAllPatientPageRoutingModule {}
