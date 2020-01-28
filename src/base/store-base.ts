import { Observable } from 'rxjs';

import { BackendService } from '../backend/backend.service';

export class StoreBase {

  private urls:string[] = [];
  private bs:BackendService;

  constructor(bs:BackendService) {
    this.bs = bs;
    this.initUrls();
  }

  private initUrls() {
    this.urls['base'] = 'localhost';
    this.urls["task_findAll"] = "task/findAll";
  }

  private url(code:string) : string {
    //return this.urls['base']+"/"+this.urls['code'];
    return this.urls[code];
  }

  post(code:string,params:any[]):Observable<any> {
    if (!code) {
      return null;
    }
    return this.bs.get(this.url(code),params);
  }

}