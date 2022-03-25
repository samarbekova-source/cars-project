import React, { useReducer } from "react";
import axios from "axios";

export const contexts = React.createContext();

const API = "http://localhost:8000/cars";

const INIT_STATE = {
  auto: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_AUTO_DATA":
      return { ...state, auto: action.payload };
    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getAutoData = async () => {
    let { data } = await axios(API);
    dispatch({
      type: "GET_AUTO_DATA",
      payload: data,
    });
  };
  const addCars = async (newAuto) => {
    await axios.post(API, newAuto);
    getAutoData();
  };

  return (
    <contexts.Provider
      value={{
        auto: state.auto,
        getAutoData,
        addCars,
      }}
    >
      {children}
    </contexts.Provider>
  );
};

export default ContextProvider;
