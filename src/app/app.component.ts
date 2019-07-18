import { Component } from '@angular/core';
import { NumberService } from './number.service'
import { Calculations } from './Calculations'
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-root',
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
        
      })),
      state('closed', style({

        opacity: 1,
        backgroundImage: 'linear-gradient(yellow,green,red)'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
    trigger('Love', [
      state('open', style({
        opacity: 1,
        
      })),
      state('closed', style({

        opacity: 1,
        color: 'pink',
        backgroundColor: 'red'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  rasta:boolean = true;
  love:boolean = true;
  constructor(private NumberService: NumberService) { }

  ngOnInit() {
    this.NumberService.getCalculation(Calculations[Calculations.length-1]);
  }
  Rasta(){
    this.NumberService.getCalculation(Calculations[Calculations.length-1]);
  if(Calculations[Calculations.length-1].Hash === 420){
    this.rasta = false;
  }
  else{
    this.rasta = true;
  }
}
Love(){
  this.NumberService.getCalculation(Calculations[Calculations.length-1]);
  if(Calculations[Calculations.length-1].Hash === 69){
    this.love = false;
  }
  else{
    this.love = true;
  }
}
}
