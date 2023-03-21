import { NgModule } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@NgModule({
  exports: [ImageModule, InputTextModule, PasswordModule],
})
export class LoginV2Module {}
