import { inject } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

export function adminLoginGuard(): boolean {
  const userService = inject(UsersService);
  const router = inject(Router);
  if (!userService.adminLoginFlag) {
    alert('please login');
    router.navigate(['/adminLogin']);
  }
  return userService.adminLoginFlag;
}
