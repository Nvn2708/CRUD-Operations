import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, } from '@angular/forms';
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
  protected title = 'Welcome to my project';
  protected toaster: boolean = false;
  protected toasteMessage: string = '';
  protected info: boolean = false;
  protected header: string = '';

  @ViewChild('liveToast')
  toast!: ElementRef;

  showToaster(message: string, successType: boolean) {
    this.toaster = true;
    this.info = successType;
    this.toasteMessage = message;
    this.header = successType ? 'Success' : 'Error';
    setTimeout(() => {
      this.toaster = false;
    }, 3000)
  }


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

  ngOnInit(): void { }

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
            this.showToaster('LogIn successfull', true)
            this.logInForm.reset();
            this.router.navigate(['./home']);
          } else {
            this.showToaster('User Not Found', true)
          }
        },
        (err) => {
          this.showToaster('Something went wrong', false)
        }
      );
    } else {
      this.showToaster('Please Enter The Input Fields', false)
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
