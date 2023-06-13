import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
myForm:FormGroup=new FormGroup({
 name:new FormControl('Oleksii'),
  age:new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/)]),
  profession:new FormControl('')
})
submitForm(){
console.log(this.myForm.status)
}
}
