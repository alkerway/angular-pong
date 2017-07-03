import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  @Input() gameWidth: number;
  @Input() gameHeight: number;

  private leftPaddleTop: number;
  private rightPaddleTop: number;

  private ballTop: number;
  private ballLeft: number;

  constructor() {
  }
  ngOnInit() {
  }

  private onMouseMove(event: MouseEvent) {
    this.rightPaddleTop = Math.min(Math.max(event.clientY, 100), 430) - 100;
  }

}
