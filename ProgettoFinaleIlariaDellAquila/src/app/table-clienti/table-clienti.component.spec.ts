import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableClientiComponent } from './table-clienti.component';

describe('TableClientiComponent', () => {
  let component: TableClientiComponent;
  let fixture: ComponentFixture<TableClientiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableClientiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableClientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
