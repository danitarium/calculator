import { Component, OnInit } from '@angular/core';
import { NumberService } from '../../app/number.service'
import { Calculation} from '../Calculation';
import { Calculations } from '../Calculations';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-d3',
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
  templateUrl: './d3.component.html',
  styleUrls: ['./d3.component.css']
})

export class D3Component implements OnInit {
  CalcOne: Calculation;
  display: string = "";
  numOne: number = 0;
  numTwo: number = 0;
  operator: string = "";
  Nid:number = 0;
  NidMax: number = 0;
  tmp:number = 0;
  dec: boolean = false;
  Rasta: boolean = true;
  Love: boolean = true;  
  calculations = Calculations;
    constructor(private NumberService: NumberService) { }
  
    ngOnInit() {
      this.getCalculations();
    }
    getCalculations(){
      if(this.display === "420"){
        this.Rasta = false;
      }
      else{
        this.Rasta = true;
      }
      if(this.display === "69"){
        this.Love = false;
      }
      else{
        this.Love = true;
      }
      this.NumberService.getCalculations()
       .subscribe(calculations => this.calculations[this.Nid])
         console.log(this.calculations[this.Nid]);
    }
    addTodo(){
      this.NumberService.addTodo(this.CalcOne)
      .subscribe(() => this.calculations[this.Nid])
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
    LeftParen(){if(this.operator === "="){ this.display = "";this.operator = "";}
    this.display=this.display+("(")
    }
    RightParen(){if(this.operator === "="){ this.display = "";this.operator = "";}
    this.display=this.display+(")")
    }
    zero(){if(this.operator === "="){ this.display = "";this.operator = "";}
    if(this.display === ""){ return "";}
      this.display=this.display+("0")}
    decimal(){if(this.operator === "="){ this.display = "";this.operator = "";}
    if(this.display === ""){ return "0.";}
    if(this.dec === false){ 
      this.display=this.display+(".");
      this.dec = true;
    }else{
    }
  }
  plus(){if(this.operator === "="){ this.display = "";this.operator = "";}
    this.display=this.display+("+");
}
  minus(){if(this.operator === "="){ this.display = "";this.operator = "";}
  this.display=this.display+("-");
}
  multiply(){if(this.operator === "="){ this.display = "";this.operator = "";}
  this.display=this.display+("*");
}
  divide(){if(this.operator === "="){ this.display = "";this.operator = "";}
  this.display=this.display+("/");
}
  XY(){this.operator = "XY";this.numOne = +this.display;this.display = "";this.dec = false;}
  add(){  
    var num = (this.numOne + this.numTwo);
    this.display = num.toString();   
  }
  mult(){
      let num = (this.numOne * this.numTwo);
      this.display = num.toString(); 
    }
  div(){
      let num = this.numOne / this.numTwo;
      this.display = num.toString();
    }
  sub(){
      let num = (this.numOne - this.numTwo);
      this.display = num.toString();
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
            else if(this.operator  === "XY"){
              this.Xy();
              }
    }
    equals(){
      this.NidMax++;
      this.numTwo = +this.display;
      this.equal();
      this.numOne = +this.display;
      this.CalcOne = new Calculation();
      this.CalcOne.Hash = this.numOne;
      this.CalcOne.id = this.NidMax;
      this.calculations.push(this.CalcOne);
      this.operator = "="; this.numTwo = 0;
      this.dec = false;
      this.getCalculations();
     
    }
  next(){
    if(this.calculations.length-1 > this.Nid){ 
    this.Nid++;
    this.numOne = +this.calculations[this.Nid].Hash.toString(); 
    this.display = this.calculations[this.Nid].Hash.toString(); 
    this.getCalculations();
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
      this.getCalculations();
    }
  }
  sqrt(){
    this.NidMax++;
    this.numOne = +this.display;
    this.numOne = Math.sqrt(this.numOne);
    this.CalcOne = new Calculation();
      this.CalcOne.Hash = this.numOne;
      this.CalcOne.id = this.NidMax;
      this.calculations.push(this.CalcOne);
      this.operator = "="; this.numTwo = 0;
      this.display = this.calculations[this.NidMax].Hash.toString();
      this.getCalculations();
  }
  factorial(){
    this.NidMax++;
    this.numOne = +this.display;
    this.numTwo = this.numOne;
    this.numOne = 0;
    this.tmp =1;
    if (this.numTwo === 0){
      this.CalcOne = new Calculation();
      this.CalcOne.Hash = this.tmp;
      this.CalcOne.id = this.NidMax;
      this.calculations.push(this.CalcOne);
      this.display = this.calculations[this.NidMax].Hash.toString();
      this.getCalculations(); 
      return;
    }
    while(this.numOne <= this.numTwo){
      this.tmp = this.tmp * this.numTwo;
      this.numTwo--;
      if(this.numOne === this.numTwo){
      this.CalcOne = new Calculation();
      this.CalcOne.Hash = this.tmp;
      this.CalcOne.id = this.NidMax;
      this.calculations.push(this.CalcOne);
      this.display = this.calculations[this.NidMax].Hash.toString();
      this.getCalculations(); 
      }
    }
  }
  AC(){
    this.display = "";this.operator = "";this.numOne = 0;
    this.numTwo = 0;
    this.dec = false;
  }
  Clear(){
    if(this.operator !== "" && this.display !== ""){
      this.display = ""; this.dec = false;
    }
    else if (this.numOne != 0){
    this.AC();
    }
  }
  Xy(){
    if(this.operator  === "XY"){
    this.tmp = this.numTwo;
    let num = this.numOne;
    while(this.tmp >1 ){
      this.tmp--;
      this.numOne = num * this.numOne;
    }
    num = this.numOne;
    this.display = num.toString();
    } 
  }
  Log(){
    this.NidMax++;
    this.numOne = +this.display;
    this.numOne = Math.log(this.numOne);
    this.CalcOne = new Calculation();
      this.CalcOne.Hash = this.numOne;
      this.CalcOne.id = this.NidMax;
      this.calculations.push(this.CalcOne);
      this.operator = "="; this.numTwo = 0;
      this.display = this.calculations[this.NidMax].Hash.toString();
      this.getCalculations();
  }
}