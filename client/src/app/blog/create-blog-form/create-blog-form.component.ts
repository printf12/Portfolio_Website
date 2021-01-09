import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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


  constructor(public service:BlogService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.service.postCreateNewBlog().subscribe(
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
    this.service.fromData = new Blog();
  }

  upladoImage(event:any){
    var file = event.target.files[0];
    const formData:FormData=new FormData();

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.service.fromData.imageUrl = this.service.imageUrl;
    })
  }

}
