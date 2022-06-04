import { NgModule } from '@angular/core';
import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';

const APPNAVBAR_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
};

@NgModule({
  declarations: [AppHeaderComponent, AppNavbarComponent],
  imports: [PerfectScrollbarModule],
  exports: [AppHeaderComponent, AppNavbarComponent],
  providers: [
    {
      provide: 'PS_CONFIG',
      useValue: APPNAVBAR_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
})
export class NavigationsModule {}
