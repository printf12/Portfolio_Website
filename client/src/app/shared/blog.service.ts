import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from './blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) {}  
  
  list : Blog[];
  readonly baseURl = 'https://localhost:44376/api/BlogPost';
  fileToUpload: File | null;

  postCreateNewBlog(formData: any){
    return this.http.post(this.baseURl, formData);
  }

  getBlogsCount(){
    return this.http.get(this.baseURl + '/GetBlogsCount').toPromise();
  }

  getBlogs(){
    return this.http.get(this.baseURl).toPromise();
  }

  getBlogById(id:any) {
    return this.http.get(this.baseURl+'/'+id).toPromise();
  }

  getBlogsByCount(blogsCount: any){
    return this.http.get(this.baseURl+'/BlogsCount/'+blogsCount).toPromise();
  }

  uploadFileProcess(file:any){
    console.log(file);
    
    return this.http.post(this.baseURl+'/uploadFile', file, {reportProgress: true, observe: 'events'});
  }

  getBlogImage(imageName:any){
    return this.http.get(this.baseURl+'/GetBlogImage/'+imageName).toPromise();
  }

  getPagePerIndex(paginationIndex: any){
    return this.http.get(this.baseURl+'/BlogPerPage/'+paginationIndex).toPromise();
  }
}
