import { Component, OnInit } from '@angular/core';
import { Member } from '../_models/member';
import { MemberService } from '../_services/member.service';
import { Pagination, PaginatedResult } from '../_models/pagination';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members: Member[];
  pagination: Pagination;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
   
    this.loadMembers();
  }

  loadMembers()
  {
    this.memberService.getMembers()
    .subscribe(e => this.members = e);
  }

}
