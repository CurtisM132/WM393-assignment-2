import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceBoardPageComponent } from './resource-board-page.component';

describe('ResourceBoardPageComponent', () => {
  let component: ResourceBoardPageComponent;
  let fixture: ComponentFixture<ResourceBoardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceBoardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceBoardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
