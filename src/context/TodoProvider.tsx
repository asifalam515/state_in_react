import { createContext } from "react";

export const TodoContext = createContext(undefined);
type TodoProviderProps = {
  children: React.ReactNode;
};
const TodoProvider = ({ children }: TodoProviderProps) => {
  const values = {
    todoTitle: "this is todo title",
  };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
