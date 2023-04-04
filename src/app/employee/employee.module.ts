import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { MatTableModule } from '@angular/material/table';
// import { MatPaginator } from '@angular/material/paginator';

@NgModule({
  declarations: [EmployeeComponent],
  imports: [CommonModule, EmployeeRoutingModule, MatTableModule],
})
export class EmployeeModule {}
