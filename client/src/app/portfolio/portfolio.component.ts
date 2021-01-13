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
    this.getPorfolioCount();
    this.service.getPortfolioByCount(3).then(res => {
      this.projects = res;
    })
  }

  getPorfolioCount(){
    let numb = 1;
    return this.service.getPortfolios().then((res: any) => {
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
      this.projects = res;
    })
  }
  

}
