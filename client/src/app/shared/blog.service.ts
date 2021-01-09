import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { read } from 'fs';
import { Blog } from './blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) {}  
  fromData: Blog = new Blog();
  list : Blog[];
  readonly baseURl = 'https://localhost:44376/api/BlogPost';
  readonly imageUrl = "https://localhost:44376/Resources/Images/";
  fileToUpload: File | null;

  postCreateNewBlog(){
    return this.http.post(this.baseURl, this.fromData);
  }
  UploadPhoto(val:any){
    return this.http.post(this.imageUrl, this.fromData);
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
