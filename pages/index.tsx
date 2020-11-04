import React, {useState} from "react";

import { Todo } from "../models/todo";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { CompletedTodoList } from "../components/CompletedTodoList";

interface State {
  newTodo: Todo;
  todos: Todo[];  
}

function App() {
  const [ isCompletedListActive, setisCompletedListActive ] = useState(false);
  const [ newTodo, setNewTodo ] = useState({
    id: 1,
    name: "",
    status: false,
    due_date: ""
  });

  const [ todos, setTodos ] = useState(new Array<Todo>());
  const [ completedTodos, setCompletedTodos ] = useState(new Array<Todo>());

  const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setNewTodo({
      id: newTodo.id + 1,
      name: "",
      status: false,
      due_date: ""
    });
    setTodos([...todos, newTodo]);
  }

  const handleTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo({
      ...newTodo,
      name: event.target.value
    });
  }

  const deleteTodo = (todoToDelete: Todo) => {
    setTodos([...todos.filter(todo => todo.id !== todoToDelete.id)]);
    setCompletedTodos([...completedTodos, todoToDelete]);
  }

  const undoTodo = (todoToUndo: Todo) => {
    setCompletedTodos([
      ...completedTodos.filter(todo => todo.id !== todoToUndo.id)
    ]);
    setTodos([...todos, todoToUndo]);
  }

  const completeListActiveElement = (
    <>
      <input 
        onChange={() => setisCompletedListActive(!isCompletedListActive)}
        type="checkbox"
        defaultValue={isCompletedListActive.toString()}
        id="completedListActive"
      />
      <label htmlFor="completedListActive">Show Done Todos</label>
    </>
  );

  return (
    <div>
      <h2>Todo App</h2>
      <TodoForm 
        disabled={newTodo.name.length === 0}
        todo={newTodo}
        onAdd={addTodo}
        onChange={handleTodoChange}
      />
      {completeListActiveElement}
      <div className="lists">
        <TodoList todos={todos} onDelete={deleteTodo} />
        {isCompletedListActive ? (
          <CompletedTodoList todos={completedTodos} onDelete={undoTodo} />
        ) : null}
      </div>
      <style jsx>{`
        .lists {
          display: flex;
          justify-content: space-between;
        }
      `}
      </style>
    </div>
  );

}

export default App;