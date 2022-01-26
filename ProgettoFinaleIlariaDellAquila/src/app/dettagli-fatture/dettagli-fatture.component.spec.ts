import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliFattureComponent } from './dettagli-fatture.component';

describe('DettagliFattureComponent', () => {
  let component: DettagliFattureComponent;
  let fixture: ComponentFixture<DettagliFattureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettagliFattureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DettagliFattureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
