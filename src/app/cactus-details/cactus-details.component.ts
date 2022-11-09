import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CactusViewModel } from '../services/cactus.vm';

@Component({
  selector: 'cactus-details',
  templateUrl: 'cactus-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CactusDetailsComponent {
  @Input() public cactus: CactusViewModel | null = null;
}
