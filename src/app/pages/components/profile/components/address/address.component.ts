import { Component } from '@angular/core';

export interface address {
  Street: string;
  City: string;
  State: string;
  Phone: string;
  Zip: string;
  callCode: string;
  Country: string;
}

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent {
  billingAddress: address = {
    Street: '3576 Glen Street',
    City: 'Summer Shade',
    State: 'Kentucky',
    Phone: '270-428-8378',
    Zip: '42166',
    callCode: '+1',
    Country: 'United States',
  };

  shippingAddress: address = {
    Street: '3133 Lewis Street',
    City: 'Naperville',
    State: 'Illinois',
    Phone: '630-857-9127',
    Zip: '60563',
    callCode: '+1',
    Country: 'United States',
  };
}
