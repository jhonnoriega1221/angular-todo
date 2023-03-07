import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  @Input() name:string = '';
  @Output() removeTask: EventEmitter<any> = new EventEmitter();
  @ViewChild('deleteTaskDialog') deleteTaskDialog: ElementRef | undefined;

  public removeTaskEmit(){
    this.deleteTaskDialog?.nativeElement.close();
    this.removeTask.emit();
  }

}
