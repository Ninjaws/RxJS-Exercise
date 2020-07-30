import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from '../../_models/message';
import { PostService } from '../../_services/post.service';
import { map, concatMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css'],
})
export class MessageDetailComponent implements OnInit {
  message$: Observable<Message>;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.message$ = this.loadMessage();
  }

  loadMessage() {
    const message$ = this.route.data.pipe(
      map((data) => {
        return data['message'] as Message;
      }),
      concatMap((message) => {
        return this.postService.getPost(message.postId).pipe(
          map((post) => {
            message.postName = post.title;
            return message;
          })
        );
      })
    );
    return message$;
  }
}
