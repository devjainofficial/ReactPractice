import { useState } from "react";
import "./App.css";
import Add from "./components/Add";
import TaskList from "./components/TaskList";

let nextId = 3;
const InitialTodos = [
  { id: 0, title: "Create React App", done: true },
  { id: 1, title: "Create Angular App", done: false },
  { id: 2, title: "Create Vue App", done: false },
];

function App() {
  const [todos, setTodos] = useState(InitialTodos);

  function handleAddTodo(title) {
    setTodos([...todos, { id: nextId++, title: title, done: false }]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(
      todos.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter((t) => t.id !== todoId));
  }

  return (
    <>
      <Add onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

export default App;
