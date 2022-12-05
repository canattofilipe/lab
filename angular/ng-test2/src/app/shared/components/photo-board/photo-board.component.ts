import { Photo } from './interfaces/photo';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-board',
  templateUrl: './photo-board.component.html',
  styleUrls: ['./photo-board.components.scss'],
})
export class PhotoBoardComponent {
  @Input() public photos: Photo[];
}
