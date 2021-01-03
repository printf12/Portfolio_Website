import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {}  

  comments: Comment[] = [];
  
  getComments(){
    return this.http.get("https://localhost:44376/api/comment").toPromise().then(res => this.comments = res as Comment[])
  }

  submitComment(comment: any){
      console.log(comment);
    return this.http.post("https://localhost:44376/api/comment", comment).toPromise().then(res => {
        console.log(res);
    });
  }
}