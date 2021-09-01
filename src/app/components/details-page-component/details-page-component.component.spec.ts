import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPageComponentComponent } from './details-page-component.component';

describe('DetailsPageComponentComponent', () => {
  let component: DetailsPageComponentComponent;
  let fixture: ComponentFixture<DetailsPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
