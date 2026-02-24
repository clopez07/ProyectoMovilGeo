import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LugaresDetallePage } from './lugares-detalle.page';

describe('LugaresDetallePage', () => {
  let component: LugaresDetallePage;
  let fixture: ComponentFixture<LugaresDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LugaresDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
