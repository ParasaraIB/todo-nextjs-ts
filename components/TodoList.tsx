import React, { FunctionComponent } from "react";

import { Todo } from "../models/todo";
import { TodoListDetails } from "./TodoListDetails";

interface Props {
  todos: Todo[];
  onDelete: (todo: Todo) => void;
}

export const TodoList: FunctionComponent<Props> = ({ todos, onDelete }) => (
  <>
    <div>
      <h3>Todos</h3>
      {todos.length === 0 ? "-" : null}
      <ul>
        {todos.map((todo, index) => (
          <TodoListDetails key={index} todo={todo} onDelete={onDelete} />
        ))}
      </ul>
    </div>
    <style jsx>{`
    div {
      min-width: 12em;
    }
  `}</style>
  </>
);