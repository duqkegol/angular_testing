import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Link2Component } from './components/link2/link2.component';

const routes: Routes = [
  { path: '**', component: Link2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Link2RoutingModule { }
