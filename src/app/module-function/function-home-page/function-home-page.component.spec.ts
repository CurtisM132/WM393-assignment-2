import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionHomePageComponent } from './function-home-page.component';

describe('FunctionHomePageComponent', () => {
  let component: FunctionHomePageComponent;
  let fixture: ComponentFixture<FunctionHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
