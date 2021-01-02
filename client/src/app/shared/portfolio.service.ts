import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Portfolio } from './portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) {}  
  fromData: Portfolio = new Portfolio();
  list : Portfolio[];
  readonly baseURl = 'https://localhost:44376/api/Portfolio';

  postCreateNewPortfolio(){
    return this.http.post(this.baseURl, this.fromData);
  }

  getPortfolios(){
  this.http.get(this.baseURl).toPromise().then(res => this.list = res as Portfolio[])
  }
}