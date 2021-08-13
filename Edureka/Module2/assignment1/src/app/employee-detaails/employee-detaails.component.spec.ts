import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetaailsComponent } from './employee-detaails.component';

describe('EmployeeDetaailsComponent', () => {
  let component: EmployeeDetaailsComponent;
  let fixture: ComponentFixture<EmployeeDetaailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDetaailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetaailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
