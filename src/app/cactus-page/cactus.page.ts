import { Component } from '@angular/core';
import { CactusService } from '../services/cactus.service';
import { CactusViewModel } from '../services/cactus.vm';

@Component({
  selector: 'cactus-page',
  templateUrl: 'cactus.page.html',
})
export class CactusPage {
  public cactuses = this.cactusApi.getAll();
  public selectedCactus: CactusViewModel | null = null;

  constructor(private cactusApi: CactusService) {}
}
