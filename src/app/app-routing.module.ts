import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'welcome-page',
    loadChildren: () => import('./welcome-page/welcome-page.module').then( m => m.WelcomePagePageModule)
  },
  {
    path: 'add-patient',
    loadChildren: () => import('./add-patient/add-patient.module').then( m => m.AddPatientPageModule)
  },
  {
    path: 'view-patient',
    loadChildren: () => import('./view-patient/view-patient.module').then( m => m.ViewPatientPageModule)
  },
  {
    path: 'view-all-patient',
    loadChildren: () => import('./view-all-patient/view-all-patient.module').then( m => m.ViewAllPatientPageModule)
  },
  {
    path: 'add-patient-record',
    loadChildren: () => import('./add-patient-record/add-patient-record.module').then( m => m.AddPatientRecordPageModule)
  },
  {
    path: 'view-patient-record',
    loadChildren: () => import('./view-patient-record/view-patient-record.module').then( m => m.ViewPatientRecordPageModule)
  },
  {
    path: 'view-all-patient-record',
    loadChildren: () => import('./view-all-patient-record/view-all-patient-record.module').then( m => m.ViewAllPatientRecordPageModule)
  },
  {
    path: 'critical-condition-patient',
    loadChildren: () => import('./critical-condition-patient/critical-condition-patient.module').then( m => m.CriticalConditionPatientPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
