import { Component, OnInit } from '@angular/core';
import { Message } from '../_models/message';
import { MessageService } from '../_services/message.service';
import { switchMap, map } from 'rxjs/operators';
import { PostService } from '../_services/post.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [];

  constructor(
    private messageService: MessageService,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages() {
    const messages$ = this.messageService.getLastMessages(10);
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
