import { Injectable } from '@angular/core';
import { Calculation} from './Calculation';
import { Calculations } from './Calculations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from,of} from 'rxjs'
import { Calc  } from './interface'
@Injectable({
  providedIn: 'root'
})
export class NumberService {
  private url = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) { }
  addTodo(newCalc: Calculation) {
    return this.httpClient.post(this.url, newCalc);
  }
  getCalculations() {
    return this.httpClient.get(this.url,{responseType: 'text'});
  }
  getCalculation(newCalc: Calculation):Observable<Calculation>{
    return of(Calculations[Calculations.length-1]);
  }
}