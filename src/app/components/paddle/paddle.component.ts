import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paddle',
  templateUrl: './paddle.component.html',
  styleUrls: ['./paddle.component.css']
})
export class PaddleComponent {

  @Input() top: number;
  @Input() leftPos: number;

  constructor() { }

}
