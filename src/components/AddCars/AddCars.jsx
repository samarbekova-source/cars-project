import React, { useContext, useState } from "react";
import { contexts } from "../../contexts/contexts";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Boxes from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;
const style = {
  width: 400,
  bgcolor: "background.paper",
};

const AddCars = () => {
  const [inpValue, setInpValue] = useState("");
  const [inpValueImage, setInpValueImage] = useState("");
  const [inpValueDesc, setInpValueDesc] = useState("");
  let { addCars } = useContext(contexts);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  function handleClick() {
    handleClose();
    let newObj = {
      task: inpValue,
      image: inpValueImage,
      desc: inpValueDesc,
    };
    addCars(newObj);
    setInpValue("");
  }

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        Add Car
      </Button>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <Boxes
            sx={{
              display: "flex",
              flexDirection: "column",
              "& > :not(style)": { m: 1 },
              backgroundColor: "white",
            }}
          >
            <TextField
              helperText="Please enter model car"
              id="demo-helper-text-misaligned"
              label="Model"
              value={inpValue}
              onChange={(e) => setInpValue(e.target.value)}
              type="text"
            />
            <TextField
              helperText="Please enter image"
              id="demo-helper-text-misaligned-no-helper"
              label="Image"
              value={inpValueImage}
              onChange={(e) => setInpValueImage(e.target.value)}
              type="text"
            />
            <TextField
              helperText="Please enter descroption car"
              id="demo-helper-text-misaligned-no-helper"
              label="Description"
              value={inpValueDesc}
              onChange={(e) => setInpValueDesc(e.target.value)}
              type="text"
            />
          </Boxes>
          <Button variant="contained" onClick={handleClick}>
            Add
          </Button>
        </Box>
      </StyledModal>
    </div>
  );
};

export default AddCars;
