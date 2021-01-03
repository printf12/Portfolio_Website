import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {}  

  comments: Comment[] = [];
  
  getCommentsByBlogId(blogId){
    console.log(blogId);
    return this.http.get("https://localhost:44376/api/comment"+"/"+blogId).toPromise().then(res => this.comments = res as Comment[])
  }

  submitComment(comment: any){
      console.log(comment);
    return this.http.post("https://localhost:44376/api/comment", comment).toPromise().then(res => {
        console.log(res);
        return this.getCommentsByBlogId(comment.BlogPost.blogPostId);

    });
  }
}