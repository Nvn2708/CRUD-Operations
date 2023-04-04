import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employee = [
    {
      id: 1,
      empID: 'TP1405',
      name: 'T Naveen',
      gender: 'Male',
      contactNo: '9030270010',
      salary: 2500,
      manager: 'Ram',
    },
    {
      id: 2,
      empID: 'TP1400',
      name: 'Pradeep',
      gender: 'Male',
      contactNo: '900123456',
      salary: 3500,
      manager: 'Ram',

    },
    {
      id: 3,
      empID: 'TP1403',
      name: 'Goutham',
      gender: 'Male',
      contactNo: '950015452',
      salary: 2000,
      manager: 'Ram',
    },
    {
      id: 4,
      empID: 'TP1401',
      name: 'Harikrishna',
      gender: 'Male',
      contactNo: '950015452',
      salary: 2000,
      manager: 'Sashank',
    },
    {
      id: 5,
      empID: 'TP1500',
      name: 'Daya',
      gender: 'Male',
      contactNo: '950015452',
      salary: 2000,
      manager: 'Sashank',
    },
  ];
  constructor() {}
}
