import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegionsComponent } from './components/regions/regions.component';
import { EnquiryComponent } from './components/enquiry/enquiry.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'regions', component: RegionsComponent },
  { path: 'enquiry', component: EnquiryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];
