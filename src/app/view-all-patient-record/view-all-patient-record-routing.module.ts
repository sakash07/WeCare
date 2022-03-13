import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAllPatientRecordPage } from './view-all-patient-record.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAllPatientRecordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAllPatientRecordPageRoutingModule {}
