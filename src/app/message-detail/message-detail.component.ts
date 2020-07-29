import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from '../_models/message';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent implements OnInit {
  message: Message;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.message = data['message'];
     });
  }

}
