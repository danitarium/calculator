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
import { stack } from 'd3';
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
  counter: number = 0;
  stackVal: string [] = [];
  stackVal2: string [] = [];
  stackOper: string[] = [];
  char2: string = "";
  char: string = "";
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
      if(this.display === "420" || this.display === "311"){
        this.Rasta = false;
      }
      else{
        this.Rasta = true;
      }
      if(this.display === "69" || this.display === "8008"){
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
    one(){if(this.operator === "=" && this.display === ""){ this.display = ""; this.operator = "";}
    this.display=this.display+("1")}
    
    two(){if(this.operator === "=" && this.display === "")
      { this.display = "";this.operator = "";}this.display=this.display+("2")}
    
    three(){if(this.operator === "=" && this.display === "0"){ this.display = ""}
    this.display=this.display+("3")}
    
    four(){if(this.operator === "=" && this.display === "0"){ this.display = "";this.operator = "";}
    this.display=this.display+("4")}
    
    five(){if(this.operator === "=" && this.display === "0"){ this.display = "";this.operator = "";}
    this.display=this.display+("5")}
    
    six(){if(this.operator === "=" && this.display === "0"){ this.display = "";this.operator = "";}
    this.display=this.display+("6")}
    
    seven(){if(this.operator === "=" && this.display === "0"){ this.display = "";this.operator = "";}
    this.display=this.display+("7")}
    
    eight(){if(this.operator === "=" && this.display === "0"){ this.display = "";this.operator = "";}
    this.display=this.display+("8")}
    
    nine(){if(this.operator === "=" && this.display === "0"){ this.display = "";this.operator = "";}
    this.display=this.display+("9")}
    LeftParen(){if(this.operator === "=" && this.display === "0"){ this.display = "";this.operator = "";}
    this.display=this.display+("("); this.counter++;
    }
    RightParen(){if(this.operator === "=" && this.display === "0"){ this.display = "";this.operator = "";}
    this.display=this.display+(")"); this.counter++;
    }
    zero(){if(this.operator === "=" && this.display === "0"){ this.display = "";this.operator = "";}
    if(this.display === ""){ return "";}
      this.display=this.display+("0")}
    decimal(){if(this.operator === "=" && this.display === "0"){ this.display = "";this.operator = "";}
    if(this.display === ""){ return "0.";}
    if(this.dec === false){ 
      this.display=this.display+(".");
      this.dec = true;
    }else{
    }
  }
  plus(){if(this.operator === "=")
    if(this.display[this.display.length-1] === "+"){return}
    if(this.display[this.display.length-1] === "-"){return}
    if(this.display[this.display.length-1] === "*"){return}
    if(this.display[this.display.length-1] === "/"){return}
    if(this.display[this.display.length-1] === "("){return}
    this.display=this.display+("+");this.counter++;
}
  minus(){if(this.operator === "=")
   if(this.display[this.display.length-1] === "+"){return}
    if(this.display[this.display.length-1] === "-"){return}
    if(this.display[this.display.length-1] === "*"){return}
    if(this.display[this.display.length-1] === "/"){return}
    if(this.display[this.display.length-1] === "("){return}
  this.display=this.display+("-");this.counter++;
}
  multiply(){if(this.operator === "=")
  if(this.display[this.display.length-1] === "+"){return}
  if(this.display[this.display.length-1] === "-"){return}
  if(this.display[this.display.length-1] === "*"){return}
  if(this.display[this.display.length-1] === "/"){return}
  if(this.display[this.display.length-1] === "("){return}
  this.display=this.display+("*");this.counter++;
}
  divide(){if(this.operator === "=")
  if(this.display[this.display.length-1] === "+"){return}
  if(this.display[this.display.length-1] === "-"){return}
  if(this.display[this.display.length-1] === "*"){return}
  if(this.display[this.display.length-1] === "/"){return}
  if(this.display[this.display.length-1] === "("){return}
  this.display=this.display+("/");this.counter++;
}
  XY(){
    if(this.operator === "=")
    if(this.display[this.display.length-1] === "+"){return}
    if(this.display[this.display.length-1] === "-"){return}
    if(this.display[this.display.length-1] === "*"){return}
    if(this.display[this.display.length-1] === "/"){return}
    if(this.display[this.display.length-1] === "("){return}
    this.display=this.display+("^");this.counter++;
}
  add(){  
    var num = (this.numOne + this.numTwo);
    return num;  
  }
  mult(){
      let num = (this.numOne * this.numTwo);
      return num;
    }
  div(){
      let num = (this.numOne / this.numTwo);
      return num;
    }
  sub(){
      let num = (this.numOne - this.numTwo);
      return num;
    }
    equal(operator){
      if(operator  === "-"){
      return this.sub();
      }
      if(operator  === "/"){
        return this.div();
        }
        if(operator  === "+"){
         return this.add();
          }
          if(operator  === "*"){
           return this.mult();
            }
            if(operator  === "^"){
              return this.Xy();
              }
              else{
              return +this.display;
              }
    }
    prec(char){ 
    if(char === '^') 
    return 3; 
    else if(char === '*' || char ==='/') 
    return 2; 
    else if(char === '+' || char === '-') 
    return 1; 
    else
    return -1; 
} 
    equals(){
      this.NidMax++;
      if(this.counter === 0){
        this.saveCalc(+this.display);
        return
      }   
      this.stackOper.push('N');
      let j = 0;
      for(let i = 0; i < this.display.length; i++) 
      { 
          // If the scanned character is an operand, add it to output string.
          while(this.display[i] >= '0' && this.display[i] <= '9'){
            this.char2 += this.display[i];
            ++i;
          }
          this.stackVal.push(this.char2); 
          this.char2 = "";
          // If the scanned character is an ‘(‘, push it to the stack. 
          if(this.display[i] === '(') 
            
          this.stackOper.push('('); 
          
          // If the scanned character is an ‘)’, pop and to output string from the stack 
          // until an ‘(‘ is encountered. 
          else if(this.display[i] === ')') 
          { 
              while(this.stackOper[this.stackOper.length-1] !== 'N' && this.stackOper[this.stackOper.length-1] !=='(') 
              { 
                  this.char = this.stackOper[this.stackOper.length-1];  
                  this.stackOper.pop();  
                 
                  this.stackVal.push(this.char);
                  j++; 
              } 
              if(this.stackOper[this.stackOper.length-1] === '(') 
              { 
                this.char = this.stackOper[this.stackOper.length-1];
                this.stackOper.pop(); 
              } 
          } 
            
          //If an operator is scanned 
          else{ 
              while(this.stackOper[this.stackOper.length-1] !== 'N' && this.prec(this.display[i]) <= this.prec(this.stackOper[this.stackOper.length-1])) 
              { 
                this.char = this.stackOper[this.stackOper.length-1];
                 this.stackOper.pop(); 
                
                  this.stackVal.push(this.char);
                  j++; 
              } 
              this.stackOper.push(this.display[i]); 
          } 
    
      } 
      //Pop all the remaining elements from the stack 
      while(this.stackOper[this.stackOper.length-1] != 'N') 
      { 
        this.char = this.stackOper.pop();  
         
          this.stackVal.push(this.char); 
      } 
        this.stackOper = [];
        for(let i = 0; i <= this.stackVal.length; i++){
          if(this.stackVal[i] !== "" && this.stackVal[i] !== undefined){
          this.stackVal2.push(this.stackVal[i]);
          }
        }
for(let i = 0;  i <= this.stackVal2.length; i++){
  if (this.stackVal2[i] === "/" || this.stackVal2[i] === "*"|| this.stackVal2[i] === "-" || this.stackVal2[i] === "+"|| this.stackVal2[i] === "^"){
    this.numTwo = +this.stackOper.pop();
    this.numOne = +this.stackOper.pop();
    this.tmp = +this.equal(this.stackVal2[i]);
    this.stackOper.push(this.tmp.toString());
      }
  else{
  this.stackOper.push(this.stackVal2[i]);
}
}
this.display = this.stackOper.pop();
      this.stackVal2 = [];
      this.stackVal= [];     
      this.stackOper =[];
      this.dec = false;
      this.saveCalc(+this.display);
   
    }
//Driver program to test above functions 

Test(){
  this.display = "((15/(7-(1+1)))*3)-(2+(1+1))";
  this.counter++;
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
    this.saveCalc(this.numOne);
  }
  factorial(){
    this.NidMax++;
    this.numOne = +this.display;
    this.numTwo = this.numOne;
    this.numOne = 0;
    this.tmp =1;
    if (this.numTwo === 0){
      this.saveCalc(this.tmp);
      return;
    }
    while(this.numOne <= this.numTwo){
      this.tmp = this.tmp * this.numTwo;
      this.numTwo--;
      if(this.numOne === this.numTwo){
    this.saveCalc(this.tmp);
      }
    }
  }
  AC(){
    this.display = "";this.operator = "";this.numOne = 0;
    this.counter = 0;
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
    this.tmp = this.numTwo;
    let num = this.numOne;
    while(this.tmp >1 ){
      this.tmp--;
      this.numOne = num * this.numOne;
    }
    num = this.numOne;
    return num;
  }
  Ln(){
    this.NidMax++;
    this.numOne = +this.display;
    this.numOne = Math.log(this.numOne);
    this.saveCalc(this.numOne);
  }
  saveCalc(num: number){
    this.CalcOne = new Calculation();
      this.CalcOne.Hash = num;
      this.CalcOne.id = this.NidMax;
      this.calculations.push(this.CalcOne);
      this.operator = "="; this.numTwo = 0;
      this.display = this.calculations[this.NidMax].Hash.toString();
      this.getCalculations();

  }
}
