import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  protected title: string = 'Register your self first'
  protected hide: boolean = true;
  errormessage: string = '';


  public signUpForm!: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.initForm();
   }

  ngOnInit(): void {
    this.signUpForm.valueChanges.subscribe(value => {
      if (value.confirmPassword) {
        if (value.confirmPassword === value.password) this.errormessage = 'Matched';
        else this.errormessage = "Not matched"
      }
    })
  }

  initForm() {
    this.signUpForm = this.fb.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      dateOfBirth: new FormControl(''),
      newPassword: new FormControl('',[Validators.required]),
      confirmPassword: new FormControl(''),
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
    else {
      // window.alert("Please Enter The Input Fields")
    }
  }


}

