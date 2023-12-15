import { Component } from '@angular/core';
import { TemplateFormsPageComponent } from "../../playgrounds/template-forms/template-forms-page/template-forms-page.component";
import { HeaderComponent } from "../../core/header/header.component";


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [TemplateFormsPageComponent, HeaderComponent]
})
export class HomeComponent {

}
