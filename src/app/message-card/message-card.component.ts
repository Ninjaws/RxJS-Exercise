import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../_models/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.css']
})
export class MessageCardComponent implements OnInit {
  @Input() message: Message;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick()
  {
    const routerString = '/messages/' + this.message.id.toString().toLowerCase();
    console.log(routerString);
    this.router.navigate([routerString]);
  }

}
