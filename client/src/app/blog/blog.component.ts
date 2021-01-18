import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
  imageUrl: any;
  url: any;
  images: any = [];
  constructor(public service : BlogService, private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getBlogsCount();
    this.service.getBlogsByCount(3).then((res: any) => {
      this.blogs = res;
    });
  }

  getFile(imageName: string) {
    return this.http.get("https://localhost:44376/api/BlogPost/GetImage/"+ imageName, { responseType: 'blob' }).subscribe((file: any) => {
         let url = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file));
         return url;
         //return url;
    });
  }

  async getBlogsCount(){
    
    await this.service.getBlogs().then((res: any) => {
      res.forEach((blog: any) => {
        this.http.get("https://localhost:44376/api/BlogPost/GetImage/"+blog.imageUrl, { responseType: 'blob' }).subscribe((file: any) => {
          this.url = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file));
          this.images.push(this.url);
        });
      });
      console.log(this.images);
      
      let numb = 1;
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
