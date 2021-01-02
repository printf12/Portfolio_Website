import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog, BlogPostType } from 'src/app/shared/blog.model';
import { BlogService } from 'src/app/shared/blog.service';
import { BlogComponent } from '../blog.component';

@Component({
  selector: 'app-blog-view-details',
  templateUrl: './blog-view-details.component.html',
  styles: [
  ]
})
export class BlogViewDetailsComponent implements OnInit {
  data:any;
  blogDetails:Blog[] = [];


  constructor(public service:BlogService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(){

    let id = this.route.snapshot.paramMap.get("id");
    this.service.getBlogById(id).then(response => {
      console.log(response);
      let blogType = BlogPostType[response.blogPostType];
      response['blogType'] = blogType;
      this.blogDetails = response;
    });

  }





}
