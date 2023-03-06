import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  public getTasks():Task[]{

    if(localStorage.getItem('tasks') === null){
      return [];
    } 

    let tasks:Task[] = [];
    tasks = JSON.parse(localStorage.getItem('tasks') || ""); 
    return tasks;
  }

  public getTask(taskSearch:Task):Task|null{

    const tasks:Task[] = this.getTasks();

    const task = tasks.find((task:Task) => task.name = taskSearch.name);
    if(task === undefined)
      return null;

    return task;
  }

    public removeTask(task:Task):void{
    let tasks:Task[] = [];

    if(localStorage.getItem('tasks')){
      tasks = JSON.parse(localStorage.getItem('tasks') || '');
    }

    const taskIndex = tasks.findIndex(searchTask => {
      return searchTask.name === task.name;
    });

    tasks.splice(taskIndex, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

  }

    public addTask(task:Task):void{
    let tasks = [];
    if(localStorage.getItem('tasks')){
      tasks = JSON.parse(localStorage.getItem('tasks') || '');
    }

    tasks.unshift(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

  }
}