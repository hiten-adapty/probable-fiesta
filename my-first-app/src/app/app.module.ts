import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import { CarouselComponent } from './carousel/carousel.component';
import {FormsModule} from "@angular/forms";
import {
  AfterText,
  AsyncPromisePipeComponent,
  ExponentialStrengthPipe
} from './async-promise-pipe/async-promise-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    CarouselComponent,
    AsyncPromisePipeComponent,
    AfterText,
    ExponentialStrengthPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
