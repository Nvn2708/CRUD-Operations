import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { EMPLOYEE_DETAILS } from './employee.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToolbarService } from '../toolbar.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit, AfterViewInit {
  employeeData: EMPLOYEE_DETAILS[] = [];

  displayedColumns: string[] = ['id', 'name', 'salary', 'manager'];
  
  dataSource = new MatTableDataSource<EMPLOYEE_DETAILS>(this.employeeData);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private employee: EmployeeService, public toolbar: ToolbarService) {this.toolbar.show()}

  ngOnInit(): void {
    this.toolbar.show()
    this.employeeData = this.employee.employee;
    // this.toolbar.show();
    console.log(this.employeeData);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
