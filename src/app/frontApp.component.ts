import { Component } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'frnt-root',
  templateUrl: './frontApp.component.html',
  styleUrls: ['./frontApp.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class FrontAppComponent {
  title = 'Angular-Frontend';

  public config: PerfectScrollbarConfigInterface = {};
}
