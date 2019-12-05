import { Component, OnInit } from '@angular/core';
import { Member } from '../models/member.model';
import { Department } from '../models/department.model';

import { ActivatedRoute } from '@angular/router';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { NullTemplateVisitor } from '@angular/compiler';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  memberForm: FormGroup;
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
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const memId = +params.get('id');
      if (memId) {
        this.getMember(memId);
      }
    });
  }

  private getMember(id: number) {
    if (id === 0) {
      this.member = {
        id: null,
        name: null,
        gender: null,
        department: null,
        email: null,
        userName: null,
        password: null
      };
    } else {
          this.memberservice.getMember(id).subscribe(
            (member) => this.member = member,
            (err) => console.log(err)
          );
        }
  }

  registerMember(): void {
    if ( this.member.id === null ) {
      this.memberservice.registerMember(this.member).subscribe(
        (data: Member) => {
            console.log(data);
            // this.registerForm.reset();
            this.router.navigate(['list']);
          },
          (err: any) => { console.log(err); }
        );
      } else {
        this.memberservice.updateMember(this.member).subscribe(
          ( ) => {
                  // this.registerForm.reset();
                  this.router.navigate(['list']);
                },
            (err: any) => { console.log(err); }
        );
      }
  }
}
