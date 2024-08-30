import { Injectable } from '@angular/core';
import { Employee } from '../customClass/employee';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  Employees: Employee[] = [];
  adminFormMessage = '';
  adminLoginFlag: boolean = false;

  constructor(public router: Router) {
    // this.getEmployee(6);
  }

  // getEmployee(count: number) {
  //   for (let i = 1; i <= count; i++)
  //     this.Employees.push(
  //       new Employee(
  //         i,
  //         'user' + i,
  //         new Date('18-July-202' + i),
  //         'useremail@gmail.com',
  //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet debitis totam quod obcaecati sit incidunt?'
  //       )
  //     );
  // }


  adminLogin(email: string, password: string) {
    if (email == 'admin@g.com') {
      this.adminFormMessage = '';
      this.adminLoginFlag = true;
      this.router.navigate(['./employees']);
    } else {
      this.adminLoginFlag = false;
      this.adminFormMessage = 'wrong cred';
    }
  }

  getEmployeeById(id: number) {
    return this.Employees.find((employee: Employee) => employee._id == id);
  }

  logout() {
    this.adminLoginFlag = false;
  }
}

// this.Employees.push(
//   new Employee(
//     102,
//     'abhishek',
//     new Date('18-July-2024'),
//     'useremail@gmail.com',
//     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet debitis totam quod obcaecati sit incidunt?'
//   )
// );
// this.Employees.push(
//   new Employee(
//     101,
//     'Deepak',
//     new Date('17-July-2024'),
//     'useremail@gmail.com',
//     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet debitis totam quod obcaecati sit incidunt?'
//   )
// );
