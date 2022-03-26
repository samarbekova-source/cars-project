import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { contexts } from "../../contexts/contexts";
import { styled, Box } from "@mui/system";

const EditCars = () => {
  const { autoEdit, saveCar } = useContext(contexts);
  const [newEditCar, setNewEditCar] = useState(autoEdit);
  const navigate = useNavigate();
  useEffect(() => setNewEditCar(autoEdit), [autoEdit]);

  function handleEditInput(e) {
    let newCar = {
      ...newEditCar,
      task: e.target.value,
    };
    setNewEditCar(newCar);
  }

  function save() {
    saveCar(newEditCar);
    navigate("/");
  }
  return (
    <div>
      {newEditCar ? (
        <>
          <input
            onChange={handleEditInput}
            value={newEditCar.task}
            type="text"
          />
          <button onClick={save}>Save</button>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default EditCars;
