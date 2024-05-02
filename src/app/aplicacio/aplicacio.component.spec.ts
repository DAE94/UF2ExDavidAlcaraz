import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacioComponent } from './aplicacio.component';

describe('AplicacioComponent', () => {
  let component: AplicacioComponent;
  let fixture: ComponentFixture<AplicacioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AplicacioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AplicacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
