import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customvalidator } from '../customClass/customvalidator';
import { ActivatedRoute } from '@angular/router';
import { EmployeService } from '../services/employe.service';
import { Employee } from '../customClass/employee';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css',
})
export class EmployeeFormComponent {
  dept = ['software developer', 'tester', 'ui designer'];
  employeeForm: FormGroup;
  updateMode: boolean = false;
  profilePic: object = {};
  selectedImageFile: File | undefined;
  editUserData: Employee | undefined;

  constructor(
    public activeRoute: ActivatedRoute,
    public employeeService: EmployeService,
  ) {
    // form Group
    this.employeeForm = new FormGroup(
      {
        _id: new FormControl('', [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
        confirmPassword: new FormControl('', [Validators.required]),
        email: new FormControl(this.editUserData?.email, [
          Validators.required,
          Validators.email,
        ]),
        name: new FormControl(this.editUserData?.name, [Validators.required]),
        address: new FormControl(this.editUserData?.address, [
          Validators.required,
          Validators.minLength(20),
        ]),
        dept: new FormControl(this.editUserData?.dept, [Validators.required]),
        joiningDate: new FormControl(this.editUserData?.joiningDate, [
          Validators.required,
        ]),

        profilePic: new FormControl(null),
      },
      [Customvalidator.valueMatch3('password', 'confirmPassword')]
    );

    this.getById();
  }

  getById() {
    //get Data By Id
    let paramEmpId = this.activeRoute.snapshot.params['empId'];
    if (paramEmpId) {
      this.employeeService.getEmployeeById(paramEmpId).subscribe({
        next: (data: any) => {
          this.employeeForm.get('_id')?.setValue(data._id);
          this.employeeForm.get('name')?.setValue(data.name);
          this.employeeForm.get('password')?.setValue(data.password);
          this.employeeForm.get('confirmPassword')?.setValue(data.password);
          this.employeeForm.get('email')?.setValue(data.email);
          // date processing
          const joiningDateValue = new Date(
            data.joiningDate
          ).toLocaleDateString('en-CA');
          this.employeeForm.get('joiningDate')?.setValue(joiningDateValue);
          this.employeeForm.get('dept')?.setValue(data.dept);
          this.employeeForm.get('address')?.setValue(data.address);

          this.updateMode = true;

          // this.employeeForm.get('profilePic')?.setValue(profilePicFile);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  get gId() {
    return this.employeeForm.get('_id');
  }

  getField(field: string) {
    return this.employeeForm.get(field);
  }

  fileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedImageFile = input.files[0];
      this.employeeForm.get('profilePic')?.setValue(this.selectedImageFile);
      console.log(this.selectedImageFile);

      // this.employeService.uploadFile(this.selectedImageFile);
    }
  }

  formSubmit() {
    console.log(this.employeeForm.value);
    let data = {
      _id: this.employeeForm.value._id,
      name: this.employeeForm.value.name,
      password: this.employeeForm.value.password,
      email: this.employeeForm.value.email,
      joiningDate: this.employeeForm.value.joiningDate,
      dept: this.employeeForm.value.dept,
      address: this.employeeForm.value.address,
      profilePic: this.employeeForm.value.profilePic,
    };
    if (this.updateMode) this.employeeService.updateEmployee(data);
    else this.employeeService.addEmployee(data);
    // console.log(this.employeeForm.value);

    // this.employeService.addEmployee(this.employeeForm.value);
  }
}
