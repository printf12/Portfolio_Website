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
  numbersArray: any = [];
  constructor(public service : BlogService) { }

  ngOnInit(): void {
    this.getBlogsCount();
    this.service.getBlogsByCount(3).then((res: any) => {
      this.blogs = res;
    });
  }

  getBlogsCount(){
    let numb = 1;
    return this.service.getBlogs().then((res: any) => {
      let resultCount = res.length;
      let loops = resultCount / 6;
      if(Number.isInteger(loops)){
        for(let i = 1; i <= Math.round(resultCount / 6); i++){
          this.numbersArray.push(i);
        }
      }
      else {
        let commaValue = (loops.toString().split("."))[1].substr(0, 1);
        console.log(commaValue);
        if(parseInt(commaValue) >= 5){
          for(let i = 1; i <= Math.round(resultCount / 6); i++){
            this.numbersArray.push(i);
          }
        }
        else {
          for(let i = 1; i <= Math.round(resultCount / 6) + 1; i++){
            this.numbersArray.push(i);
          }
        }

      }
    });
  }


  getPagePerIndex(paginationIndex: any){
    this.service.getPagePerIndex(paginationIndex).then(res => {
      console.log(res);
      this.blogs = res;
    })
  }
}
