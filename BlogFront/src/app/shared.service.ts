import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "https://localhost:5001";

  constructor(private http:HttpClient) { }

  getBlogPostList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/BlogPosts');    
  }

  getBlogById(val:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/BlogPosts/'+val);
  }

  getBlogCommentList(val:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/BlogComment/'+val);
  }

}
