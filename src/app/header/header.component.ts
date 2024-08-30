import { Component } from '@angular/core';
import { NavService } from '../services/nav.service';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  logo = 'Employee Crud';
  renderedlogo = '';
  index = 0;
  constructor(public navService: NavService, public userService: UsersService) {
    setInterval(() => {
      let text = this.logo;
      if (text.length != this.index) {
        this.index++;
        this.renderedlogo = text.slice(0, this.index);
      } else {
        this.index = 0;
      }
    }, 200);
  }

  toggleNav() {
    this.navService.toggleNav();
  }

  recieveNewLogo(logo: string) {
    this.logo = logo;
  }
}
