import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToolbarService } from '../toolbar.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  popUp: boolean = false;
  createPopUp: boolean = false;
  logInForm: FormGroup;
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  hide = true;
  isValid: boolean = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    public toolbar: ToolbarService
  ) {
    
    this.toolbar.hide()

    this.logInForm = this.fb.group({
      useremail: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.toolbar.hide()
  }

  logIn() {
    if (this.logInForm.valid) {
      this.http.get<any>('http://localhost:3000/signUp').subscribe(
        (res) => {
          console.log(res);
          const user = res.find((a: any) => {
            return (
              a.email === this.logInForm.value.useremail &&
              a.password === this.logInForm.value.password
            );
          });
          if (user) {
            window.alert('LogIn Successfull');
            this.toolbar.show();
            this.toolbar.valid = true;
            this.logInForm.reset();
            this.router.navigate(['home']);

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
  showpassword() {
    let x: any = document.getElementById('password');
    if (x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }
  }
}
