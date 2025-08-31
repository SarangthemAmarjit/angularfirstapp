import { Component, inject, OnInit, signal } from '@angular/core';
import { catchError } from 'rxjs';
import { TodoItem } from '../components/todo-item/todo-item';
import { Todo } from '../model/todo.type';
import { TodosService } from '../services/todos';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos-pipe';


@Component({
  selector: 'app-todos',
  imports: [TodoItem,FormsModule, FilterTodosPipe],
  templateUrl: './todos.html',
  styleUrl: './todos.css'
})
export class Todos implements OnInit {


  todoservices = inject(TodosService);
  todoitemsdata = signal(<Array<Todo>>([]));
  filtertext = signal('');

  ngOnInit() {


    this.todoservices.gettodofromapi().pipe(catchError((err) => {
      console.log(err)
      throw err;
    })).subscribe((data) => { this.todoitemsdata.set(data); })
  }

  updatetodoitem(updatedtodo: Todo) {
    this.todoitemsdata.update((items) => {
      return items.map((item) => {
        if (item.id === updatedtodo.id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      }

      );
    });
  }

}

