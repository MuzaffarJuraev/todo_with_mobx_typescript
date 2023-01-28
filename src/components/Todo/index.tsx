import { observer } from "mobx-react-lite";

export interface ITodos {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
  onHandleDelete: (id: number) => void;
  onHandleToggle: (id: number) => void;
}

const Todo = observer((props: ITodos) => {
  return (
    <div>
      <span style={{ margin: "10px" }}>{props.id}</span>
      <input
        type={"checkbox"}
        checked={props.completed}
        onChange={() => {
          props.onHandleToggle(props.id);
        }}
        style={{ margin: "10px" }}
      />
      <span style={{ margin: "10px" }}>{props.title}</span>
      <button
        style={{ margin: "10px" }}
        onClick={() => props.onHandleDelete(props.id)}
      >
        Delete
      </button>
    </div>
  );
});

export { Todo };
