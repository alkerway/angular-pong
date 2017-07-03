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
  private decrementTimeout;
  private θ: number;
  private pi: number;
  private velocity: number;
  private alreadyInZone: boolean = false;
  private timer: number;
  private level: number;

  constructor() {
    this.pi = Math.PI;
  }

  ngOnInit() {
    this.resetGame();
  }

  private resetGame() {
    this.leftPaddleTop = this.gameHeight / 2 - 60;
    this.rightPaddleTop = this.gameHeight / 2 - 60;
    this.ballTop = this.gameHeight / 2 - 40;
    this.ballLeft = 30;
    clearTimeout(this.decrementTimeout);
    clearTimeout(this.gameInterval);
    this.timer = 0;
  }

  private onMouseMove(event: MouseEvent) {
    this.rightPaddleTop = Math.min(Math.max(event.clientY, 100), 430) - 100;
  }

  private start(level) {
    clearInterval(this.gameInterval);
    clearTimeout(this.decrementTimeout)
    this.gameInterval = setInterval(() => {
      this.updateBall();
      this.updateAi();
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
    } else if (this.ballLeft > this.gameWidth - 50 &&
               this.rightPaddleTop + 60 > this.ballTop &&
               this.rightPaddleTop <= this.ballTop + 20 &&
               !this.alreadyInZone) {
      this.velocity = this.velocity > 0 ? -this.velocity : this.velocity;
      this.θ = -this.θ;
      this.alreadyInZone = true;
      if (this.rightPaddleTop + 45 <= this.ballTop || this.rightPaddleTop + 15 >= this.ballTop + 20) {
        if (this.θ > 0) {
          this.θ += (this.pi / 3 - this.θ) / 2;  // limit to 60 degrees
        } else {
          this.θ -= (this.pi / 3 - this.θ) / 2;
        }
      } else {
         this.θ =  6 * this.θ / 7;
      }
    } else if (this.ballLeft < 30 &&
               this.leftPaddleTop + 60 >= this.ballTop &&
               this.leftPaddleTop <= this.ballTop + 20 &&
               !this.alreadyInZone) {
      this.velocity = -this.velocity;
      this.θ = -this.θ;
      this.alreadyInZone = true;
    } else if (this.ballLeft > this.gameWidth - 20 || this.ballLeft < 0 && this.ballLeft < this.gameWidth + 40 && this.ballLeft > -40) {
      this.velocity = 0;
      this.resetGame();
    } else {
      this.alreadyInZone = false;
    }
  }
  private updateAi() {
    if (this.ballLeft < this.gameWidth * 0.6 && this.velocity < 0) {
      if (this.leftPaddleTop + 60 < this.ballTop + 20) {
        this.leftPaddleTop += 5;
      } else if (this.leftPaddleTop > this.ballTop) {
        this.leftPaddleTop -= 5;
      }
    }
  }
  private onNewGameClicked(level = 1) {
      this.level = level;
      this.resetGame();
      this.velocity = 7;
      this.θ = (Math.random() * (Math.random() > 0.5 ? -this.pi : this.pi)) / 4;
      this.decrementTimer(3);
  }
  private decrementTimer(timer: number) {
    this.timer = timer;
    if (this.timer > 0) {
      this.decrementTimeout = setTimeout(() => {
        this.decrementTimer(timer - 1);
      }, 1000);
    } else {
      this.start(this.level);
    }
  }

}
