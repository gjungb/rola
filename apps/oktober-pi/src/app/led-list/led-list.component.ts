import { Component, OnInit } from '@angular/core';
import { Leds } from '../model/led';

@Component({
  selector: 'rola-led-list',
  templateUrl: './led-list.component.html',
  styleUrls: ['./led-list.component.css'],
})
export class LedListComponent implements OnInit {
  leds: Leds = [
    {
      index: 0,
      color: 'red',
    },
    {
      index: 1,
      color: 'yellow',
    },
    {
      index: 2,
      color: 'green',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
