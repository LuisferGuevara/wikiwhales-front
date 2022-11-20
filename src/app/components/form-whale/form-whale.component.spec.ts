import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWhaleComponent } from './form-whale.component';

describe('FormWhaleComponent', () => {
  let component: FormWhaleComponent;
  let fixture: ComponentFixture<FormWhaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWhaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormWhaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
