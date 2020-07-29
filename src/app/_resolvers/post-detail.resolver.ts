import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { PostService } from '../_services/post.service';
import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Post } from '../_models/post';

@Injectable()
export class PostDetailResolver implements Resolve<Post> {
  constructor(private postService: PostService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Post> {
    
    return this.postService.getPost(route.params['id']).pipe(
      catchError(error => {
          this.router.navigate(['/posts']);
          return of(null);
      })
    );
  }
}
