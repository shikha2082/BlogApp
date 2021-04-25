import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogcommentComponent } from './blogcomment/blogcomment.component';

import {BlogpostComponent} from './blogpost/blogpost.component';
import { ViewBlogDetailsComponent } from './blogpost/view-blog-details/view-blog-details.component';


const routes: Routes = [
  {path:'', component:BlogpostComponent},
  {path:':BlogPostId', component:ViewBlogDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
