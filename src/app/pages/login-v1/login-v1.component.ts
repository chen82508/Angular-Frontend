import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrimeNGConfig } from "primeng/api";
import { LoginV1Module } from './login-v1.module';

@Component({
  selector: 'frnt-login-v1',
  templateUrl: './login-v1.component.html',
  styleUrls: ['./login-v1.component.scss'],
  host: {
    class: 'login-cpnt',
  },
  standalone: true,
  imports: [FormsModule, LoginV1Module],
})
export class LoginV1Component implements OnInit {
  public password: string = '';
  public rememberMe: boolean = false;

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
