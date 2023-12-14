import { Routes } from '@angular/router';
import { TemplateFormsPageComponent } from './playgrounds/template-forms/template-forms-page/template-forms-page.component';

export const routes: Routes = [
  { path: '', component: TemplateFormsPageComponent }, // Set empty string for home path
  { path: 'template-forms-page-component', component: TemplateFormsPageComponent },
];
