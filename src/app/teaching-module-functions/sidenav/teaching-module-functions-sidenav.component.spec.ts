import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingModuleFunctionsSidenavComponent } from './teaching-module-functions-sidenav.component';

describe('FunctionSidenavComponent', () => {
  let component: TeachingModuleFunctionsSidenavComponent;
  let fixture: ComponentFixture<TeachingModuleFunctionsSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachingModuleFunctionsSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingModuleFunctionsSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
