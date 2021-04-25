import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-blogcomment',
  templateUrl: './blogcomment.component.html',
  styleUrls: ['./blogcomment.component.css']
})
export class BlogcommentComponent implements OnInit {

  public blogPostId :string = "";
  BlogCommentList:any=[];

  constructor(private service:SharedService,  private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.blogPostId = params.BlogPostId;
    })
   }

  ngOnInit(): void {
   this.service.getBlogCommentList(this.blogPostId).subscribe((post:any) =>{
     this.BlogCommentList = post;
     
   });
  }

}
