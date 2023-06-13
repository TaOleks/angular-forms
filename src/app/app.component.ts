import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myForm!:FormGroup
constructor(private formBuilder:FormBuilder){
  this.myForm = this.formBuilder.group({
    name:[''],
    age:['38'],
    profession:['']
  })
}
submitForm(){
console.log(this.myForm)
}
}
