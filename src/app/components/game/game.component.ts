import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  @Input() gameWidth: number;
  @Input() gameHeight: number;

  @Input() gameStartSubject: Subject<any>;

  private leftPaddleTop: number;
  private rightPaddleTop: number;

  private ballTop: number;
  private ballLeft: number;

  private gameInterval;
  private θ: number;
  private velocity: number;

  constructor() {
  }

  ngOnInit() {
    this.resetGame();
    this.gameStartSubject.subscribe((level) => {
      this.resetGame();
      this.velocity = 7;
      this.θ = Math.random() * (Math.random() > 0.5 ? -1 : 1);
      this.start(level);
    })
  }

  private resetGame() {
    this.leftPaddleTop = this.gameHeight / 2 - 60;
    this.rightPaddleTop = this.gameHeight / 2 - 60;
    this.ballTop = this.gameHeight / 2 - 40;
    this.ballLeft = 30;
  }

  private onMouseMove(event: MouseEvent) {
    this.rightPaddleTop = Math.min(Math.max(event.clientY, 100), 430) - 100;
  }

  private start(level) {
    clearInterval(this.gameInterval);
    this.gameInterval = setInterval(() => {
      this.updateBall();
      this.checkForCollision();
    }, 20);
  }
  private updateBall() {
    this.ballLeft += Math.cos(this.θ) * this.velocity;
    this.ballTop += Math.sin(this.θ) * this.velocity;
  }
  private checkForCollision() {
    if (this.ballTop > this.gameHeight - 20 || this.ballTop < 0) {
      this.θ = -this.θ;
    } else if (this.ballLeft > this.gameWidth - 50 && this.rightPaddleTop + 60 > this.ballTop && this.rightPaddleTop < this.ballTop) {
      this.velocity = -this.velocity;
      this.θ = -this.θ;
    } else if (this.ballLeft < 30 && this.leftPaddleTop + 60 > this.ballTop + 20 && this.leftPaddleTop < this.ballTop) {
      this.velocity = -this.velocity;
      this.θ = -this.θ;
    } else if (this.ballLeft > this.gameWidth - 20 || this.ballLeft < 0) {
      this.velocity = 0;
      this.resetGame();
    }
  }

}
