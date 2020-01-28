import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksGridComponent } from './tasks-grid.component';
import { TasksGridStore } from './tasks-grid.store';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TasksGridComponent
  ],
  providers: [
    TasksGridStore
  ],
  exports: [
    TasksGridComponent
  ]
})
export class TasksGridModule {}