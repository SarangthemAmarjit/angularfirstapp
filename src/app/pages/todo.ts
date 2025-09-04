import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
  
      <div class="todo-container"
           style="height:70vh; padding:20px; margin-top:100px;">
        
        <h2>Todo Page</h2>

        <!-- Input -->
        <input
          [(ngModel)]="task"
          type="text"
          placeholder="Enter a task"
          style="width:30%; padding:10px; border:1px solid #ccc; 
                 border-radius:5px; margin:20px 20px 20px 0;"
        />

        <!-- Add button -->
        <button (click)="addTodo()"
          style="padding:10px 15px; border:none; border-radius:5px;
                 background-color:#28a745; color:#fff; cursor:pointer;">
          Add
        </button>

        <!-- Task List -->
        <ul>
          <div *ngIf="todos.length === 0"
               style="margin-top:50px; max-width:500px;">
            NO TASK FOUND
          </div>

          <li *ngFor="let todo of todos; let i = index"
              style="max-width:500px; padding:10px; border-bottom:1px solid #eee;
                     color:#0d6303ff; display:flex; justify-content:space-between;
                     align-items:center;">
            {{ i + 1 }}. {{ todo }}

            <button (click)="deleteTask(todo)"
              style="padding:5px 10px; border:none; border-radius:5px;
                     background-color:#dc3545; color:#fff; cursor:pointer;">
              Delete
            </button>
          </li>
        </ul>
      </div>
   
  `
})
export class TodoPageComponent {
  todos: string[] = [];
  task: string = '';

  addTodo() {
    if (this.task.trim() !== '') {
      this.todos.push(this.task)
      this.task = '';
    }
  }

  deleteTask(index: string) {
  this.todos.pop()
  }
}
