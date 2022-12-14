import { PhotoListComponent } from './photo-list.component';
import { PhotoBoardModule } from './../../shared/components/photo-board/photo-board.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [PhotoListComponent],
  imports: [CommonModule, PhotoBoardModule],
  exports: [PhotoListComponent],
})
export class PhotoListModule {}
