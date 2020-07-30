import { Component, OnInit } from '@angular/core';
import { Post } from '../../_models/post';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from '../../_services/member.service';
import { MessageService } from '../../_services/message.service';
import { switchMap, map, concatMap, toArray } from 'rxjs/operators';
import { from, Observable, forkJoin } from 'rxjs';
import { PostService } from '../../_services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  post$: Observable<Post>;

  constructor(
    private route: ActivatedRoute,
    private memberService: MemberService,
    private messageService: MessageService,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.post$ = this.loadPost();
  }

  loadPost() {
    const post$ = this.route.data.pipe(
      map((data) => {
        return data['post'] as Post;
      }),
      concatMap((post) => {
        return forkJoin(this.memberService.getMember(post.userId), this.loadMessages(post.id))
        .pipe(
          map(([member, messages]) => {
            post.username = member.username;
            post.messages = messages;
            return post;
          })
        );
      })
    );
    return post$;
  }

  loadMessages(postId: number) {
    const messageList$ = this.messageService.getMessagesOfPost(postId);

    return messageList$.pipe(
      switchMap((messages) => from(messages)),
      concatMap((message) => {
        return this.postService.getPost(message.postId).pipe(
          map((post) => {
            message.postName = post.title;
            return message;
          })
        );
      }),
      toArray()
    );
  }
}
