import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Task } from './models/task';
import { TaskService } from './services/task.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('addTaskDialog') addTaskDialog: ElementRef | undefined;
  
  public tasks:Task[] = [];
  public taskForm:FormGroup;

  constructor(private _taskService:TaskService, private fb:FormBuilder){
    this.taskForm = this.fb.group({
      taskNameInput: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  ngOnInit(): void {
    this.tasks = this._taskService.getTasks();
  }

  public submitTask():void{
    if(this.taskForm.invalid)
      return;

    const task:Task = {
      name: this.taskForm.get('taskNameInput')?.value,
    }

    this._taskService.addTask(task);
    this.addTaskDialog?.nativeElement.close();
    name: this.taskForm.reset('taskNameInput');
  }
}
