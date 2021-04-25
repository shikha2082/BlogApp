import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SharedService} from 'src/app/shared.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-view-blog-details',
  templateUrl: './view-blog-details.component.html',
  styleUrls: ['./view-blog-details.component.css']
})
export class ViewBlogDetailsComponent implements OnInit {

  public blogPostId :string = "";
  public blogPost:any = null;
  pipe = new DatePipe('en-US');
  public publishedOn:any =null;
  BlogCommentList:any=[];


  constructor(private service:SharedService,  private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.blogPostId = params.BlogPostId;
    });
  }

  ngOnInit(): void {
    this.service.getBlogById(this.blogPostId).subscribe((post:any) =>{
      this.blogPost = post;
      this.publishedOn = this.pipe.transform(post.PublishedOn, 'MM/dd/yyyy');
      
    });
  }

}
