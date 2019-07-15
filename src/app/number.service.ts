import { Injectable } from '@angular/core';
import { Calculation} from './Calculation';
import { Calculations } from './Calculations';
import { Observable, from,of} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

getCalculations():Observable<Calculation[]> {
      return of(Calculations);
}
}