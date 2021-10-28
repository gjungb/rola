import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Leds } from '../model/led';

@Injectable()
export class LedService {
  private readonly URL =
    'https://347eb1836965ec040f474bd7f78d4730.balena-devices.com/api/colors';

  private leds: Leds = [
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

  constructor(private readonly client: HttpClient) {}

  readLeds(): Observable<Leds> {
    const res$ = this.client.get<string[]>(this.URL);

    return res$.pipe(
      map((res) => {
        return res.map((color, index) => ({
          index,
          color,
        }));
      })
    );
  }
}
