import { Component, OnInit } from '@angular/core';
import { Post } from '../_models/post';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from '../_services/member.service';
import { Message } from '../_models/message';
import { MessageService } from '../_services/message.service';
import { switchMap, map } from 'rxjs/operators';
import { from } from 'rxjs';
import { PostService } from '../_services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  post: Post;
  messages: Message[] = [];

  constructor(
    private route: ActivatedRoute,
    private memberService: MemberService,
    private messageService: MessageService,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.post = data['post'];
    });

    this.memberService
      .getMember(this.post.userId)
      .subscribe((e) => (this.post.username = e.username));
    const messages$ = this.messageService.getMessagesOfPost(this.post.id);

    messages$
      .pipe(
        switchMap((messages) => from(messages)),
        map((message) => {
          this.postService.getPost(message.postId).subscribe((e) => {
            message.postName = e.title;
            //NOTE: Seems to mess with the sorting, but dont know how to add the whole list at once yet
            this.messages.push(message);
            return message;
          });
        })
      )
      .subscribe();
  }
}
