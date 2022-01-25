import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientiComponent } from './add-clienti.component';

describe('AddClientiComponent', () => {
  let component: AddClientiComponent;
  let fixture: ComponentFixture<AddClientiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClientiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
