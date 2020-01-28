import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from '../pages/home/home.page';
import { ProfilePage } from '../pages/profile/profile.page';
import { TasksPage } from '../pages/tasks/tasks.page';

const routes: Routes = [
  { path: '', redirectTo:'/home',pathMatch:'full'},
  { path: 'home', component: HomePage },
  { path: 'profile', component: ProfilePage },
  { path: 'tasks', component: TasksPage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}