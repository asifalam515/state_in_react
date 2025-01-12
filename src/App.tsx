import { useState } from "react";
import "./App.css";
import Couter from "./components/Couter";
import UserInfoWithUseState from "./components/UserInfoWithUseState";

function App() {
  const [count, setCount] = useState(0);
  const handleIncreaseBtn = () => {
    setCount(count + 1);
  };
  return (
    <div className="border border-purple-500 p-10 m-10 ">
      {/* <h1>{count}</h1> */}
      {/* <Couter
        count={count}
        setCount={setCount}
        handleIncreaseBtn={handleIncreaseBtn}
      ></Couter> */}
      <UserInfoWithUseState></UserInfoWithUseState>
    </div>
  );
}

export default App;
