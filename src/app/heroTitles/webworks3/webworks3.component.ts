import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-webworks3',
  templateUrl: './webworks3.component.html',
  styleUrl: './webworks3.component.css',
  providers: [CounterService],
})
export class Webworks3Component {
  constructor(public counterService: CounterService) {}
}
