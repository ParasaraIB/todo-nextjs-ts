import React, { FunctionComponent } from "react";

import { Todo } from "../models/todo";

interface Props {
  todo: Todo;
  onDelete: (todo: Todo) => void;
}

export const TodoListDetails: FunctionComponent<Props> =({ todo, onDelete }) => {
  const onClick = () => {
    onDelete(todo);
  };
  
  return (
    <div>
      <li>
        {todo.name} <button onClick={onClick}>✔</button>
      </li>
      <style jsx>{`
        div {
          margin: 1rem 0
        }
      `}
      </style>
    </div>
  );
}