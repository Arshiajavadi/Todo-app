import Header from "./assets/components/Header";
import "./App.css";
import TodoForm from "./assets/components/TodoForm";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, text]);
  };

  return (
    <>
      <Header />
      <TodoForm onAddTodo={addTodo} />
      <ul>
        {todos.map((todos, index) => (
          <li key={index}>{todos}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
