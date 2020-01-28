import { Component, OnInit,EventEmitter, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { TasksGridStore } from './tasks-grid.store';
import { TasksGrid } from './tasks-grid.model';

@Component({
  selector: 'tasks-grid',
  templateUrl: './tasks-grid.component.html',
  styleUrls: ['./tasks-grid.component.css']
})
export class TasksGridComponent implements OnInit {
  
  private headerHtml:SafeHtml;
  private itemHtml:SafeHtml;

  private haveButtons:boolean = false;

  private items:TasksGrid[];

  @Input() headerButtonsHtml:( ) => string;
  @Input() itemButtonsHtml:( ) => string;

  constructor(private store:TasksGridStore,private sanitizer: DomSanitizer) { 
    this.items = this.store.findAll();
  }

  ngOnInit() {
    //console.log(this.utilButtonsHtml());
    //this.itemHtml = this.sanitizer.bypassSecurityTrustHtml('<button type="button" class="btn btn-outline-primary">Add Task</button>');
    var htmlHeader = this.headerButtonsHtml();
    this.headerHtml = this.sanitizer.bypassSecurityTrustHtml(htmlHeader);
    var htmlItem = this.itemButtonsHtml();
    this.itemHtml = this.sanitizer.bypassSecurityTrustHtml(htmlItem);
    this.haveButtons = htmlItem.length > 0 || htmlHeader.length > 0;
  }

  showButtonClick() {
    console.log("show tasks-grid");
  }

}