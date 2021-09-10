import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task06',
  templateUrl: './task06.component.html',
  styleUrls: ['./task06.component.css']
})
export class Task06Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  myNumber:number;
  
  result:string=''
  CheckPrimeOrNot()
  {
    let count=0;
		for(let i = 1 ; i <=this.myNumber ; i++)	
		{	
			if(this.myNumber % i == 0)				//condition for getting the factors of number n
			count=count+1;
		}
		if(count == 2)		                        //if factors are two then, number is prime else not
		{
      this.result= "Number is prime number";
      console.log(this.result)
    }
		else
    {
      this.result= "Not a Prime Number";
      console.log(this.result)
    }
	
  }

}
