import { Component, OnInit } from '@angular/core';
import { Member } from '../models/member.model';
import { MemberService } from '../member.service';




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // temporarily hard coding list of students
  list: Member[];
  constructor(private memberservice: MemberService) { }

  ngOnInit() {
    this.list = this.memberservice.getMembers();
  }

}
