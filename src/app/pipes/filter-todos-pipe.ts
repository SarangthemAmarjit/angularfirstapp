import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo.type';

@Pipe({
  name: 'filterTodos'
})
export class FilterTodosPipe implements PipeTransform {

  transform(value: Todo[], filterText: string): Todo[] {
    if (!filterText) {
      return value;
    }
    return value.filter(todo => todo.title.toLowerCase().includes(filterText.toLowerCase()));
  }

}
