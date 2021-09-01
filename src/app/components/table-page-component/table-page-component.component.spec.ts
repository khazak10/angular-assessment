import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePageComponentComponent } from './table-page-component.component';

describe('TablePageComponentComponent', () => {
  let component: TablePageComponentComponent;
  let fixture: ComponentFixture<TablePageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
