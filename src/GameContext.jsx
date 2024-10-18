import { createContext, useReducer } from "react";

export const GameContext = createContext();

const initialState = {
  xp: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_XP":
      return {
        ...state,
        xp: state.xp + action.payload,
      };
    case "RESET_XP":
      return initialState;
    default:
      return state;
  }
};

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
