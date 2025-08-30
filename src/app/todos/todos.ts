import { Component, inject, OnInit, signal } from '@angular/core';
import { catchError } from 'rxjs';
import { Todo } from '../model/todo.type';
import { TodosService } from '../services/todos';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.css'
})
export class Todos implements OnInit {


todoservices = inject(TodosService);
todoitemsdata = signal(<Array<Todo>>([]));

ngOnInit() {
 

  this.todoservices.gettodofromapi().pipe(catchError((err) => {
    console.log(err)
    throw err;
  })).subscribe((data) => { this.todoitemsdata.set(data);})
}}