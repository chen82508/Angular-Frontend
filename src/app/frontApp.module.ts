import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FrontAppRoutingModule } from './frontApp-routing.module';
import { FrontAppComponent } from './frontApp.component';

import { NavigationsModule } from '@core-nav/navigations.module';
import { LoginV1Component } from './pages/login-v1/login-v1.component';
import { MasterFrameComponent } from './components/common/master-frame/master-frame.component';

@NgModule({
  declarations: [FrontAppComponent, LoginV1Component, MasterFrameComponent],
  imports: [BrowserModule, FrontAppRoutingModule, NavigationsModule],
  bootstrap: [FrontAppComponent],
})
export class FrontAppModule {}
