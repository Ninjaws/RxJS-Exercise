import { Component, OnInit } from '@angular/core';
import { Post } from '../_models/post';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from '../_services/member.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: Post;
  constructor(private route: ActivatedRoute, private memberService: MemberService) { }

  ngOnInit() {

    this.route.data.subscribe(data => {
      this.post = data['post'];
     });

     this.memberService.getMember(this.post.userId).subscribe((e) => this.post.username = e.username);
  }

}
