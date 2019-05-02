import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LabAssignment3';
  




  constructor() {
  }

  showGreeting() {
    const row2 = document.getElementById('r1c2');
    this.greeting = 'Hello' + this.firstName + '' + this.lastName + '.'

  }
  resetGreeting() {
    const row2 = document.getElementById('r1c2');
    this.greeting = 'r1c2';

  }
}
