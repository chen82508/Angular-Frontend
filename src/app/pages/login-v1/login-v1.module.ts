import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { CheckboxModule } from 'primeng/checkbox';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from "primeng/ripple";

@NgModule({
  exports: [
    ButtonModule,
    CheckboxModule,
    ImageModule,
    InputTextModule,
    PasswordModule,
    RippleModule,
  ]
})
export class LoginV1Module { }