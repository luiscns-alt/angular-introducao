import { TestBed } from '@angular/core/testing';

import { PokeapiService } from './pokeapi.service';

// describe('PokeapiService', () => {
//   let service: PokeapiService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(PokeapiService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

describe('PokeapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokeapiService],
    });
  });

  it('should be created', inject(
    [PokeapiService],
    (service: PokeapiService) => {
      expect(service).toBeTruthy();
    }
  ));
});
