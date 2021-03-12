// todo: how to keep track of todos in localstorage?
import { Todo } from "../models/Todo";

// const localTodos = (function () {
//   // Deze iife || self invocing function maakt een 'state' aan en is dus een closure.

//   const InsertToDo = (toDo: ToDo) => {
//   };

//   const DeleteToDo = (toDo: ToDo) => {};

//   const UpdateToDo = (toDo: ToDo) => {};

//   const ReadToDos = () => {};

//   return { InsertToDo, DeleteToDo, UpdateToDo, ReadToDos };
// })();

export class todoStorage {
  public todos: Todo[] = [];

  private storageKey: string = "TODOS";

  constructor() {
    //get local storage
    const restoredTodos = localStorage.getItem(this.storageKey);
    this.todos = restoredTodos ? JSON.parse(restoredTodos) : [];
  }

  private syncTodos() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.todos));
  }

  public InsertToDo(t: Todo): void {
    this.todos.push(t);
    this.syncTodos();
  }
}
