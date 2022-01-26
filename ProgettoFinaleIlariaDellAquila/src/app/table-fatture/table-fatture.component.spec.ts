import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFattureComponent } from './table-fatture.component';

describe('TableFattureComponent', () => {
  let component: TableFattureComponent;
  let fixture: ComponentFixture<TableFattureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFattureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFattureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
