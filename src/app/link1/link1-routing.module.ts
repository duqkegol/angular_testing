import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Link1Component } from './components/link1/link1.component';

const routes: Routes = [
	{ path: '**', component: Link1Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Link1RoutingModule { }
