import { Component, OnInit } from '@angular/core';
import { BlogService } from '../shared/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  blogs: any = [];
  filePath: string;
  constructor(public service : BlogService) { }

  ngOnInit(): void {
    this.service.getBlogs().then((res: any) => {
      this.blogs = res;
    });
      //res.forEach((blog:any) => {
        
        /*if(blog.imageUrl == "OIP.jfif"){
          console.log(blog.imageUrl);
          this.service.getBlogImage(blog.imageUrl).then(res => {
            console.log(res);
           });
        }*/
       
      //});
      //this.blogs = res;
      //console.log(res);
    //});
  }

}
