import { Component, OnInit } from '@angular/core';

interface IStudent {
  id: number;
  firstName: string;
  lastName: string;
  course: string;
  editMode: boolean;




}


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  studentArray: Array<IStudent> = [];
  disableAddbutton = false;

  constructor() { }

  ngOnInit() {
    this.studentArray = [
      {
        id: 1,
        firstName: 'Michael',
        lastName: 'Asavamedhi',
        course: 'Programming',
        editMode: false

      },
      {
        id: 2,
        firstName: 'Mike',
        lastName: 'Tyson',
        course: 'Boxing',
        editMode: false
      },
      {
        id: 3,
        firstName: 'Steve',
        lastName: 'Jobs',
        course: 'Programming',
        editMode: false

      },


    ];
  }
  addStudent() {
    this.studentArray.unshift({

      id: null,
      firstName: 'Michael',
      lastName: 'Asavamedhi',
      course: 'Programming',
      editMode: true,

    });
    this.disableAddbutton = true;


  }
  removeStudent(index: number) {
    console.log('index', index);
    this.studentArray.splice(index, 1);

  }
  saveStudent() {
    this.studentArray[0].editMode = false;
    this.disableAddbutton = false;



  }
}


