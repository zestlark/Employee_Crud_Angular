import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-webworks2',
  templateUrl: './webworks2.component.html',
  styleUrl: './webworks2.component.css',
})
export class Webworks2Component {
  constructor(public counterService2: CounterService) {}
}
