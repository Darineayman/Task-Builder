import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../../models/dummy-tasks';
import { NewTaskData } from './task/task.model';
@Injectable({providedIn: 'root'})
export class TasksService {
    static getUsersTasks(id: string) {
      throw new Error('Method not implemented.');
    }
    tasks = DUMMY_TASKS;

    constructor(){
        const tasks = localStorage.getItem('tasks');
        if(tasks){
            this.tasks = JSON.parse(tasks);
        }
    }
    getUsersTasks(id: string){
        return this.tasks.filter(task => task.userId === id);
    }
    addTask(taskData: NewTaskData , id: string){
      this.tasks.push({
      id: new Date().getTime().toString(),
      userId: id,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate
    })
    this.saveTasks();
    }
    removeTask(taskId: string){
      this.tasks = this.tasks.filter(task => task.id !== taskId);
      this.saveTasks();
    }
    private saveTasks(){
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}