import { useState } from "react";
import "./App.css";
import TodoProvider from "./context/TodoProvider";
import TodoForm from "./components/todo/TodoForm";

function App() {
  const [count, setCount] = useState(0);
  const handleIncreaseBtn = () => {
    setCount(count + 1);
  };
  return (
    <TodoProvider>
      <div className="border border-purple-500 p-10 m-10 ">
        {/* <h1>{count}</h1> */}
        {/* <Couter
        count={count}
        setCount={setCount}
        handleIncreaseBtn={handleIncreaseBtn}
      ></Couter> */}
        {/* <UserInfowithUserReducer></UserInfowithUserReducer> */}

        <TodoForm></TodoForm>
      </div>
    </TodoProvider>
  );
}

export default App;
