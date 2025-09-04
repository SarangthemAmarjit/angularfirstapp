import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
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

deleteTask(index: number) {
  this.todos.splice(index, 1);
}
}
