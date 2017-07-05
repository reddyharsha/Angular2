import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// This is the Root module. This is the starting point module for an angular application.

@NgModule({   // Harsha: All the properties within this NgModule is called MetaData
  // Harsha: The declarations property is used to make components and
  // directives and pipes available to your module that don't come from another module
  declarations: [
    AppComponent
  ],
  imports: [ // Harsha: The imports module is used to bring in other modules that your module is going to need
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Harsha: This is the entry point for the app code.
})
export class AppModule { }
