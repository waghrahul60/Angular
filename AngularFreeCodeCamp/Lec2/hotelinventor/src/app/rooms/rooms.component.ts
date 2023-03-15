import { AfterViewInit, Component, DoCheck, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';
import { RoomsService } from './Services/rooms.service';
import { Observable } from 'rxjs';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})

export class RoomsComponent implements AfterViewInit{
  
  constructor(private roomsService: RoomsService){}

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

  stream = new Observable<string>((observer) => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
    // observer.error('error');
  });
 

  rooms : Room = {
    totalRooms: 20,
    avaliableRooms: 10,
    bookedRooms:5
  };

  totalbyte = 0;

  ngOnInit(): void {
    console.log(this.headerComponent);
    //this.roomList = this.roomsService.getRooms();

    // this.roomsService.getRooms().subscribe(rooms => {
    //   this.roomList = rooms
    // });

    this.stream.subscribe((data) => console.log(data));

    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (error) => console.log(error),
    });

    this.roomsService.getPhotos().subscribe((event) => {
      switch (event.type){
        case HttpEventType.Sent: {
          console.log('req made');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('req success');
          break;
        }
        case HttpEventType.DownloadProgress: {
          console.log('req success');
          this.totalbyte += event.loaded;
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('req Completed');
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
          break;
        }
      }
    })



  }

  addRoom(){
    const room: RoomList={
       roomNumber: '0',
      roomType: '',
      amenities: '',
      price: 0,
      photos: 'khgjhg',
      checkInTime: new Date('11-dec-2023'),
      checkOutTime: new Date('12-dec-2023'),
    }

    //this.roomList.push(room);
    //this.roomList = [...this.roomList,room]


    this.roomsService.addRoom(room).subscribe((data) => {
      console.log("this is data "+ data);
      this.roomList = data;
    });

  }

  

  // ngDoCheck(): void {
  //   console.log("Do check is called");
  //   throw new Error('Method not implemented.');
  // }

  @ViewChild(HeaderComponent, {static:true})headerComponent!: HeaderComponent; 
 
  ngAfterViewInit(): void {
    console.log(this.headerComponent);
    throw new Error('Method not implemented.');
  }


 
}
function Obeservable(arg0: (observer: any) => void) {
  throw new Error('Function not implemented.');
}

function observer(observer: any): void {
  throw new Error('Function not implemented.');
}

