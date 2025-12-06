import { useState } from "react";

function TodoForm({ onAddTodo }: {onAddTodo:(text:string) => void}) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event:React.FormEvent) => {
    event.preventDefault();
    if (inputValue === "") return alert("Please add a Todo in the input");
    onAddTodo(inputValue);
    setInputValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        type="text"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForm;
