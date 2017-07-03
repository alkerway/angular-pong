import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EnvironmentContainerComponent } from './components/environment-container/environment-container.component';
import { HeaderComponent } from './components/header/header.component';
import { PaddleComponent } from './components/paddle/paddle.component';
import { GameComponent } from './components/game/game.component';
import { BallComponent } from './components/ball/ball.component';
import { TimerComponent } from './components/timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    EnvironmentContainerComponent,
    HeaderComponent,
    PaddleComponent,
    GameComponent,
    BallComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
