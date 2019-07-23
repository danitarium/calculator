import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from '../app/display/display.component'
import { D3Component } from '../app/d3/d3.component'


const routes: Routes = [
  { path: '.99 Cent Calculator', component: DisplayComponent },
  { path: '12.00 Dollar Calculator', component: D3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
