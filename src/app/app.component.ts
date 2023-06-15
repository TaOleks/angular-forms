import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  itemsTitles=[
    'Category',
    'Items',
    'Gl Code',
    'Amount',
    'Sales Tax',
    'Total'
  ]

  localItems = [
    {id:1,
    name:'',
    items:[{
      id:1,
      name:'',
      glCode:null,
      amount:null,
      salesTax:null
    }]
  }
  ]

submitForm(myForm:NgForm){
console.log(myForm)
}
}
