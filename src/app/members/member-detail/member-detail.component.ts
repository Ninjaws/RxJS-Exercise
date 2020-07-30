import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../../_models/member';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
})
export class MemberDetailComponent implements OnInit {
  member$: Observable<Member>;
  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
   this.member$ = this.loadMember();
  }

  loadMember() {
    const member$ = this.route.data
    .pipe(
      map((data) => {
        return data['member'] as Member;
      })
    );
    return member$;
  }
}
