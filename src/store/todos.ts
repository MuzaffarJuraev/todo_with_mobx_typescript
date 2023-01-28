import { makeAutoObservable } from "mobx";
import { ITodos } from "../components/Todo";
class Todos {
  _todos: ITodos[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  setTodos(todos: ITodos[]) {
    this._todos = todos;
  }

  async fetchTodos() {
    console.log("called");
    await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((resp) => resp.json())
      .then((data) => this.setTodos(data));
    return null;
  }

  getTodos() {
    return this._todos;
  }

  toggleTodo(id: number) {
    this._todos = this._todos.map((value) =>
      value.id === id ? { ...value, completed: !value.completed } : value
    );
  }

  deleteTodo(id: number) {
    this._todos = this._todos.filter((value) => value.id !== id);
  }
}

export const TodosStore = new Todos();
