import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { contexts } from "../../contexts/contexts";

const CarsList = () => {
  const { auto, getAutoData, deleteCar, editCars } = useContext(contexts);
  useEffect(() => {
    getAutoData();
  }, []);

  return (
    <ul>
      {auto.map((item) => (
        <li key={item.id}>{item.task}</li>
        <li key={item.id}>
          {/* <input
            type="checkbox"
            checked={item.status}
            onChange={() => changeStatus(item.id)}
          /> */}
          {item.task}
          <button onClick={() => deleteCar(item.id)}>Delete</button>
          <Link to="/edit">
            <button onClick={() => editCars(item.id)}>Edit</button>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CarsList;
