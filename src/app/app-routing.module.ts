import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './Component/hero/hero.component';
import {  PostsComponent } from './Component/posts/posts.component';
import { AreaComponent } from './Component/area/area.component';
import { CitizenIdComponent } from './Component/citizen-id/citizen-id.component';
import { NumberFormatComponent } from './Component/number-format/number-format.component';


const routes: Routes = [
  { path: '', redirectTo:'hero' , pathMatch: 'full'},
  { path: 'hero', component: HeroComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'area', component: AreaComponent },
  { path: 'citizenId', component: CitizenIdComponent },
  { path: 'number', component: NumberFormatComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
