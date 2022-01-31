import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingModuleFunctionsPageComponent } from './teaching-module-functions-page.component';

describe('FunctionHomePageComponent', () => {
  let component: TeachingModuleFunctionsPageComponent;
  let fixture: ComponentFixture<TeachingModuleFunctionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachingModuleFunctionsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingModuleFunctionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
