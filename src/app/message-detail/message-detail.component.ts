import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from '../_models/message';
import { PostService } from '../_services/post.service';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent implements OnInit {
  message: Message;
  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.message = data['message'];
     });

     this.postService.getPost(this.message.postId).subscribe((e) => this.message.postName = e.title);
  }

}
