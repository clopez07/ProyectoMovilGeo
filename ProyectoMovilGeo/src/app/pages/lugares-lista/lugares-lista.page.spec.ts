import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LugaresListaPage } from './lugares-lista.page';

describe('LugaresListaPage', () => {
  let component: LugaresListaPage;
  let fixture: ComponentFixture<LugaresListaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LugaresListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
