import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css',
})
export class LogoComponent {
  logoObject = {
    path: 'https://img.icons8.com/?size=64&id=69409&format=png',
    alternatemsg: 'logo',
    height: 35,
    width: 35,
  };

  @Input()
  logo = '';

  @Output()
  logoEmitter = new EventEmitter<string>();

  changeLogo(newlogo: string) {
    this.logoEmitter.emit(newlogo);
  }
  // ngOnInit(): void {
  //   console.log('init called');
  //   this.logoEmitter.emit('Hello logo');
  // }
}
