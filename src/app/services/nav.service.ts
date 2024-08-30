import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavService {
  constructor() {}

  navStatus = false;

  toggleNav() {
    this.navStatus = !this.navStatus;
    console.log('navStatus:', this.navStatus);
  }
}
