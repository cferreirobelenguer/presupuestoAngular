import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresupuestoInicialComponent } from './presupuesto-inicial.component';

describe('PresupuestoInicialComponent', () => {
  let component: PresupuestoInicialComponent;
  let fixture: ComponentFixture<PresupuestoInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresupuestoInicialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresupuestoInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
