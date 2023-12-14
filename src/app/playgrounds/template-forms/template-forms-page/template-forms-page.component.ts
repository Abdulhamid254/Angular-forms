
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserInfo } from '../../../core/user-info';


@Component({
  selector: 'app-template-forms-page',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './template-forms-page.component.html',
  styleUrl: './template-forms-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateFormsPageComponent implements OnInit{

  userInfo: UserInfo = {
    firstName: 'Abdul',
    lastName: '',
    nickname: '',
    email: '',
    yearOfBirth: 0,
    passport: '',
    fullAddress: '',
    city: '',
    postCode: 0,
  }

  constructor() {}

  get years(){
    const now = new Date().getUTCFullYear();
    return Array(now - (now -40)).fill('').map((_,idx) => now - idx);
  }

  ngOnInit(): void {

  }

}
