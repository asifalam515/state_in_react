import { useContext } from "react";
import { TodoContext, TTodo } from "../../context/TodoProvider";

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success",
  });
  console.log(state);
  return (
    <div>
      {state.map((item: TTodo) => (
        <p
          className={`cursor-pointer ${item.isCompleted}`}
          onClick={() => dispatch({ type: "taskComplete", payload: item.id })}
        >
          {" "}
          {item.title}{" "}
        </p>
      ))}
    </div>
  );
};

export default TodoList;
