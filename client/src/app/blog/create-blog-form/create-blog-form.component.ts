import { DatePipe } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Blog } from 'src/app/shared/blog.model';
import { BlogService } from 'src/app/shared/blog.service';

@Component({
  selector: 'app-create-blog-form',
  templateUrl: './create-blog-form.component.html',
  styles: [
  ]
})
export class CreateBlogFormComponent implements OnInit {

  fromData: Blog = new  Blog();
  
  imageSrc: string;

  constructor(public service:BlogService, private toastr:ToastrService) { }

  

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.service.postCreateNewBlog(this.fromData).subscribe(
    res => {
      console.log(res);
      this.onReset(form);
      this.toastr.success('Submitted successfully', 'Post Created')
    },
    err => { console.log(err); }
    );
  }

  onReset(form:NgForm){
    form.form.reset();
    this.fromData = new Blog();
  }

  uploadImage(event:any){
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      var file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
   
        this.imageSrc = reader.result as string;
   
      };
     
      var imageName = event.target.files[0].name;
      this.fromData.imageUrl = imageName;
      this.fromData.creationDay = new Date();
    }
    
  }

}
