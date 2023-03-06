import { Component, OnInit } from '@angular/core';
import { Task } from './models/task';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public tasks:Task[] = [];

  constructor(private _taskService:TaskService){}

  ngOnInit(): void {
    this.tasks = this._taskService.getTasks();
  }
}
