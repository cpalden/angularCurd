import { Injectable } from '@angular/core';
import { Student } from './models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // temporarily hard coding list of students
  private listStudents: Student[] = [
    {
      id: 1,
      name: 'Chime',
      year: 3,
      department: 'Computer Science',
      faculty: 'Science',
      email: 'chime@ryerson.ca'
    },
    {
      id: 2,
      name: 'C',
      year: 4,
      department: 'Computer Science',
      faculty: 'Science',
      email: 'c@ryerson.ca'
    },
    {
      id: 3,
      name: 'P',
      year: 3,
      department: 'Computer Science',
      faculty: 'Science',
      email: 'p@ryerson.ca'
    }
  ];
  constructor() { }
  // get a student's detail
  // get the list of students
}
