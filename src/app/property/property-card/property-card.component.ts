import { Component } from "@angular/core";

@Component({
  selector: 'app-property-card',
  // template: `<h1>I am a card</h1>`,
  templateUrl:'property-card.component.html',
  styleUrls:['property-card.component.css'],
  // styles:['h1{font-weight:normal;}']

})

export class PropertyCardComponent {

  Property: any = {

    "Id": 1,
    "Name":"Maverik's Home",
    "Type":"House",
    "Price":12000,
  }

}
