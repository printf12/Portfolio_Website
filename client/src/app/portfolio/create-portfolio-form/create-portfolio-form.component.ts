import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Portfolio } from 'src/app/shared/portfolio.model';
import { PortfolioService } from 'src/app/shared/portfolio.service';

@Component({
  selector: 'app-create-portfolio-form',
  templateUrl: './create-portfolio-form.component.html',
  styleUrls: ['./create-portfolio-form.component.css']
})
export class CreatePortfolioFormComponent implements OnInit {

  formData: any = {};

  constructor(public service:PortfolioService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }


  onSubmit(form:NgForm){
    this.service.postCreateNewPortfolio().subscribe(
    res => {
      this.onReset(form);
      this.toastr.success('Submitted successfully', 'Portfolio Created')

    },
    err => { console.log(err); }
    );
  }
  onReset(form:NgForm){
    form.form.reset();
    this.formData = new Portfolio();
  }

}
