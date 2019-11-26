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
      department: 'Computer Science',
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
      userName: 'c',
      password: 'password'
    },
    {
      id: 3,
      name: 'P',
      gender: 'male',
      department: 'Computer Science',
      email: 'p@ryerson.ca',
      userName: 'p',
      password: 'password'
    }
  ];
  constructor() { }
  // get a student's detail
  // get the list of students
}
