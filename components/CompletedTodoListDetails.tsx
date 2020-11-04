import React, { FunctionComponent } from "react";

import { Todo } from "../models/todo";

interface Props {
  todo: Todo;
  onDelete: (todo: Todo) => void;
}

export const CompletedTodoListDetails: FunctionComponent<Props> = ({
  todo,
  onDelete
}) => {
  const onClick = () => {
    onDelete(todo);
  }

  return (
    <>
      <li>
        <span>{todo.name}&nbsp;</span>
        <button onClick={onClick}>X</button>
      </li>
      <style jsx>{`
        span {
          color: green;
          text-decoration: line-through;
        }
      `}</style>
    </>
  );
}