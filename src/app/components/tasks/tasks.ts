import { Component, Input, Output, EventEmitter } from '@angular/core';

import { TaskComponent } from "./task/task";
import { NewTaskComponent } from './new-task/new-task';
import {type NewTaskData } from './task/task.model';
import {TasksService} from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class TasksComponent {
@Input({required: true}) id ! : string; 
@Input ({required: false}) name?: string;
isAddingTask = false;
isSubmitted = false;

constructor(private tasksService: TasksService){
}

  get selectedUserTasks(){
    return this.tasksService.getUsersTasks(this.id);
  }
  onCompleteTask(taskId: string){
    this.tasksService.removeTask(taskId);
  }
  onNewTask(){
    console.log('new task');
    this.isAddingTask = true;
  }
  
  onCloseAddTask(){
    this.isAddingTask = false;
  }
  onTaskSubmitted() {
  this.isAddingTask = false;
  this.isSubmitted = true;
  // Hide success message after 3s
  setTimeout(() => {
    this.isSubmitted = false;
  }, 2000);
}
}