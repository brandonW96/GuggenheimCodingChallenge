import { Fare } from './Fare/Fare';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  FareModel = new Fare(5, 2, new Date(), "05:30:00 PM");
  onSubmit() {
    console.log(this.FareModel);
  }
}


