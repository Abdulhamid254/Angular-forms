import { Routes } from '@angular/router';
import { TemplateFormsPageComponent } from './playgrounds/template-forms/template-forms-page/template-forms-page.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Set empty string for home path
  { path: 'template-driven-forms', component: TemplateFormsPageComponent },
];
