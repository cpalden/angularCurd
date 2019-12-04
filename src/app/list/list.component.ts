import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../models/member.model';
import { MemberService } from '../member.service';
import { Router, ActivatedRoute } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
// import { Observable } from 'rxjs';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  members: Member[];
 @Input() member: Member;

  constructor(private memberservice: MemberService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.memberservice.getMembers().subscribe(
      memberList => this.members = memberList
    );

   /* this.route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.getMember(id);
    }); */
  }
// need to change
/*
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
*/
  removeMember() {
    this.memberservice.removeMember(this.member.id).subscribe(
      () => console.log(`Member with Id = ${this.member.id} deleted!`),
     (err: any) => console.log(err)
    );
    this.router.navigate(['list']);
  }


  editMember(memberId: number) {
    this.router.navigate(['/edit', memberId]);
  }

}
