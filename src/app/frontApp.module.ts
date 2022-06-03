import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FrontAppRoutingModule } from './frontApp-routing.module';
import { FrontAppComponent } from './frontApp.component';

import { AppNavbarModule } from '@core-nav/navigation.module';

@NgModule({
  declarations: [FrontAppComponent],
  imports: [BrowserModule, FrontAppRoutingModule, AppNavbarModule],
  bootstrap: [FrontAppComponent],
})
export class FrontAppModule {}
