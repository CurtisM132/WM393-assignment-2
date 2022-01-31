import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionSidenavComponent } from './function-sidenav.component';

describe('FunctionSidenavComponent', () => {
  let component: FunctionSidenavComponent;
  let fixture: ComponentFixture<FunctionSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
