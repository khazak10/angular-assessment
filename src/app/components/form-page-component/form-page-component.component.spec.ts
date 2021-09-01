import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPageComponentComponent } from './form-page-component.component';

describe('FormPageComponentComponent', () => {
  let component: FormPageComponentComponent;
  let fixture: ComponentFixture<FormPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
