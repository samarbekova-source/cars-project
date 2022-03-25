import React, { useContext, useEffect } from "react";
import { contexts } from "../../contexts/contexts";

const CarsList = () => {
  const { auto, getAutoData, deleteCar } = useContext(contexts);
  useEffect(() => {
    getAutoData();
  }, []);

  return (
    <ul>
      {auto.map((item) => (
        <li key={item.id}>
          {/* <input
            type="checkbox"
            checked={item.status}
            onChange={() => changeStatus(item.id)}
          /> */}
          {item.task}
          <button onClick={() => deleteCar(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default CarsList;
