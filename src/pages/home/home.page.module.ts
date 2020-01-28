import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { TasksGridModule } from '../../components/tasks-grid/tasks-grid.module';
//import { TasksGridStore } from '../../components/tasks-grid/tasks-grid.store';

@NgModule({
  imports: [
    CommonModule,
    TasksGridModule
  ],
  declarations: [
    HomePage
  ],
  providers: [
  ]
})
export class HomeModule { }