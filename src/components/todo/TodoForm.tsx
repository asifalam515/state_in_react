import { FormEvent, useContext, useState } from "react";
import { TodoContext } from "../../context/TodoProvider";

const TodoForm = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [task, setTask] = useState("");

  console.log(state);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const todo = {
      id: Math.random().toString(36).substring(2, 7),
      title: task,
      isCompleted: false,
    };
    console.log(todo);
    dispatch({ type: "addTodo", payload: todo });
  };
  return (
    <div>
      <h1 className="text-5xl">Add to do</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">Task</label>
        <input
          className="border border-red-500"
          type="text"
          name="todo"
          id="todo"
          onBlur={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
