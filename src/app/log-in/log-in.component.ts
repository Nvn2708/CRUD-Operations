import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators,} from '@angular/forms';
import { Router } from '@angular/router';
import { ToolbarService } from '../toolbar.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  logInForm: FormGroup;
  protected hide = true;
  protected title = 'Welcome to my project'

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) {

    this.logInForm = this.fb.group({
      useremail: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  protected logIn() {
    if (this.logInForm.valid) {
      this.http.get<any>('http://localhost:3000/signUp').subscribe(
        (res) => {
          const user = res.find((a: any) => {
            return (
              a.email === this.logInForm.value.useremail &&
              a.password === this.logInForm.value.password
            );
          });
          if (user) {
            window.alert('LogIn Successfull');
            this.logInForm.reset();
            this.router.navigate(['./home']);

          } else {
            window.alert('User Not Found');
          }
        },
        (err) => {
          window.alert('Something went wrong');
        }
      );
    } else {
      window.alert('Please Enter The Input Fields');
    }
  }
  forgot() { }

  protected showpassword() {
    let x: any = document.getElementById('password');
    if (x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }
  }
}
