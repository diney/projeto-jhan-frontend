import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModeloPage } from './modelo.page';

describe('ModeloPage', () => {
  let component: ModeloPage;
  let fixture: ComponentFixture<ModeloPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModeloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
