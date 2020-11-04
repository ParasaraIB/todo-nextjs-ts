import React, { FunctionComponent } from "react";

import { Todo } from "../models/todo";

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
  todo: Todo;
  disabled: boolean;
}

export const TodoForm: FunctionComponent<Props> = ({
  onChange,
  onAdd,
  todo,
  disabled
}) => (
  <> 
    <form onSubmit={onAdd}>
      <div>
        <input type="text" onChange={onChange} value={todo.name} />
      </div>
      <button disabled={disabled} type="submit">
        Add Todo
      </button>
    </form>
    <style jsx>{`
      div {
        margin: 1rem 0
      }
    `}
    </style>
  </>
);