import { TestBed } from '@angular/core/testing';

import { LoginUserDataServiceService } from './login-user-data-service.service';

describe('LoginUserDataServiceService', () => {
  let service: LoginUserDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginUserDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
