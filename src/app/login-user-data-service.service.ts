import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginUserDataServiceService {
  public userName: string | null = '';

  constructor() { }
}
