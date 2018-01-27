import { NavigationModule } from './navigation/navigation.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { HeaderModule } from './header/header.module';
import { MainModule } from './main/main.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GoToComponent } from './go-to/go-to.component';


@NgModule({
  declarations: [
    AppComponent,
    GoToComponent
],
  imports: [
    BrowserModule,
    MainModule,
    NavigationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
