import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Message } from '../_models/message';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private http: HttpClient) {}

  getLastMessages(amount: number): Observable<Message[]> {
    return this.http
      .get<Message[]>('https://jsonplaceholder.typicode.com/comments', {
        observe: 'response',
      })
      .pipe(
        map((response) => {
          const amountOfItems = response.body.length;
          return response.body.slice(amountOfItems - amount, amountOfItems);
        })
      );
  }

  getMessage(id: number): Observable<Message> {
    return this.http.get<Message>(
      'https://jsonplaceholder.typicode.com/comments/' + id
    );
  }
}
