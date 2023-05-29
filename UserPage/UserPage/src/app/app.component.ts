import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'REGISTRATION PAGE';

  displayName='';
  displayAddress='';
  displayNumber='';
  displayEmail='';

  getValue(name:string , address:string , number:string , email:string){
    this.displayName = name;
    this.displayAddress = address;
    this.displayNumber = number;
    this.displayEmail = email;
  }
}
