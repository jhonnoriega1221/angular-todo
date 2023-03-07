import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  @Input() name:string = '';
  @Output() removeTask: EventEmitter<any> = new EventEmitter();

  public removeTaskEmit(){
    this.removeTask.emit();
  }

}
