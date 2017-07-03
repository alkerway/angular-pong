import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Component({
  selector: 'app-environment-container',
  templateUrl: './environment-container.component.html',
  styleUrls: ['./environment-container.component.css']
})
export class EnvironmentContainerComponent {
  public width = 870;
  public height = 400;
  constructor() { }
}
