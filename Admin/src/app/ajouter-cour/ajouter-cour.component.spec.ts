import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCourComponent } from './ajouter-cour.component';

describe('AjouterCourComponent', () => {
  let component: AjouterCourComponent;
  let fixture: ComponentFixture<AjouterCourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterCourComponent]
    });
    fixture = TestBed.createComponent(AjouterCourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
