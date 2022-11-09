import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { CactusApi } from '../api/cactus.api';
import { CactusModel } from '../api/cactus.model';
import { CactusViewModel } from './cactus.vm';

@Injectable({
  providedIn: 'root',
})
export class CactusService {
  constructor(private api: CactusApi) {}

  public getAll() {
    return this.api
      .getAll()
      .pipe(map((cactuses) => cactuses.map((cactus) => this.toVm(cactus))));
  }

  toVm(cactus: CactusModel): CactusViewModel {
    return {
      ...cactus,
      createdAt: new Date(cactus.createdAt),
    };
  }
}
