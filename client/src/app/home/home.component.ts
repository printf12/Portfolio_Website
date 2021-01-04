import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BlogPostType } from '../shared/blog.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects: any = [];
  blogs: any = [];
  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.getPortfolios();
    this.getBlogs();
  }

  getPortfolios(){
    this.http.get("https://localhost:44376/api/portfolio").subscribe(response =>{
      console.log(response);
      this.projects = response;
      }, error =>{
        console.error();
    })
  }

  getBlogs(){
    this.http.get("https://localhost:44376/api/blogPost").subscribe(response =>{
      console.log(response);
      response.forEach(element => {
        element.blogPostType = BlogPostType[element.blogPostType];
      });
      this.blogs = response;
      }, error =>{
        console.error();
    })
  }

  showMoreProjects(projectsCount) {
    this.http.get("https://localhost:44376/api/portfolio/more/"+projectsCount).subscribe(response =>{
      console.log(response);
      this.projects = response;
      }, error =>{
        console.error();
    })
  }

  showMoreBlogs(blogsCount) {
    this.http.get("https://localhost:44376/api/blogPost/more/"+blogsCount).subscribe(response =>{
      console.log(response);
      response.forEach(element => {
        element.blogPostType = BlogPostType[element.blogPostType];
      });
      this.blogs = response;
      }, error =>{
        console.error();
    })
  }


}
