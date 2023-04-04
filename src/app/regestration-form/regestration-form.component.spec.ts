import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegestrationFormComponent } from './regestration-form.component';

describe('RegestrationFormComponent', () => {
  let component: RegestrationFormComponent;
  let fixture: ComponentFixture<RegestrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegestrationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegestrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
