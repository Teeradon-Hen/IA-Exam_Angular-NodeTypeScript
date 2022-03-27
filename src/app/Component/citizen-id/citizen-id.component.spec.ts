import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenIdComponent } from './citizen-id.component';

describe('CitizenIdComponent', () => {
  let component: CitizenIdComponent;
  let fixture: ComponentFixture<CitizenIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
