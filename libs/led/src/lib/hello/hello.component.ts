import { Component, OnInit } from '@angular/core';
import { HelloService } from '../shared/hello.service';

@Component({
  selector: 'gerd-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  message!: string;

  constructor(private readonly hello: HelloService) { }

  ngOnInit(): void {
    this.message = this.hello.sayHello();
  }

}
