import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-environment-container',
  templateUrl: './environment-container.component.html',
  styleUrls: ['./environment-container.component.css']
})
export class EnvironmentContainerComponent implements OnInit {
  private width = 647;
  private height = 400;

  constructor() { }

  ngOnInit() {
  }

}
