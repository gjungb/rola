import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Led } from '../model/led';
import { LedService } from '../shared/led.service';

@Component({
  selector: 'rola-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  led$?: Observable<Led>;


  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: LedService
  ) {}

  ngOnInit(): void {
    const index = Number(this.route.snapshot.paramMap.get('index'));

    this.led$ = this.service.readLed(index);
  }
}
