import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NovaMarcaPage } from './nova-marca.page';

describe('NovaMarcaPage', () => {
  let component: NovaMarcaPage;
  let fixture: ComponentFixture<NovaMarcaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NovaMarcaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
