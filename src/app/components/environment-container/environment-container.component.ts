import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Component({
  selector: 'app-environment-container',
  templateUrl: './environment-container.component.html',
  styleUrls: ['./environment-container.component.css']
})
export class EnvironmentContainerComponent implements OnInit {
  private width = 647;
  private height = 400;

  private gameStartSubject: Subject<any> = new Subject<any>();

  constructor() { }

  ngOnInit() {
  }
  private onStartClick(level: number) {
    this.gameStartSubject.next(level);
  }

}
