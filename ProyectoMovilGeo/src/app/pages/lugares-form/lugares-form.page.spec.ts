import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LugaresFormPage } from './lugares-form.page';

describe('LugaresFormPage', () => {
  let component: LugaresFormPage;
  let fixture: ComponentFixture<LugaresFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LugaresFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
