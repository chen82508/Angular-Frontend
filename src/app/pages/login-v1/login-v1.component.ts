import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'frnt-login-v1',
  templateUrl: './login-v1.component.html',
  styleUrls: ['./login-v1.component.scss'],
  host: {
    class: 'login-cpnt',
  },
  standalone: true,
  imports: [
    CheckboxModule,
    FormsModule,
    ImageModule,
    InputTextModule,
    PasswordModule,
  ],
})
export class LoginV1Component implements OnInit {
  public password: string = '';
  public rememberMe: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
