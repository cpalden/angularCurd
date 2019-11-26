import { Component, OnInit } from '@angular/core';
import { Member } from '../models/member.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  member: Member = {
    id: null,
    name: null,
    gender: null,
    department: null,
    email: null,
    userName: null,
    password: null
  };
  constructor() { }

  ngOnInit() {
  }

  registerMember(newMember: Member): void {
    console.log(newMember);
  }

}
