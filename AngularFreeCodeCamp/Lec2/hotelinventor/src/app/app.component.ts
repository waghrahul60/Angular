import { AfterViewInit, Component,Inject,ViewChild,ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LocalStorageToken } from './localstorage.token';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  
  title = 'hotelinventor';

  constructor(@Inject(LocalStorageToken) private localStorage: Storage){
      
  }

  @ViewChild('user',{ read:ViewContainerRef }) vcr!: ViewContainerRef;

  ngOnInit(){
  this.localStorage.setItem('name', 'Hilton Hotel')
  }

  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(RoomsComponent);
    throw new Error('Method not implemented.');
  }
}
