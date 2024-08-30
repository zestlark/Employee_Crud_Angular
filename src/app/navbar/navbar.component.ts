import { Component } from '@angular/core';
import { NavService } from '../services/nav.service';
import { HeaderComponent } from '../header/header.component';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
   constructor(public navService: NavService,public userService:UsersService) {}

  toggleNav() {
    this.navService.toggleNav();
  }
}