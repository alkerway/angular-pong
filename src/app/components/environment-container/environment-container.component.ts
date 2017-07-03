import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Component({
  selector: 'app-environment-container',
  templateUrl: './environment-container.component.html',
  styleUrls: ['./environment-container.component.css']
})
export class EnvironmentContainerComponent {
  private width = 1000;
  private height = 400;
  constructor() { }
}
