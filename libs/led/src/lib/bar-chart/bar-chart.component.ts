import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HelloService } from '../shared/hello.service';

@Component({
  selector: 'gerd-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarChartComponent implements OnInit {

  message!: string;

  constructor(private readonly hello: HelloService) { }

  ngOnInit(): void {
    this.message = this.hello.sayHello();
  }
}
