import { Component } from '@angular/core';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public counter: number = 0;

  public increaseBy(): void {
    this.counter += 1;
  }

  public resetBy(): void {
    this.counter = 0;
  }

  public decreaseBy(): void {
    this.counter -= 1;
  }
}
