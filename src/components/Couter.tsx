import { useState } from "react";

const Couter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-2xl">{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Couter;
