import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../../_models/member';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  @Input() member: Member;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick()
  {
    const routerString = '/members/' + this.member.id.toString().toLowerCase();
    this.router.navigate([routerString]);
  }

}
