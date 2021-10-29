import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import * as tinycolor from 'tinycolor2';
import { Led, Leds } from '../model/led';

@Injectable({
  providedIn: 'root',
})
export class LedService implements OnDestroy {
  private readonly URL =
    'https://347eb1836965ec040f474bd7f78d4730.balena-devices.com/api/colors';

  private leds$$ = new BehaviorSubject<Leds>([]);

  readonly leds$ = this.leds$$.asObservable();

  constructor(private readonly client: HttpClient) {
    console.log(this);
  }

  ngOnDestroy(): void {
    console.log('bye bye');
  }

  /**
   *
   * @param index The 0-based index
   * @param color The color as CSS string
   *
   * @returns The updated Led
   */
  updateLed(
    index: number,
    color = tinycolor.random().toString()
  ): Observable<Led> {
    const res$ = this.client.put(
      `${this.URL}/${index}`,
      { color },
      { responseType: 'text' }
    );

    return res$.pipe(map((res) => ({ index, color: res })));
  }

  /**
   *
   * @returns A list of Leds as currently displayed on the Blinkt!
   */
  readLeds(): Observable<Leds> {
    const res$ = this.client.get<string[]>(this.URL);

    return res$.pipe(
      map((res) => {
        return res.map((color, index) => ({
          index,
          color,
        }));
      }),
      tap((leds) => this.leds$$.next(leds))
    );
  }

  /**
   *
   * @returns A single Led as currently displayed on the Blinkt!
   */
  readLed(index: number): Observable<Led> {
    const res$ = this.client.get(`${this.URL}/${index}`, {
      responseType: 'text',
    });

    return res$.pipe(
      map((color) => {
        return {
          index,
          color,
        };
      })
    );
  }
}
