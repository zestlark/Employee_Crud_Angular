import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeViewComponent } from './views/employee-view/employee-view.component';
import { AdminComponent } from './views/admin/admin.component';
import { HomeComponent } from './views/home/home.component';
import { LearnComponent } from './learn/learn.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { AuthComponent } from './views/auth/auth.component';
import { NeosoftComponent } from './heroTitles/neosoft/neosoft.component';
import { ManagementTitleComponent } from './heroTitles/management-title/management-title.component';
import { WebworksComponent } from './heroTitles/webworks/webworks.component';
import { Webworks2Component } from './heroTitles/webworks2/webworks2.component';
import { Webworks3Component } from './heroTitles/webworks3/webworks3.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { adminLoginGuard } from './Guards/adminGuard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    
    children: [
      { path: '', component: ManagementTitleComponent },
      {
        path: 'neosoft',
        component: NeosoftComponent,
      },
      {
        path: 'webworks',
        component: WebworksComponent,
        children: [
          {
            path: 'webworks2',
            component: Webworks2Component,
          },
          {
            path: 'webworks3',
            component: Webworks3Component,
          },
        ],
      },
    ],
  },
  {
    path: 'employees',
    component: EmployeeViewComponent,
    // canActivate: [adminLoginGuard],
  },
  {
    path: 'employeeform',
    component: EmployeeFormComponent,
    canActivate: [adminLoginGuard],
  },
  {
    path: 'employeeform/:empId',
    component: EmployeeFormComponent,
    canActivate: [adminLoginGuard],
  },
  {
    path: 'learn',
    component: LearnComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
