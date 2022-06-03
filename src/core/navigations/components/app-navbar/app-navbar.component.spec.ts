import { TestBed } from '@angular/core/testing';
import { AppNavbarComponent } from './app-navbar.component';

describe('AppNavbarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [AppNavbarComponent],
    }).compileComponents();
  });

	it('should create a navbar component', () => {
		const fixture = TestBed.createComponent(AppNavbarComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	})
});
