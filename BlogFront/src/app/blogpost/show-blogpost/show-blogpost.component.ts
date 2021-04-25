import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-blogpost',
  templateUrl: './show-blogpost.component.html',
  styleUrls: ['./show-blogpost.component.css']
})
export class ShowBlogpostComponent implements OnInit {

  constructor(private service:SharedService) { }

  BlogPostList:any=[];

  ngOnInit(): void {
    this.refreshBlogPostList();
  }
  
  refreshBlogPostList(){
    this.service.getBlogPostList().subscribe(data => {
      this.BlogPostList = data;
      console.log(data.length);
      console.log(data);
    });
  }
}
