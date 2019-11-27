import { Component, OnInit } from '@angular/core';
import { Member } from '../models/member.model';
import { Department } from '../models/department.model';

import { MemberService } from '../member.service';
import { Router } from '@angular/router';

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

  departments: Department[] = [
    {id: 1, name: 'Student'},
    {id: 2, name: 'Staff'}
  ];
  constructor(private memberservice: MemberService,
              private router: Router) {

               }

  ngOnInit() {
  }

  registerMember(): void {
    this.memberservice.registerMember(this.member);
    this.router.navigate(['list']);
  }

}
