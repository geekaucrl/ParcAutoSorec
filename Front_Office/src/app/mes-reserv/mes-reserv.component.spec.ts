import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesReservComponent } from './mes-reserv.component';

describe('MesReservComponent', () => {
  let component: MesReservComponent;
  let fixture: ComponentFixture<MesReservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MesReservComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MesReservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
