import { Component, OnInit } from '@angular/core';
import { Member } from '../../_models/member';
import { MemberService } from '../../_services/member.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
})
export class MemberListComponent implements OnInit {
  members$: Observable<Member[]>;

  constructor(private memberService: MemberService) {}

  ngOnInit() {
    this.members$ = this.loadMembers();
  }

  loadMembers() {
    return this.memberService.getMembers();
  }
}
