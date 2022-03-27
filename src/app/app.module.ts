import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PostsComponent } from './Component/posts/posts.component';
import { HeroComponent } from './Component/hero/hero.component';
import { AreaComponent } from './Component/area/area.component';
import { CitizenIdComponent } from './Component/citizen-id/citizen-id.component';
import { NumberFormatComponent } from './Component/number-format/number-format.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    PostsComponent,
    AreaComponent,
    CitizenIdComponent,
    NumberFormatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
