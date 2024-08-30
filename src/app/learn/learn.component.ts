import { Component } from '@angular/core';

interface subjects {
  sub1: number;
  sub2: number;
  sub3: number;
}

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrl: './learn.component.css',
})
export class LearnComponent {
  message = 'hiiiiii';
  salary = [100.05, 23420.0555, 99.89, 81.7777777, 99888];
  names: string[] = ['deepak', 'priyanshu', 'abhishek'];
  today = new Date();

  static mylocation = '';
  classRef = LearnComponent;
  place = 'center';
  location = ['parel', 'dadar', 'rabale'];

  myAge: number = 0;
  subjects: subjects = {
    sub1: 0,
    sub2: 0,
    sub3: 0,
  };

  divStyle = {
    width: '100px',
    height: '100px',
    background: 'red',
  };

  divClass = ['bg-green-500', 'w-24', 'h-24'];

  divClassBoolean = {
    'bg-green-500': true,
  };

  colorPallet = '#ffffff';

  total: number = 0;
  percentage: number = 0;

  setMarks() {
    if (this.subjects.sub1 > 100) this.subjects.sub1 = 0;
    if (this.subjects.sub2 > 100) this.subjects.sub2 = 0;
    if (this.subjects.sub3 > 100) this.subjects.sub3 = 0;
    this.total = this.subjects.sub1 + this.subjects.sub2 + this.subjects.sub3;
    this.percentage = (this.total / 300) * 100;
    console.log(this.percentage);
  }

  display() {
    console.log(this.message);
    alert(this.message);
  }
  uppercase() {
    this.message = this.message.toUpperCase();
  }
  lowercase() {
    this.message = this.message.toLowerCase();
  }
  changealign(place: string) {
    this.place = place;
  }

  getNode(node?: any, nodeValue?: any) {
    if (node) console.log(node.innerText);
    if (nodeValue) console.log(nodeValue);
  }
}
