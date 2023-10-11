import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { userModel } from './home.componet.model';
import { ApiService } from '../shared/api.service';
import { Observable } from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ToolbarService } from '../toolbar.service';
// import { promises, resolve } from 'dns';  


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchText: any;
  userForm: UntypedFormGroup;
  listData: any;
  alert: boolean = false;
  index: any;
  name = '';
  address: any = '';
  popUp: boolean = false;
  addButton: boolean = true;
  updateButton: boolean = false;
  userModelObj: userModel = new userModel();
  userData: any;
  email = '';
  // gender = '';
  share = "datasharing through components";
  // dataObj = [
  //   { "id": 1, "name": "Pradeep" },
  //   { "id": 2, "name": "Goutham" },
  //   { "id": 3, "name": "Kannaya" }
  // ];
  displayedColumns: string[] = ['sno', 'empId', 'name', 'address','contact', 'email'];
  
  msg: any;
  aa: boolean = false;
  customerEmailFilter: any = '';
  



  

  constructor(private fb: UntypedFormBuilder, private api: ApiService, public toolbar: ToolbarService) {
    this.listData = [];
    this.userForm = this.fb.group({
      empID: [''],
      name: ['', Validators.required],
      address: ['', Validators.required],
      contactNo: ['', Validators.required],
      email: ['', Validators.required],
    })
  }
  

  add() {
    this.popUp = true;
  }

  // public addItem(): void {
  //   if (this.userForm.valid) {
  //     this.listData.push(this.userForm.value);
  //     this.userForm.reset();
  //     this.popUp = false;
  //     window.alert("added successfully")
  //     // this.alert = true;
  //   }
  //   else {
  //     window.alert("Please enter all inputs")
  //   }
  // }

  addItem() {
    if (this.userForm.valid) {
      this.userModelObj.empID = this.userForm.value.empID;
      this.userModelObj.name = this.userForm.value.name;
      // this.userModelObj.gender = this.userForm.value.gender;
      this.userModelObj.address = this.userForm.value.address;
      this.userModelObj.contactNo = this.userForm.value.contactNo;
      this.userModelObj.email = this.userForm.value.email;

      this.api.postUser(this.userModelObj)
        .subscribe(res => {
          window.alert("ADDED SUCCEFULLY")
          var ref = document.getElementById('close')
          ref?.click();
          this.userForm.reset();
          // this.popUp = false;
          this.getUser();
        },
          err => {
            window.alert("SOMETHING WENT WRONG")
          })
    } else {
      window.alert("Please Update all Input Fields")
    }
  }
  getUser() {
    this.api.getUser()
      .subscribe(res => {
        this.userData = res;
      })
  }
  close() {
    this.popUp = false;
    this.userForm.reset();
    this.getUser()

  }
  editItem(item: any, i: any) {
    console.log(item, "item.name:", item.name)
    item.isEdit = true;
    this.updateButton = true;
    this.addButton = false;
    let ref = document.getElementById('form')
    console.log(ref)
    ref?.click();
    this.userModelObj.id = item.id;
    this.userForm.controls['empID'].setValue(item.empID)
    this.userForm.controls['name'].setValue(item.name)
    // this.userForm.controls['gender'].setValue(item.gender)
    this.userForm.controls['address'].setValue(item.address)
    this.userForm.controls['email'].setValue(item.email)
    this.userForm.controls['contactNo'].setValue(item.contactNo)
  }

  setIndex(ii: any) {
    this.aa = ii;
    console.log(this.aa)
  }
  reset() {
    this.userForm.reset();
  }

  removeItem(item: any) {
    console.log(item, item.id)
    this.api.deleteUser(item.id)
      .subscribe(res => {
        console.log(res)
        window.alert("User Removed From The List")
        this.getUser();
      })
  }

  updateItem() {
    if (this.userForm.valid) {
      this.userModelObj.empID = this.userForm.value.empID
      this.userModelObj.name = this.userForm.value.name
      // this.userModelObj.gender = this.userForm.value.gender
      this.userModelObj.address = this.userForm.value.address
      this.userModelObj.contactNo = this.userForm.value.contactNo
      this.userModelObj.email = this.userForm.value.email

      this.api.updateUser(this.userModelObj, this.userModelObj.id)
        .subscribe(res => {
          window.alert("UPDATED SUCCESSFULLY")
          var ref = document.getElementById('close')
          ref?.click();
          this.userForm.reset();
          this.getUser()
        })
    } else {
      window.alert("Please Update All the Inputs")
    }
  }
  ngOnInit(): void {
    this.getUser();
    this.toolbar.show()

    //promises

    // const promise = new Promise(res => {
    //   setTimeout(() => {
    //     res("Promises working")
    //   }, 1000);
    // })

    // promise.then(result => console.log(result))

    //observables

    // const observable = new Observable(sub => {
    //   setTimeout(() => {
    //     sub.next('Observable working')
    //   }, 1000);
    // })

    // observable.subscribe(res => console.log(res))
  }


}

