import { Injectable } from '@angular/core';
import { Member } from '../_models/member';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { MemberService } from '../_services/member.service';
import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MemberDetailResolver implements Resolve<Member> {
  constructor(private memberService: MemberService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Member> {
    return this.memberService.getMember(route.params['id']).pipe(
      catchError((error) => {
        this.router.navigate(['/members']);
        return of(null);
      })
    );
  }
}
