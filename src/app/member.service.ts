import { Injectable } from '@angular/core';
import { Member } from './models/member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  // temporarily hard coding list of students
  private listMembers: Member[] = [
    {
      id: 1,
      name: 'Chime',
      gender: 'male',
      department: '1',
      email: 'chime@ryerson.ca',
      userName: 'chime',
      password: 'password'
    },
    {
      id: 2,
      name: 'C',
      gender: 'male',
      department: '1',
      email: 'c@ryerson.ca',
      userName: 'c',
      password: 'password'
    },
    {
      id: 3,
      name: 'P',
      gender: 'male',
      department: '1',
      email: 'p@ryerson.ca',
      userName: 'p',
      password: 'password'
    }
  ];
  constructor() { }
  // get a member's detail

  // get the list of members
  getMembers(): Member[] {
    return this.listMembers;
  }

  // register a new memebr
  registerMember(member: Member) {
    this.listMembers.push(member);
  }
}
