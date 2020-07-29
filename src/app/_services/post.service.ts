import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../_models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getLastPosts(amount: number): Observable<Post[]> {
    return this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts/', {
        observe: 'response',
      })
      .pipe(
        map((response) => {
          const amountOfItems = response.body.length;
          return response.body.slice(
            amountOfItems - amount,
            amountOfItems
          );
        })
      );
  }

  getPost(id: number): Observable<Post> {
    return this.http
      .get<Post>('https://jsonplaceholder.typicode.com/posts/' + id, {
        observe: 'response',
      })
      .pipe(
        map((response) => {
          return response.body;
        })
      );
  }
}
