import { Component, Output, EventEmitter, signal, inject, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId! : string;
  @Output() close = new EventEmitter<void>();
  @Output() submitted = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private tasksService = inject(TasksService);
  onCloseAddTask(){
    this.close.emit();
  }
  onSubmit(){
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate
    }, this.userId)
    this.submitted.emit(); 
    this.close.emit(); 
  }
}