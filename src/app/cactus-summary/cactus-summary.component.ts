import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CactusViewModel } from '../services/cactus.vm';

@Component({
  selector: 'cactus-summary',
  templateUrl: 'cactus-summary.component.html',
  styleUrls: ['./cactus-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CactusSummaryComponent {
  @Input() public cactus: CactusViewModel | null = null;
  @Input() public isSelected: boolean = false;
}
