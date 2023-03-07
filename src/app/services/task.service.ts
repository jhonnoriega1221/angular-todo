import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [];

  constructor() {}

  public getTasks(): Task[] {
    return this.tasks;
  }

  public getTask(taskSearch: Task): Task | null {

    const tasks: Task[] = this.getTasks();

    const task = tasks.find((task: Task) => task.name = taskSearch.name);
    if (task === undefined)
      return null;

    return task;
  }

  public removeTask(task: Task): void {
    let tasks: Task[] = this.getTasks();

    const taskIndex = tasks.findIndex(searchTask => {
      return searchTask.name === task.name;
    });

    tasks.splice(taskIndex, 1);

    this.tasks = tasks;

  }

  public addTask(task: Task): void {
    let tasks = this.getTasks();
    tasks.unshift(task);

    this.tasks = tasks;

  }
}