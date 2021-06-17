import React, { useReducer, createContext } from "react";

const initialState = {
  isLoading: false,
  videos: [],
};
const AppReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_VIDEO":
      break;
    case "REMOVE_VIDEOS":
      break;
    case "SET_LOADING_ON":
      break;
    case "SET_LOADING_OFF":
      break;

    default:
      break;
  }
};

const ContextApp = createContext();

const ContextAppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <ContextApp.Provider
      value={{
        dispatch,
        videos: state.videos,
        isLoading: state.isLoading,
      }}
    >
      {children}
    </ContextApp.Provider>
  );
};

export { ContextAppProvider, ContextApp };
