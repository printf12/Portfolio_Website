import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Blog, BlogPostType } from '../shared/blog.model';
import { BlogService } from '../shared/blog.service';
import { PortfolioService } from '../shared/portfolio.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects: any = [];
  blogs: any = [];

  blogsData: any = [];
  moreBlogs: any = [];

  url: any;
  images: any = [];

  imageUrl: any;

  constructor(private http: HttpClient, public service: PortfolioService, private blogService: BlogService, private sanitizer: DomSanitizer) { }

  ngOnInit(){
    this.showMoreProjects(this.projects.length);
    this.showMoreBlogs(this.blogs.length);
  }

  getFile(imageName: string): any {
    return this.http.get("https://localhost:44376/api/BlogPost/GetImage/"+ imageName, { responseType: 'blob' }).subscribe((file: any) => {
         let test = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file));
         this.imageUrl = test;
    });
  }

  getProjects(){
    this.service.getPortfolios().then(response =>{
      console.log(response);
      this.projects = response;
      }, error =>{
        console.error();
    })
  }

  getBlogs(){
    this.blogService.getBlogs().then((response:any) =>{
      
      console.log(response);
      this.blogsData = response;
      this.blogsData.forEach((element: any) => {
        element.blogPostType = BlogPostType[element.blogPostType];
      });
      this.blogs = response;
      }, error =>{
        console.error();
    })
  }

  showMoreProjects(projectsCount: any) {
    console.log(projectsCount);
    this.service.getPortfolioByCount(projectsCount).then(response =>{
      console.log(response);
      this.projects = response;
      }, error =>{
        console.error();
    })
  }

  showMoreBlogs(blogsCount: any) {
    this.blogService.getBlogsByCount(blogsCount).then((response:any) =>{
      response.forEach((blog: any) => {
        this.http.get("https://localhost:44376/api/BlogPost/GetImage/"+blog.imageUrl, { responseType: 'blob' }).subscribe((file: any) => {
          this.url = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file));
          this.images.push(this.url);
        });
      });
      this.moreBlogs = response;
      this.moreBlogs.forEach((element: any) => {
        element.blogPostType = BlogPostType[element.blogPostType];
      });
      this.blogs = response;
      }, error =>{
        console.error();
    })
  }


}
