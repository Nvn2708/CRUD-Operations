import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  popUp: boolean = false;
  createPopUp:boolean = false;
  logInForm:FormGroup;
  constructor(private fb: FormBuilder) {
    this.logInForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }
  logIn(){
    this.popUp = true
    this.createPopUp = false
  }
  cancel(){
    this.popUp = false
  }
  create(){
    this.createPopUp = true
    this.popUp = false
  }
  cancel1(){
    this.createPopUp = false
  }
  onSubmitLogIn(){
    window.alert("LogIn success")
  }
  onSubmit(){
    window.alert("signup success")
  }
}
