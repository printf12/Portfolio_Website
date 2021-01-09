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
  imageUrl : string = "assets/theme/images/my-pict.jpg"
  fileToUpload: File | null;

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
  handleFileInput(file :FileList){
  this.fileToUpload = file.item(0);
  //show Image Preiew
  var reader = new FileReader();
  reader.onload = (event:any) => {
    this.imageUrl = event.target.result;
  }
  reader.readAsDataURL(this.fileToUpload)

  }
}
