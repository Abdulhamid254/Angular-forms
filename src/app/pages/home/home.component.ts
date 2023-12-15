import { Component } from '@angular/core';
import { TemplateFormsPageComponent } from "../../playgrounds/template-forms/template-forms-page/template-forms-page.component";


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [TemplateFormsPageComponent]
})
export class HomeComponent {

}
