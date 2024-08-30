import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { EmployeService } from '../services/employe.service';
import { Employee } from '../customClass/employee';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent {
  sortOrder: string = 'asc';
  sortField: string = '_id';
  searchId: number = 0;
  buttonsStyle = {
    edit: {},
  };
  employees: Employee[] = [];

  constructor(
    public userService: UsersService,
    public employeeService: EmployeService
  ) {
    this.getEmployees();
  }

  searchById() {
    if (this.searchById !== null)
      if (this.searchId > 0)
        this.employeeService.getEmployeeById(this.searchId).subscribe({
          next: (data: any) => {
            if (data?._id) this.employees = [data];
            else {
              this.employees = [];
            }
            console.log(data);
          },
        });
      else this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployee().subscribe({
      next: (data: any) => {
        this.employees = data;
        console.log(data);
      },
    });
  }

  deleteById(_id: number) {
    console.log(_id);
    this.employeeService.deleteEmployee(_id).subscribe({
      next: (msg) => {
        console.log(msg);
        this.getEmployees();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
