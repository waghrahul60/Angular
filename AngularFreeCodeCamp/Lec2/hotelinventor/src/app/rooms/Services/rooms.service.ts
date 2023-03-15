import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { RoomList } from '../rooms';
//import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})


export class RoomsService {

  constructor(@Inject(APP_SERVICE_CONFIG) private config:AppConfig,
              private http: HttpClient
  ) { 
    console.log("Service inilitilization ............")
    console.log(this.config.apiEndpoint)
    console.log(this.getRooms);

  }
  
  headers1 = new HttpHeaders({'token':'12345fdsjhg'});
  roomList: RoomList[] = []

  getRooms() {
    return this.http.get<RoomList[]>('/api/rooms',);
  }

  addRoom(room: RoomList){
    return this.http.post<RoomList[]>('/api/rooms', room);
  }

  getPhotos(){
    const request = new HttpRequest('GET','https://jsonplaceholder.typicode.com/photos',
    {
      reportProgress: true,
    }
  );
  return this.http.request(request);

  }
  // roomList: RoomList[] = [

  //   {
  //     roomNumber: 1,
  //     roomType: "Deluxe Room",
  //     amenities: "Ai dsf sdf dsf ",
  //     price: 500,
  //     photos: "dfsdf",
  //     checkInTime: new Date('11-dec-2023'),
  //     checkOutTime: new Date('12-dec-2023')
  //   },
  //   {
  //     roomNumber: 2,
  //     roomType: "Deluxe Room",
  //     amenities: "Ai dsf sdf dsf ",
  //     price: 500,
  //     photos: "dfsdf",
  //     checkInTime: new Date('11-dec-2023'),
  //     checkOutTime: new Date('12-dec-2023')
  //   },
  //   {
  //     roomNumber: 3,
  //     roomType: "Deluxe Room",
  //     amenities: "Ai dsf sdf dsf ",
  //     price: 500,
  //     photos: "dfsdf",
  //     checkInTime: new Date('11-dec-2023'),
  //     checkOutTime: new Date('12-dec-2023')
  //   }

  // ]
 


}
