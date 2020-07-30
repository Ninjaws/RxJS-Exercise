import { Component, OnInit } from '@angular/core';
import { Message } from '../../_models/message';
import { MessageService } from '../../_services/message.service';
import { switchMap, map, concatMap, toArray, tap } from 'rxjs/operators';
import { PostService } from '../../_services/post.service';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
})
export class MessageListComponent implements OnInit {
  messages$: Observable<Message[]>;

  constructor(
    private messageService: MessageService,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.messages$ = this.loadMessages();
  }

  loadMessages() {
    const messageList$ = this.messageService.getLastMessages(10);

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
