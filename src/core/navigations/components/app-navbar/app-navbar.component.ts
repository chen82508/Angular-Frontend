import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppNavbarComponent implements OnInit {
  constructor(
    @Inject('PS_CONFIG') public config: PerfectScrollbarConfigInterface
  ) {}

  ngOnInit(): void {}
}
