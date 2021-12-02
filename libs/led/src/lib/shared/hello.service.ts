import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor() { }

  sayHello(): string {
    return 'Hello';
  }
}
