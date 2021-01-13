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

  formData: any = {};
  fileFormData: any ;
  
  imageSrc: string;
  
  constructor(public service:BlogService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.service.postCreateNewBlog(this.formData).subscribe(
    res => {
      this.service.uploadFileProcess(this.fileFormData).subscribe(res => {
        console.log("fileUploaded");
      })
      console.log(res);
      this.onReset(form);
      this.toastr.success('Submitted successfully', 'Post Created');
      this.toastr.success('Upload successfully', 'Image Uploaded');

    },
    err => { console.log(err); }
    );
  }

  onReset(form:NgForm){
    form.form.reset();
    this.formData = new Blog();
  }

  uploadImage(event:any){
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      var file = event.target.files[0];

      console.log(file.name);

      this.fileFormData = new FormData();
      this.fileFormData.append('file', file, file.name);
      
      reader.readAsDataURL(file);
      
      reader.onload = () => {
        this.imageSrc = reader.result as string;
      };
      var imgName = (event.target.files[0].name).split('.');

      var imageName =  imgName[0] + "_" + Date.now() +"."+ imgName[1];
      this.formData.imageUrl = imageName;
      this.formData.creationDay = new Date();

      this.fileFormData = new FormData();
      this.fileFormData.append('file', file, imageName);
    }
  }

}
