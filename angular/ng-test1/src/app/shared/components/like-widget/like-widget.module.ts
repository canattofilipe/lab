import { CommonModule } from '@angular/common';
import { EventEmitter, Input, NgModule, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LikeWidGetComponent } from './like-widget.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, FontAwesomeModule],
  exports: [LikeWidGetComponent],
})
export class LikeWidgetModule {
  @Output() public liked = new EventEmitter<void>();
  @Input() public likes = 0;
  @Input() public id = null;
}
