import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileCreatorComponent } from './Components/file-creator/file-creator.component';
import { SharedModule } from './Modules/shared/shared.module';
import { FileSnackComponent } from './Components/file-snack/file-snack.component';
import { GreetComponent } from './Components/greet/greet.component';

@NgModule({
  declarations: [
    AppComponent,
    FileCreatorComponent,
    FileSnackComponent,
    GreetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
