import { Injectable } from '@angular/core';
import { Member } from '../_models/member';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, filter, switchMap, tap } from 'rxjs/operators';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  constructor(private http: HttpClient) {}

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }

  getMember(id: number): Observable<Member> {
    return this.http.get<Member>(
      'https://jsonplaceholder.typicode.com/users/' + id
    );
  }
}
