import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NovoModeloPage } from './novo-modelo.page';

describe('NovoModeloPage', () => {
  let component: NovoModeloPage;
  let fixture: ComponentFixture<NovoModeloPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NovoModeloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
