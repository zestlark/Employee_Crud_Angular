import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../customClass/employee';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class EmployeService {
  Employees: Employee[] = [];

  serverUrl = 'http://localhost:3000';

  constructor(public http: HttpClient, public router: Router) {}

  addEmployee(employee: any) {
    console.log(employee);
    const form = new FormData();
    form.append('_id', employee._id);
    form.append('name', employee.name);
    form.append('password', employee.password);
    form.append('email', employee.email);
    form.append('dept', employee.dept);
    form.append('joiningDate', employee.joiningDate);
    form.append('address', employee.address);
    form.append('profilePic', employee.profilePic);

    const myReq = this.http.post(this.serverUrl + '/add', form);
    myReq.subscribe({
      next: (success) => {
        alert('new Employee with id ' + employee._id + ' Added');
        this.router.navigate(['employees']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  updateEmployee(employee: any) {
    console.log(employee);
    const form = new FormData();
    form.append('_id', employee._id);
    form.append('name', employee.name);
    form.append('password', employee.password);
    form.append('email', employee.email);
    form.append('dept', employee.dept);
    form.append('joiningDate', employee.joiningDate);
    form.append('address', employee.address);
    form.append('profilePic', employee.profilePic);
    console.log(employee);

    const myReq = this.http.patch(
      this.serverUrl + '/update/' + employee._id,
      form
    );
    myReq.subscribe({
      next: (success) => {
        alert('Employee with id ' + employee._id + ' updated');
        this.router.navigate(['employees']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  uploadFile(file: any) {
    const formData = new FormData();
    formData.append('profilePic', file);
    // this.http.post(this.serverUrl + '/upload', formData).subscribe({
    //   next: (data) => {
    //     console.log(data);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });
  }

  getEmployee() {
    return this.http.get(this.serverUrl);

    // {
    //   next: (data: Employee[]) => {
    //     this.Employees = data;
    //   },
    //   error: () => {},
    // }
  }

  getEmployeeById(_id: number) {
    return this.http.get(this.serverUrl + '/' + _id);
  }

  deleteEmployee(_id: number) {
    return this.http.delete(this.serverUrl + '/delete/' + _id);
  }
}
