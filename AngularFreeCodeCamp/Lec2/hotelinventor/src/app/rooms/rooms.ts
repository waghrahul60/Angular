export interface Room{
    avaliableRooms: number;
    bookedRooms: number;
    totalRooms: number;
}

export interface RoomList{
    roomNumber: number;
    roomType: string;
    amenities: string;
    price:number;
    photos:string;
    checkInTime: Date;
    checkOutTime: Date;

}