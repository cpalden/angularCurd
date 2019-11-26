import { Component, OnInit } from '@angular/core';
import { Member } from '../models/member.model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // temporarily hard coding list of students
  list: Member[] = [
    {
      id: 1,
      name: 'Chime',
      gender: 'male',
      department: 'Staff',
      email: 'chime@ryerson.ca',
      userName: 'chime',
      password: 'password'
    },
    {
      id: 2,
      name: 'C',
      gender: 'male',
      department: 'Computer Science',
      email: 'c@ryerson.ca',
      userName: 'chime',
      password: 'password'
    },
    {
      id: 3,
      name: 'P',
      gender: 'male',
      department: 'Computer Science',
      email: 'p@ryerson.ca',
      userName: 'chime',
      password: 'password'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
