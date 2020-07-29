import { Component, OnInit } from '@angular/core';
import { Post } from '../_models/post';
import { PostService } from '../_services/post.service';
import { switchMap, map } from 'rxjs/operators';
import { from } from 'rxjs';
import { MemberService } from '../_services/member.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  constructor(private postService: PostService, private memberService: MemberService) { }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    const posts$ = this.postService.getLastPosts(10);
    posts$
      .pipe(
        switchMap((posts) => from(posts)),
        map((post) => {
          this.memberService.getMember(post.userId).subscribe((e) => {
            post.username = e.username;
            //NOTE: Seems to mess with the sorting, but dont know how to add the whole list at once yet
            this.posts.push(post);
            return post;
          });
        })
      )
      .subscribe();
  }


}
