import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../customClass/employee';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.css',
})
export class EmployeeCardComponent {
  @Input()
  employee = new Employee();

  @Output()
  deleteEmmiter = new EventEmitter<number>();

  constructor(public userService: UsersService) {}

  deleteById(_id: number) {
    if (this.userService.adminLoginFlag) {
      const deleteConfirm = confirm(
        'Do you really want to delete thsi employee wit id ' + _id
      );
      if (deleteConfirm) this.deleteEmmiter.emit(_id);
    } else {
      alert('login first');
    }
  }

  toBase64(arr: any) {
    return btoa(
      arr?.reduce(
        (data: any, byte: any) => data + String.fromCharCode(byte),
        ''
      )
    );
  }

  toUrl(data: any) {
    let profilePicBuffer = data.data.data;

    // console.log(`data:image/jpeg;base64,${this.toBase64(profilePicBuffer)}`);

    return `data:image/jpeg;base64,${this.toBase64(profilePicBuffer)}`;
  }
}
