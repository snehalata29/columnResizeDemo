import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableResizeComponent } from './table-resize.component';

describe('TableResizeComponent', () => {
  let component: TableResizeComponent;
  let fixture: ComponentFixture<TableResizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableResizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableResizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
