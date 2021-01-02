import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/shared/blog.service';

@Component({
  selector: 'app-blog-view-details',
  templateUrl: './blog-view-details.component.html',
  styles: [
  ]
})
export class BlogViewDetailsComponent implements OnInit {
  data:any;


  constructor(public service:BlogService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(){

    let id = this.route.snapshot.paramMap.get("id");
    this.service.getBlogById(id);

  }





}
