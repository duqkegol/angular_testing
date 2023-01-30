import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JosueComponent } from './josue/josue.component';
import { Link1Module } from './link1/link1.module';
import { Link2Module } from './link2/link2.module';

const routes: Routes = [
  { path: 'josue', component: JosueComponent },
  { path: 'link1', loadChildren: () => import('./link1/link1.module').then(m => Link1Module) },
	{ path: 'link2', loadChildren: () => import('./link2/link2.module').then(m => Link2Module) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
