import { TodosStore } from "../../store/todos";
import { Todo } from "../../components/Todo";
import { useState } from "react";
import "./style.scss";

function App() {
  const [todos, setTodos] = useState(TodosStore.getTodos());
  const onHandleDelete = (id: number) => {
    TodosStore.deleteTodo(id);
    setTodos(TodosStore.getTodos());
  };
  const onHandleToggle = (id: number) => {
    TodosStore.toggleTodo(id);
    setTodos(TodosStore.getTodos());
  };
  return (
    <div className="app-wrapper">
      {todos?.map((value, index) => (
        <Todo
          key={index}
          {...value}
          onHandleDelete={onHandleDelete}
          onHandleToggle={onHandleToggle}
        />
      ))}
    </div>
  );
}

export { App };
