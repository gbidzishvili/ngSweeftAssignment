import { TestBed } from '@angular/core/testing';

import { ImgFileUploadService } from './img-file-upload.service';

describe('ImgFileUploadService', () => {
  let service: ImgFileUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgFileUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
