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
  public searchForm:FormGroup;

  constructor(private _taskService:TaskService, private fb:FormBuilder){
    this.taskForm = this.fb.group({
      taskNameInput: new FormControl('', [Validators.required, Validators.minLength(4)])
    });

    this.searchForm = this.fb.group({
      searchInput: new FormControl('')
    })
  }

  ngOnInit(): void {
    this.retrieveTaskList();
  }

  public submitTask():void{
    if(this.taskForm.invalid){
      return;      
    }


    const task:Task = {
      name: this.taskForm.get('taskNameInput')?.value,
    }

    this._taskService.addTask(task);
    this.closeDialog();
  }

  public closeDialog(){
    this.addTaskDialog?.nativeElement.close();
    this.taskForm.reset('taskNameInput');
  }

  public removeTask(task:Task):void{
    this._taskService.removeTask(task);
    this.searchForm.reset('searchInput');
    this.retrieveTaskList();
  }

  public retrieveTaskList(){
    this.tasks = this._taskService.getTasks();
  }

    public searchTasks():void{
      const searchValue = this.searchForm.get('searchInput')?.value;

      if(searchValue === ""){
        this.retrieveTaskList();
        return;
      }

      const searchArray:Task[] = [];

    this._taskService.getTasks().filter( (item: Task) => {
      if( item.name.toLowerCase().includes(searchValue.toLowerCase()) )
        searchArray.push(item);
    });
    this.tasks = searchArray
  }
}

