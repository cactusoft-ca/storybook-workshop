import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CactusService } from './services/cactus.service';
import { CactusViewModel } from './services/cactus.vm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public cactuses = this.cactusApi.getAll();
  public selectedCactus: CactusViewModel | null = null;

  constructor(private cactusApi: CactusService) {}
}
