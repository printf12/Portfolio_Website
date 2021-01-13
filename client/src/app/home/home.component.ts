import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Blog, BlogPostType } from '../shared/blog.model';
import { BlogService } from '../shared/blog.service';
import { PortfolioService } from '../shared/portfolio.service';

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
  
  constructor(private http: HttpClient, public service:PortfolioService, private blogService: BlogService) {}

  ngOnInit(){
    this.showMoreProjects(this.projects.length);
    this.showMoreBlogs(this.blogs.length);
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
    this.blogService.getBlogs().then(response =>{
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
    this.blogService.getBlogsByCount(blogsCount).then(response =>{
      console.log(response);
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
