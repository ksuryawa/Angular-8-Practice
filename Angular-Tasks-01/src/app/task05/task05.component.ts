import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task05',
  templateUrl: './task05.component.html',
  styleUrls: ['./task05.component.css']
})
export class Task05Component implements OnInit {

  
myJson=[];

OnAdd(empid,empName,empSalary)
{
  let tempJson={
    eid:empid.value,
    eName:empName.value,
    eSalary:empSalary.value
  }
  
  this.myJson.push(tempJson);
  console.log("Data Added...Array length ::"+this.myJson);
  empid.value='';
  empName.value='';
  empSalary.value='';
  
}
OnRemove(index)
{

  //ref.deleteRow(index);
  console.log("Deleted Row :: "+index)
  this.myJson.splice(index,1)
  console.log("Data Deleted...New Array length ::"+this.myJson.length)
  //console.log("JSON afer temp1"+temp1.length)

}
OnRemoveAll()
{
  this.myJson.splice(0);
}

  constructor() { }

  ngOnInit() {
  }

}
