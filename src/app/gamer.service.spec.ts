import { TestBed, inject } from '@angular/core/testing';

import { GamerService } from './gamer.service';

describe('GamerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GamerService]
    });
  });

  it('should be created', inject([GamerService], (service: GamerService) => {
    expect(service).toBeTruthy();
  }));
});
