import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  popUp: boolean = false;
  createPopUp: boolean = false;
  hide = true;


  public signUpForm!: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      dob: [''],
      email: [''],
      mobile: [''],
      password: [''],
    })
  }
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };


  cancel1() {
    this.router.navigate(['login']);
  }

  signUp() { 
    if (this.signUpForm.valid) {
      console.log("entered")
      console.log(this.signUpForm.value)
      this.http.post<any>('http://localhost:3000/signUp', this.signUpForm.value)
        .subscribe(res => {
          window.alert("Register Succefull");
          this.signUpForm.reset();
          this.router.navigate(['login'])
        }, err => {
          window.alert("Something Went Wrong")
        }
        )
    }
  else{
  window.alert("Please Enter The Input Fields")
}
  }

 
}

