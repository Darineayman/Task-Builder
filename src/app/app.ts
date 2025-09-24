import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header";
import { UserCompononent } from "./components/user/user";
import { DUMMY_USERS } from './models/dummy-users';
import { TasksComponent } from './components/tasks/tasks';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserCompononent, TasksComponent, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;
  selectedUserId?: string;
  selectedUser(){
    return this.users.find(user => user.id === this.selectedUserId);
  }
  onSelectUser(id: string){
    this.selectedUserId = id;
  } 
}