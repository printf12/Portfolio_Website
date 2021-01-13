import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Portfolio } from './portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) {}  
  //fromData: Portfolio = new Portfolio();
  list : Portfolio[];
  readonly baseURl = 'https://localhost:44376/api/Portfolio';

  postCreateNewPortfolio(fromData: any){
    return this.http.post(this.baseURl, fromData);
  }

  getPortfolios(){
    return this.http.get(this.baseURl).toPromise();
  }
  
  getPortfolioById(id:any) {
    return this.http.get(this.baseURl+'/'+id).toPromise().then(res => this.list = res as Portfolio[]);
  }

  getPortfolioByCount(portfoliosCount: any){
    return this.http.get(this.baseURl+'/PortfoliosCount/'+portfoliosCount).toPromise();
  }

  getPagePerIndex(paginationIndex: any){
    return this.http.get(this.baseURl+'/PortfolioPerPage/'+paginationIndex).toPromise();
  }
}
