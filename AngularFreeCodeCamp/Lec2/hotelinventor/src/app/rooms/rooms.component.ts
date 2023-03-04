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

  selectedRoom!: RoomList;

  toggle(){
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(room: RoomList){
    console.log(room);
    this.selectedRoom = room;
  }

  roomList : RoomList[] = [];
 

  rooms : Room = {
    totalRooms: 20,
    avaliableRooms: 10,
    bookedRooms:5
  };

  

  ngOnInit(): void {
    this.roomList =  [{
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
  addRoom(){
    const room: RoomList={
      roomNumber: 0,
      roomType: '',
      amenities: '',
      price: 0,
      photos: 'khgjhg',
      checkInTime: new Date('11-dec-2023'),
      checkOutTime: new Date('12-dec-2023')
    }

    //this.roomList.push(room);
    this.roomList = [...this.roomList,room]
  }

 

 
}
