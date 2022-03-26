import React, { useReducer } from "react";
import axios from "axios";

export const contexts = React.createContext();

const API = "http://localhost:8000/cars";

const INIT_STATE = {
  auto: [],
  autoEdit: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_AUTO_DATA":
      return { ...state, auto: action.payload };
    case "EDIT_CARS":
      return { ...state, autoEdit: action.payload };
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
  const deleteCar = async (id) => {
    await axios.delete(`${API}/${id}`);
    getAutoData();
  };
  const editCars = async (id) => {
    let { data } = await axios.get(`${API}/${id}`);
    dispatch({
      type: "EDIT_CARS",
      payload: data,
    });
  };
  async function saveCar(newCar) {
    await axios.patch(`${API}/${newCar.id}`, newCar);
    getAutoData();
  }
  return (
    <contexts.Provider
      value={{
        auto: state.auto,
        autoEdit: state.autoEdit,
        getAutoData,
        addCars,
        deleteCar,
        editCars,
        saveCar,
      }}
    >
      {children}
    </contexts.Provider>
  );
};

export default ContextProvider;
