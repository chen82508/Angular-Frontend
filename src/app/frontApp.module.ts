import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FrontAppRoutingModule } from './frontApp-routing.module';
import { FrontAppComponent } from './frontApp.component';

import { NavigationsModule } from '@core-nav/navigations.module';
import { MasterFrameComponent } from './components/common/master-frame/master-frame.component';

@NgModule({
  declarations: [FrontAppComponent, MasterFrameComponent],
  imports: [BrowserModule, FrontAppRoutingModule, NavigationsModule],
  bootstrap: [FrontAppComponent],
})
export class FrontAppModule {}
