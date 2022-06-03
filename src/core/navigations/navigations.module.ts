import { NgModule } from '@angular/core';
import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
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
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: APPNAVBAR_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
})
export class NavigationsModule {}
