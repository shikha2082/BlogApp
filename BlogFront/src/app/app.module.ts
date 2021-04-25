import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { ShowBlogpostComponent } from './blogpost/show-blogpost/show-blogpost.component';
import {SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BlogcommentComponent } from './blogcomment/blogcomment.component';
import { ViewBlogDetailsComponent } from './blogpost/view-blog-details/view-blog-details.component'; 

@NgModule({
  declarations: [
    AppComponent,
    BlogpostComponent,
    ShowBlogpostComponent,
    BlogcommentComponent,
    ViewBlogDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
