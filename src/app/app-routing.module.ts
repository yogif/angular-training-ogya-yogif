import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetComponent } from './get/get.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: 'member/create',
    component: AddComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'members',
    component: GetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }