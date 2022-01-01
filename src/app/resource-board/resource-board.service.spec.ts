import { TestBed } from '@angular/core/testing';

import { ResourceBoardService } from './resource-board.service';

describe('ResourceBoardService', () => {
  let service: ResourceBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourceBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
