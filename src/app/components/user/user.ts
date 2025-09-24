import { Component, Input, EventEmitter, Output} from '@angular/core';
import { DUMMY_USERS } from '../../models/dummy-users';
import { User } from './user.model';
import { Card } from "../../shared/card/card";
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
  imports: [Card]
  })

 export class UserCompononent{
  @Input ({required: true}) user!:User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter();

  get imagePath(){
    return '/assets/users/' + this.user.avatar
  }
  onSelectUser(){
    this.select.emit(this.user.id);
  }
}