import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  count: number = 0;
  constructor() {}

  get getCount() {
    return this.count;
  }

  increment() {
    this.count += this.count == 0 ? 1 : this.count;
  }

  decrement() {
    this.count--;
  }
}
