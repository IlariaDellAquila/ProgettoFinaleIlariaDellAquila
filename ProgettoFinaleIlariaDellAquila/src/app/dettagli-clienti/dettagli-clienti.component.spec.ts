import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliClientiComponent } from './dettagli-clienti.component';

describe('DettagliClientiComponent', () => {
  let component: DettagliClientiComponent;
  let fixture: ComponentFixture<DettagliClientiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettagliClientiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DettagliClientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
