import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './media-item-list/category-list.pipe';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import { MediaItemService } from './services/media-item.service';

// This is the Root module. This is the starting point module for an angular application.

@NgModule({   // Harsha: All the properties within this NgModule is called MetaData
  // Harsha: The declarations property is used to make components and
  // directives and pipes available to your module that don't come from another module
  declarations: [
    AppComponent, MediaItemComponent, MediaItemListComponent, FavoriteDirective, CategoryListPipe, MediaItemFormComponent
  ],
  imports: [ // Harsha: The imports module is used to bring in other modules that your module is going to need
    BrowserModule, ReactiveFormsModule
  ],
  providers: [MediaItemService],
  bootstrap: [AppComponent] // Harsha: This is the entry point for the app code.
})
export class AppModule { }
