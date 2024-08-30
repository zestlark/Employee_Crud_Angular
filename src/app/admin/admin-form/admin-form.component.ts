import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrl: './admin-form.component.css',
})
export class AdminFormComponent {
  constructor(public userService: UsersService) {}
  onSubmit(form: any) {
    if (form.valid) {
      this.userService.adminLogin(form.value.email, form.value.password);
    }
  }
}
