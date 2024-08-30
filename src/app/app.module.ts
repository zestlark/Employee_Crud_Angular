import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoComponent } from './logo/logo.component';
import { HeroComponent } from './hero/hero.component';
import { EmployeesComponent } from './employees/employees.component';
import { LearnComponent } from './learn/learn.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { SpaceTextPipe } from './pipes/space-text.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { AdminFormComponent } from './admin/admin-form/admin-form.component';
import { HomeComponent } from './views/home/home.component';
import { AdminComponent } from './views/admin/admin.component';
import { EmployeeViewComponent } from './views/employee-view/employee-view.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { AuthComponent } from './views/auth/auth.component';
import { NeosoftComponent } from './heroTitles/neosoft/neosoft.component';
import { WebworksComponent } from './heroTitles/webworks/webworks.component';
import { ManagementTitleComponent } from './heroTitles/management-title/management-title.component';
import { Webworks2Component } from './heroTitles/webworks2/webworks2.component';
import { Webworks3Component } from './heroTitles/webworks3/webworks3.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    LogoComponent,
    HeroComponent,
    EmployeesComponent,
    LearnComponent,
    EmployeeCardComponent,
    SpaceTextPipe,
    OrderByPipe,
    EmployeeFormComponent,
    AdminFormComponent,
    HomeComponent,
    AdminComponent,
    EmployeeViewComponent,
    NotFoundComponent,
    AuthComponent,
    NeosoftComponent,
    WebworksComponent,
    ManagementTitleComponent,
    Webworks2Component,
    Webworks3Component,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule,ReactiveFormsModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
