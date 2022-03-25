import React, { useContext, useState } from "react";
import { contexts } from "../../contexts/contexts";

const AddCars = () => {
  const [inpValue, setInpValue] = useState("");
  let { addCars } = useContext(contexts);
  function handleClick() {
    let newObj = {
      task: inpValue,
    };
    addCars(newObj);
    setInpValue("");
  }

  return (
    <div>
      <input
        value={inpValue}
        onChange={(e) => setInpValue(e.target.value)}
        type="text"
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default AddCars;
