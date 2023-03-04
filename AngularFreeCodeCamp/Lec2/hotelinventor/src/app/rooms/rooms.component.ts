import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})

export class RoomsComponent {

  hotelName = "rahul hotel";
  noOfRooms = 10;
  hideRooms = false

  toggle(){
    this.hideRooms = !this.hideRooms;
  }

  rooms : Room = {
    totalRooms: 20,
    avaliableRooms: 10,
    bookedRooms:5
  };

  roomList : RoomList[] = [{
    roomNumber: 1,
    roomType: "Deluxe Room",
    amenities: "Ai dsf sdf dsf ",
    price: 500,
    photos: "dfsdf",
    checkInTime: new Date('11-dec-2023'),
    checkOutTime: new Date('12-dec-2023')
  },
  {
    roomNumber: 2,
    roomType: "Deluxe Room",
    amenities: "Ai dsf sdf dsf ",
    price: 500,
    photos: "dfsdf",
    checkInTime: new Date('11-dec-2023'),
    checkOutTime: new Date('12-dec-2023')
  },
  {
    roomNumber: 3,
    roomType: "Deluxe Room",
    amenities: "Ai dsf sdf dsf ",
    price: 500,
    photos: "dfsdf",
    checkInTime: new Date('11-dec-2023'),
    checkOutTime: new Date('12-dec-2023')
  }]

 
}
