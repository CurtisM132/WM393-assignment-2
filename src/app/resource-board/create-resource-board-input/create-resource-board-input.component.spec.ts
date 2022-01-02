import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateResourceBoardInputComponent } from './create-resource-board-input.component';

describe('CreateResourceBoardInputComponent', () => {
  let component: CreateResourceBoardInputComponent;
  let fixture: ComponentFixture<CreateResourceBoardInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateResourceBoardInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateResourceBoardInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
