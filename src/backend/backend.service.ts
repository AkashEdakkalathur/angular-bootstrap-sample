import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Tarea } from './task.model';

@Injectable()
export class BackendService {

  constructor() { }

  get(code:string,params:any[]):Observable<any> {
    switch(code) {
      case "task/findAll": {
        return new Observable(
          (observer) =>{
            observer.next(new Tarea(1,2,"tareaA"));
            observer.next(new Tarea(2,2,"tareaB"));
            observer.next(new Tarea(3,2,"tareaC"));
            observer.complete();
          }
        );
      }
    }
  }

}