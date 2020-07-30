import { Component, OnInit } from '@angular/core';
import { Post } from '../../_models/post';
import { PostService } from '../../_services/post.service';
import { switchMap, map, concatMap, toArray } from 'rxjs/operators';
import { from, Observable } from 'rxjs';
import { MemberService } from '../../_services/member.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts$: Observable<Post[]>;
  constructor(
    private postService: PostService,
    private memberService: MemberService
  ) {}

  ngOnInit() {
    this.posts$ = this.loadPosts();
  }

  loadPosts() {
    const posts$ = this.postService.getLastPosts(10);
    return posts$.pipe(
      switchMap((posts) => from(posts)),
      concatMap((post) => {
        return this.memberService.getMember(post.userId).pipe(
          map((member) => {
            post.username = member.username;
            return post;
          })
        );
      }),
      toArray()
    );
  }
}
