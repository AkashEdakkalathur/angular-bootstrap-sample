import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksPage } from './tasks.page';
import { TasksGridModule } from '../../components/tasks-grid/tasks-grid.module';

@NgModule({
  imports: [
    CommonModule,
    TasksGridModule
  ],
  declarations: [
    TasksPage
  ]
})
export class TasksModule { }