import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student.model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // temporarily hard coding list of students
  list: Student[] = [
    {
      id: 1,
      name: 'Chime',
      year: 3,
      department: 'Computer Science',
      faculty: 'Science',
      email: 'chime@ryerson.ca',
      photoPath: 'assets/images/chime1.jpg'
    },
    {
      id: 2,
      name: 'C',
      year: 4,
      department: 'Computer Science',
      faculty: 'Science',
      email: 'c@ryerson.ca',
      photoPath: 'assets/images/chime2.jpg'
    },
    {
      id: 3,
      name: 'P',
      year: 3,
      department: 'Computer Science',
      faculty: 'Science',
      email: 'p@ryerson.ca',
      photoPath: 'assets/images/chime3.jpg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
