import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginV2Module } from './login-v2.module';

@Component({
  selector: 'frnt-login-v2',
  templateUrl: './login-v2.component.html',
  styleUrls: ['./login-v2.component.scss'],
  host: {
    class: 'login-cpnt',
  },
  standalone: true,
  imports: [FormsModule, LoginV2Module],
})
export class LoginV2Component implements OnInit {
  public account: string = '';
  public password: string = '';

  constructor() {}

  ngOnInit(): void {}
}
