import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalModaleComponent } from './final-modale.component';

describe('FinalModaleComponent', () => {
  let component: FinalModaleComponent;
  let fixture: ComponentFixture<FinalModaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinalModaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinalModaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
