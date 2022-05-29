import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FrontAppRoutingModule } from './frontApp-routing.module';
import { FrontAppComponent } from './frontApp.component';

@NgModule({
  declarations: [
    FrontAppComponent
  ],
  imports: [
    BrowserModule,
    FrontAppRoutingModule
  ],
  providers: [],
  bootstrap: [FrontAppComponent]
})
export class FrontAppModule { }
