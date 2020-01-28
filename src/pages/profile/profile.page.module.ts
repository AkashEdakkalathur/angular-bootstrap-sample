import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePage } from './profile.page';

import { TasksGridModule } from '../../components/tasks-grid/tasks-grid.module';

@NgModule({
  imports: [
    CommonModule,
    TasksGridModule
  ],
  declarations: [
    ProfilePage
  ]
})
export class ProfileModule { }