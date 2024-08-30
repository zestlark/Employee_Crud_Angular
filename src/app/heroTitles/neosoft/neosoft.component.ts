import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-neosoft',
  templateUrl: './neosoft.component.html',
  styleUrl: './neosoft.component.css',
})
export class NeosoftComponent {
  constructor(public counterService: CounterService) {}
}
