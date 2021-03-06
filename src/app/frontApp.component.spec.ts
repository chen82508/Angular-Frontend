import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FrontAppComponent } from './frontApp.component';
import { NavigationsModule } from '@core-nav/navigations.module';

describe('FrontAppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, NavigationsModule],
      declarations: [FrontAppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(FrontAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular-Frontend'`, () => {
    const fixture = TestBed.createComponent(FrontAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Angular-Frontend');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(FrontAppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain(
  //     'Angular-Frontend app is running!'
  //   );
  // });
});
