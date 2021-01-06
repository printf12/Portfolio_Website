import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from './blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) {}  
  fromData: Blog = new Blog();
  list : Blog[];
  readonly baseURl = 'https://localhost:44376/api/BlogPost';

  postCreateNewBlog(){
    return this.http.post(this.baseURl, this.fromData);
  }

  getBlogs(){
    return this.http.get(this.baseURl).toPromise();
  }

  getBlogById(id:any) {
    return this.http.get(this.baseURl+'/'+id).toPromise();
  }

  getBlogsByCount(blogsCount){
    return this.http.get(this.baseURl+'/BlogsCount/'+blogsCount).toPromise();
  }
}
