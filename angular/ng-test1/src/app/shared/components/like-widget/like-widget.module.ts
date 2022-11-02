import { CommonModule } from '@angular/common';
import { EventEmitter, Input, NgModule, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';
import { LikeWidGetComponent } from './like-widget.component';

@NgModule({
  declarations: [LikeWidGetComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [LikeWidGetComponent],
  providers: [UniqueIdService],
})
export class LikeWidgetModule {
  @Output() public liked = new EventEmitter<void>();
  @Input() public likes = 0;
  @Input() public id = null;
}
