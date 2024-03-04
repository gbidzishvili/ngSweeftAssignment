import { TestBed } from '@angular/core/testing';

import { ShareCardDataService } from './share-card-data.service';

describe('ShareCardDataService', () => {
  let service: ShareCardDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareCardDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
