import { TestBed } from '@angular/core/testing';
import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';
import { AppHeaderComponent } from '@core-nav/components/app-header/app-header.component';
import { AppNavbarComponent } from '@core-nav/components/app-navbar/app-navbar.component';

describe('AppNavbarComponent', () => {
  const PS_CONFIG_FOR_TEST: PerfectScrollbarConfigInterface = {
    wheelPropagation: true,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppHeaderComponent, AppNavbarComponent],
      imports: [PerfectScrollbarModule],
      providers: [{ provide: 'PS_CONFIG', useValue: PS_CONFIG_FOR_TEST }],
    }).compileComponents();
  });

  it('should create a header component', () => {
    const fixture = TestBed.createComponent(AppHeaderComponent);
    const header = fixture.componentInstance;
    expect(header).toBeTruthy();
  });

  it('should create a navbar component', () => {
    const fixture = TestBed.createComponent(AppNavbarComponent);
    const navbar = fixture.componentInstance;
    expect(navbar).toBeTruthy();
  });
});
