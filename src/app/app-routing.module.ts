import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JosueComponent } from './josue/josue.component';

const routes: Routes = [
  { path: 'josue', component: JosueComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
