import { Component } from '@angular/core';

interface Task {
  name:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public tasks:Task[] = [{name: 'ola'},{name: 'aa'}];
}
