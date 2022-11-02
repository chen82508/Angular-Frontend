import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterFrameComponent } from './master-frame.component';

describe('MasterFrameComponent', () => {
  let component: MasterFrameComponent;
  let fixture: ComponentFixture<MasterFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterFrameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
