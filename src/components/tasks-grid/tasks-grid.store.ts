import { Injectable } from '@angular/core';

import { BackendService } from '../../backend/backend.service';
import { StoreBase } from '../../base/store-base';
import { TasksGrid } from './tasks-grid.model';


@Injectable()
export class TasksGridStore extends StoreBase{

  constructor(private bs:BackendService) {
    super();
   }

  findAll():TasksGrid[] {
    var tasks:TasksGrid[] = [];
    //this.bs.task_find().subscribe({
      super.post("task_findAll",null).subscribe({
      next(item) {
        var tg:TasksGrid = Object.assign({},item);
        tasks.push(tg);
      },
      complete() {
      },
      error(msg){

      }
    });
    return tasks;
  }

}