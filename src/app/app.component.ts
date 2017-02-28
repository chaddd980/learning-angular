import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <user></user>
  `,
})
export class AppComponent  {
  name = 'Angular';
  email = 'chadd980@hotmail.com';
  address = {
    street: '33 Oakmeadow blvd',
    city: 'toronto',
    province: 'On'
  }
}
