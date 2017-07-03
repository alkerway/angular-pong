import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() startClicked: EventEmitter<number> = new EventEmitter<number>();

  private level: number = 1;
  constructor() { }

  private onNewGameClicked() {
    this.startClicked.emit(this.level);
  }

}
