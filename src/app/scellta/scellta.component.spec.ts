import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScelltaComponent } from './scellta.component';

describe('ScelltaComponent', () => {
  let component: ScelltaComponent;
  let fixture: ComponentFixture<ScelltaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScelltaComponent]
    });
    fixture = TestBed.createComponent(ScelltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
