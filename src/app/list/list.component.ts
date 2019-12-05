import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../models/member.model';
import { MemberService } from '../member.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  members: Member[];

  constructor(private memberservice: MemberService,
              private router: Router,
              private route: ActivatedRoute) {
               }

  ngOnInit() {
    this.memberservice.getMembers().subscribe(
      memberList => this.members = memberList
    );
  }

  removeMember(id: number) {
    this.memberservice.removeMember(id).subscribe(
      () => console.log(`Member with Id = ${id} deleted!`),
     (err: any) => console.log(err)
    );
    this.router.navigate(['list']);
  }


  editMember(memberId: number) {
    this.router.navigate(['/edit', memberId]);
  }

}
