import { Component, OnInit } from '@angular/core';
import { BlogService } from '../shared/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(public service : BlogService) { }

  ngOnInit(): void {
    this.service.getBlogs();
  }

}
