import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  users = [
    {
      firstName:"Ivan", 
      lastName:"Ivanov",
      phoneNumber: "+359 2 123 456"
    },
    {
      firstName:"Petar", 
      lastName:"Petrov",
      phoneNumber: "+359 2 987 654"
    }
  ];

  showPhoneNumber = false; 

  myProp = "Hello World!";

  constructor() {
    setTimeout(() => {
      this.myProp = "Hello from the other side!";
    }, 1000);
  }

  handleClickEvent() {
    this.showPhoneNumber = !this.showPhoneNumber;
  }

}
