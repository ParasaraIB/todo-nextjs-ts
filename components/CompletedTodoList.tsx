import React, { FunctionComponent } from "react";

import { Todo } from "../models/todo";
import { CompletedTodoListDetails } from "./CompletedTodoListDetails";

interface Props {
  todos: Todo[];
  onDelete: (todo: Todo) => void;
}

export const CompletedTodoList: FunctionComponent<Props> = ({
  todos,
  onDelete
}) => (
  <>
    <div className="container">
      <h3>Done</h3>
      {todos.length === 0 ? "-": null}
      <div className="innerContainer">
        <ul>
          {todos.map((todo, index) => (
            <CompletedTodoListDetails key={index} todo={todo} onDelete={onDelete} />
          ))}
        </ul>
      </div>
    </div>
    <style jsx>{`
      .container {
        min-width: 12em;
      }
      .innerContainer {
        margin: 1rem 0;
      }
    `}
    </style>
  </>
);