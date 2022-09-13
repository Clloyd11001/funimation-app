import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirNavBarComponent } from './fir-nav-bar.component';

describe('FirNavBarComponent', () => {
  let component: FirNavBarComponent;
  let fixture: ComponentFixture<FirNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
