import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent {

  @Input() rooms: RoomList[] = [];

  @Output() roomSelector = new EventEmitter<RoomList>();

  selectRoom(room: RoomList){
    this.roomSelector.emit(room);
  }

}
