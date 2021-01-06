import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../shared/portfolio.model';
import { PortfolioService } from '../shared/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projects: any = [];
  projectsCount: number;
  numbersArray: any = [];

  constructor(public service : PortfolioService) { }
 

  ngOnInit(): void {
    this.getBlogsCount();
    this.service.getPortfolioByCount(3).then(res => {
      this.projects = res;
    })
  }

  async getBlogsCount(){
    let numb = 1;
    return await this.service.getPortfolios().then(res => {
      console.log(res);
      let resultCount = res.length;
      let loops = resultCount / 6;
      console.log(loops);
      if(Number.isInteger(loops)){
        for(let i = 1; i <= Math.round(resultCount / 6); i++){
          this.numbersArray.push(i);
        }
        console.log(this.numbersArray);
      }
      else {
        for(let i = 1; i <= Math.round(resultCount / 6)+1; i++){
          this.numbersArray.push(i);
        }
        console.log(this.numbersArray);

      }
    });
  }

  getPagePerIndex(paginationIndex){
    this.service.getPagePerIndex(paginationIndex).then(res => {
      console.log(res);
      this.projects = res;
    })
  }
  

}
