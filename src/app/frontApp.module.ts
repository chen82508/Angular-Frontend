import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FrontAppRoutingModule } from './frontApp-routing.module';
import { FrontAppComponent } from './frontApp.component';

import { NavigationsModule } from '@core-nav/navigations.module';
import { MasterFrameComponent } from './components/common/master-frame/master-frame.component';
import { PasswordModule } from 'primeng/password';

@NgModule({
  declarations: [FrontAppComponent, MasterFrameComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FrontAppRoutingModule,
    NavigationsModule,
    PasswordModule,
  ],
  bootstrap: [FrontAppComponent],
})
export class FrontAppModule {}
