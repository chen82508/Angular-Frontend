import { NgModule } from '@angular/core';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { ScrollPanelModule } from "primeng/scrollpanel";

@NgModule({
  declarations: [AppHeaderComponent, AppNavbarComponent],
  imports: [ ScrollPanelModule ],
  exports: [AppHeaderComponent, AppNavbarComponent],
  providers: [],
})
export class NavigationsModule {}
