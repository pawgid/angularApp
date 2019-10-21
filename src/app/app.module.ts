import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { ServerComponent } from './servers/server.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
