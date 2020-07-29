import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../_models/member';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from '../_services/member.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  member: Member;
  constructor(private route: ActivatedRoute, private memberService: MemberService) { }

  ngOnInit() {

    this.route.data.subscribe(data => {
      this.member = data['member'];
     });
  }

}
