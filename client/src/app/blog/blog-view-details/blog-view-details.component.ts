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

 comments = [
  {
    "id": 1,
    "name": "Hardik",
    "commentText": "Curabitur nec nulla lectus, non hendrerit lorem. Quisque lorem risus, porttitor eget fringilla non, vehicula sed",
    "time": "just Now"
  },
  {
    "id": 2,
    "name": "Paresh",
    "commentText": "Curabitur nec nulla lectus, non hendrerit lorem. Quisque lorem risus, porttitor eget fringilla non, vehicula sed tortor. Proin enim quam, vulputate at lobortis quis, condimentum at justo. Phasellus nec nisi justo. Ut luctus",
    "time": "just Now"
  },
  {
    "id": 3,
    "name": "Kiran",
    "commentText": "Curabitur nec nulla lectus, non hendrerit lorem. Quisque lorem risus, porttitor eget fringilla non, vehicula sed",
    "time": "just Now"
  },
  {
    "id": 4,
    "name": "Mahesh",
    "commentText": "Curabitur nec nulla lectus, non hendrerit lorem. Quisque lorem risus, porttitor eget fringilla non, vehicula sed tortor. Proin enim quam, vulputate at lobortis quis, condimentum at justo. Phasellus nec nisi justo. Ut luctus",
    "time": "just Now"
  },
  {
    "id": 5,
    "name": "Karan",
    "commentText": "Curabitur nec nulla lectus, non hendrerit lorem. Quisque lorem risus, porttitor eget fringilla non, vehicula sed tortor. Proin enim quam, vulputate at lobortis quis, condimentum at justo. Phasellus nec nisi justo. Ut luctus",
    "time": "just Now"
  }
]

showCommentReplyInput = false;
 
  ngOnInit(){ 
    let id = this.route.snapshot.paramMap.get("id");
    this.service.getBlogById(id).then(response => {
      console.log(response);
      let blogType = BlogPostType[response.blogPostType];
      response['blogType'] = blogType;
      this.blogDetails = response;
    });

  }

  replayCommentBtnClick(){
    if(this.showCommentReplyInput == false){
      this.showCommentReplyInput = true;
    }
    else {
      this.showCommentReplyInput = false;
    }
    
  }





}
