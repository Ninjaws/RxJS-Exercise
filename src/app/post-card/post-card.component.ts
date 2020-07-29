import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../_models/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  @Input() post: Post;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick()
  {
    const routerString = '/posts/' + this.post.id.toString().toLowerCase();
    this.router.navigate([routerString]);
  }

}
