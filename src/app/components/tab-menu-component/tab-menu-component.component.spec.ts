import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMenuComponentComponent } from './tab-menu-component.component';

describe('TabMenuComponentComponent', () => {
  let component: TabMenuComponentComponent;
  let fixture: ComponentFixture<TabMenuComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabMenuComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabMenuComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
