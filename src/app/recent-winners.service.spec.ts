import { TestBed } from '@angular/core/testing';

import { RecentWinnersService } from './recent-winners.service';

describe('RecentWinnersService', () => {
  let service: RecentWinnersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecentWinnersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
