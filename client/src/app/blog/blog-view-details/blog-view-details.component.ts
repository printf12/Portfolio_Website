import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Blog, BlogPostType } from 'src/app/shared/blog.model';
import { BlogService } from 'src/app/shared/blog.service';
import { CommentService } from 'src/app/shared/comment.service';

@Component({
  selector: 'app-blog-view-details',
  templateUrl: './blog-view-details.component.html',
  styles: [
  ]
})
export class BlogViewDetailsComponent implements OnInit {
  data:any;
  blogDetails:Blog[] = [];
  comment: any = {};
  constructor(private toastr:ToastrService, public service:BlogService,public commentService: CommentService,  private route:ActivatedRoute, private router: Router) { }

  comments:Comment[]= [];
  commentsUpdated:Comment[]= [];
  
  showCommentReplyInput = false;
  showComments = true;
  showCommentsUpdate = false;

  ngOnInit(){ 
    let id = this.route.snapshot.paramMap.get("id");
    this.service.getBlogById(id).then(response => {
      console.log(response);
      let blogType = BlogPostType[response.blogPostType];
      response['blogType'] = blogType;
      this.blogDetails = response;
    });
    this.getCommentsByBlogId(id);
  }

  getCommentsByBlogId(blogId){
    this.comments = [];
    this.commentService.getCommentsByBlogId(blogId).then(response => {
      this.comments = response;
    });
  }

  submitComment(comment: any) {
    let blogId = this.route.snapshot.paramMap.get("id"); 
    //comment['blogId'] = blogId;
   
    console.log(comment);
    this.service.getBlogById(blogId).then(resp => {
      console.log(resp);
    comment["BlogPost"] = resp;
    comment["CommentedAt"] = "now";
    this.commentService.submitComment(comment).then(res => {
      this.toastr.success('Submitted successfully', 'Comment Created');
      this.showComments = false;
      this.showCommentsUpdate = true;
      this.commentsUpdated = res;
    });
    
    })

    
  }





}
