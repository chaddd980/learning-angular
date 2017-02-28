import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  <h1>Hello {{name}}</h1>
  <p>Email: {{email}}</p>
  <p>Address: {{address.street}} {{address.city}}, {{address.province}}</p>
  <button (click) = "toggleHobbies()">{{showHobbies ? "Hide Hobbies" : "Show Hobbies"}}</button>
  <div *ngIf="showHobbies">
    <h3>Hobbies</h3>
    <ul>
      <li *ngFor="let hobby of hobbies">
        {{hobby}}
      </li>
    </ul>
  </div>
  <hr />
  <h3>Edit User</h3>
  <form>
    <label> Name: </label> <br/>
    <input type="text" name="name" [(ngModel)]="name" /><br />
    <label> Email: </label> <br/>
    <input type="text" name="email" [(ngModel)]="email" /><br />
    <label> Street: </label> <br/>
    <input type="text" name="address.street" [(ngModel)]="address.street" /><br />
    <label> City: </label> <br/>
    <input type="text" name="address.city" [(ngModel)]="address.city" /><br />
    <label> Province: </label> <br/>
    <input type="text" name="address.province" [(ngModel)]="address.province" /><br />
  </form>
  `,
})
export class UserComponent  {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;

  constructor(){
    this.name = 'Angular';
    this.email = 'chadd980@hotmail.com';
    this.address = {
      street: '33 Oakmeadow blvd',
      city: 'toronto',
      province: 'On'
    }
    this.hobbies = ['music', 'movies', 'sports'];
    this.showHobbies = false;
  }
  toggleHobbies() {
    this.showHobbies = !this.showHobbies
  }
}

interface address {
  street: string;
  city: string;
  province: string;
}
