import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceBoardDisplayListComponent } from './resource-board-display-list.component';

describe('ResourceBoardDisplayListComponent', () => {
  let component: ResourceBoardDisplayListComponent;
  let fixture: ComponentFixture<ResourceBoardDisplayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceBoardDisplayListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceBoardDisplayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
