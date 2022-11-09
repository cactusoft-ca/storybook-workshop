import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CactusModel } from './cactus.model';

@Injectable({
  providedIn: 'root',
})
export class CactusApi {
  constructor(private http: HttpClient) {}

  public getAll() {
    return this.http
      .get<CactusModel[]>(
        'https://636bed497f47ef51e13e21ba.mockapi.io/api/cactuses'
      )
      .pipe();
  }
}
