import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainReservComponent } from './main-reserv.component';

describe('MainReservComponent', () => {
  let component: MainReservComponent;
  let fixture: ComponentFixture<MainReservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainReservComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainReservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
