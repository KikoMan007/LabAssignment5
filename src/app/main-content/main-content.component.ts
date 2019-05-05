import { Component, OnInit } from '@angular/core';
import { flushModuleScopingQueueAsMuchAsPossible } from '@angular/core/src/render3/jit/module';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  private studentArray = [];
  constructor() { }

  ngOnInit() {
    this.studentArray = [
      {
        id: 1,
        firstName: 'Michael',
        lastName: 'Asavamedhi',
        course: 'Programming'
      },
      {
        id: 2,
        firstName: 'Mike',
        lastName: 'Tyson',
        course: 'Boxing'
      },
      {
        id: 3,
        firstName: 'Steve',
        lastName: 'Jobs',
        course: 'Programming'
      }
    ];
  }

}
