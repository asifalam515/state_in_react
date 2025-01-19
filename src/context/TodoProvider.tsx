import React, { createContext, useReducer } from "react";

export const TodoContext = createContext<
  { state: TTodo[]; dispatch: React.Dispatch<TAction> } | undefined
>(undefined);
type TodoProviderProps = {
  children: React.ReactNode;
};
export type TTodo = {
  id: string;
  title: string;
  isCompleted: boolean;
};
type TAction = {
  type: string;
  payload: TTodo | string;
};
const initialState: TTodo[] = [];
const reducer = (currentState: TTodo, action: TAction) => {
  switch (action.type) {
    case "addTodo":
      return [...currentState, action.payload];
    case "testComplete":
      return currentState.map((item) =>
        item.id === action.payload
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      );
    default:
      return currentState;
  }
};
const TodoProvider = ({ children }: TodoProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const values = {
    state,
    dispatch,
  };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
