import React, { useContext, useEffect } from "react";
import { contexts } from "../../contexts/contexts";

const CarsList = () => {
  const { auto, getAutoData } = useContext(contexts);
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
        </li>
      ))}
    </ul>
  );
};

export default CarsList;
