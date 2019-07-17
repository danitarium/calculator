import { Component, OnInit } from '@angular/core';
import { NumberService } from '../../app/number.service'
import { Calculation} from '../Calculation';
import { Calculations } from '../Calculations';
import { ChildActivationEnd } from '@angular/router';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
CalcOne: Calculation;
display: string = "";
numOne: number = 0;
numTwo: number = 0;
operator: string = "";
Nid:number = 0;
calculations=Calculations;
  constructor(private NumberService: NumberService) { }

  ngOnInit() {
    this.getCalculations();
  }
  getCalculations(){
    this.NumberService.getCalculations()
     .subscribe(display => this.display = display);
       console.log(this.calculations[this.Nid]);
  }
  one(){if(this.operator === "="){ this.display = ""; this.operator = "";}
  this.display=this.display+("1")}
  
  two(){if(this.operator === "=")
    { this.display = "";this.operator = "";}this.display=this.display+("2")}
  
  three(){if(this.operator === "="){ this.display = ""}
  this.display=this.display+("3")}
  
  four(){if(this.operator === "="){ this.display = "";this.operator = "";}
  this.display=this.display+("4")}
  
  five(){if(this.operator === "="){ this.display = "";this.operator = "";}
  this.display=this.display+("5")}
  
  six(){if(this.operator === "="){ this.display = "";this.operator = "";}
  this.display=this.display+("6")}
  
  seven(){if(this.operator === "="){ this.display = "";this.operator = "";}
  this.display=this.display+("7")}
  
  eight(){if(this.operator === "="){ this.display = "";this.operator = "";}
  this.display=this.display+("8")}
  
  nine(){if(this.operator === "="){ this.display = "";this.operator = "";}
  this.display=this.display+("9")}
  
  zero(){if(this.operator === "="){ this.display = "";this.operator = "";}
  if(this.display === ""){ return "";}
    this.display=this.display+("0")}
  
  plus(){this.operator = "+";this.numOne = +this.display;this.display = ""; }
  
  minus(){this.operator = "-";this.numOne = +this.display;this.display = "";}

  multiply(){this.operator = "*";this.numOne = +this.display;this.display = "";}
  
  divide(){this.operator = "/";this.numOne = +this.display;this.display = "";}
  
  add(){
    if(this.operator  === "+"){
    var num = (this.numOne + this.numTwo);
    this.display = num.toString();
    }
  }
  mult(){
    if(this.operator  === "*"){
      let num = (this.numOne * this.numTwo);
      this.display = num.toString();
      }
    }
  div(){
    if(this.operator  === "/"){
      let num = this.numOne / this.numTwo;
      this.display = num.toString();
      }
    }
  sub(){
    if(this.operator  === "-"){
      let num = (this.numOne - this.numTwo);
      this.display = num.toString();
      
      }
    }
    equal(){
      if(this.operator  === "-"){
      this.sub();
      }
      else if(this.operator  === "/"){
        this.div();
        }
        else if(this.operator  === "+"){
          this.add();
          }
          else if(this.operator  === "*"){
            this.mult();
            }
    }
    equals(){
      this.numTwo = +this.display;
      this.equal();
      this.numOne = +this.display;
      this.CalcOne = new Calculation();
      this.CalcOne.Hash = this.numOne;
      this.CalcOne.id = this.Nid;
      this.calculations.push(this.CalcOne);
      this.operator = "="; this.numTwo = 0;
      this.getCalculations();
     
    }
  next(){
    if(this.calculations.length-1 > this.Nid){ 
    this.Nid++;
    this.numOne = +this.calculations[this.Nid].Hash.toString(); 
    this.display = this.calculations[this.Nid].Hash.toString(); 
  }else{}
}
  previous(){
    if(this.Nid=== 0){
      this.Nid = 0;
    }
    else{
      this.Nid--;
      this.numOne = +this.calculations[this.Nid].Hash.toString(); 
      this.display = this.calculations[this.Nid].Hash.toString();
    }
  }
}
