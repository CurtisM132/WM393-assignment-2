import { Injectable } from '@angular/core';
import { IResourceBoardService } from './resource-board.interface';

@Injectable({
  providedIn: 'root'
})
export class ResourceBoardService implements IResourceBoardService {

//   private mockTodos: Todo[] = [
//       {
//           id: 1,
//           task: 'Do homework',
//           dateDue: new Date(2020, 10, 1),
//       }
//   ];

  getResourceBoards(): string {
      return "yeet";
  }

//   getTodos(): Observable<Todo[]> {
//       return of(this.mockTodos);
//   }
//   addTodo(newTodo: Todo): Observable<number> {
//       const id = this.mockTodos.length + 1;

//       // add the todo to the mock list so it is returned next time we get all todos
//       this.mockTodos.push({
//           ...newTodo,
//           id,
//       });

//       return of(id);
//   }
//   updateTodo(todoToUpdate: Todo): Observable<string> {
//       this.mockTodos = this.mockTodos.filter((todo: Todo) => {
//           todo.id !== todoToUpdate.id;
//       });

//       this.mockTodos.push(todoToUpdate);

//       return of('Updated');
//   }
//   deleteTodo(todoId: number): Observable<string> {
//       this.mockTodos = this.mockTodos.filter((todo: Todo) => {
//           todo.id !== todoId;
//       });

//       return of('Deleted');
//   }
}