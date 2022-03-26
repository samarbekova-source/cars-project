import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { contexts } from "../../contexts/contexts";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./CarsList.css";

const CarsList = () => {
  const { auto, getAutoData, deleteCar, editCars } = useContext(contexts);
  useEffect(() => {
    getAutoData();
  }, []);

  return (
    <div className="block">
      {auto.map((item) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" height="140" image={item.image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.task}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.desc}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => deleteCar(item.id)} size="small">
              Delete
            </Button>
            <Link to="/edit">
              <Button onClick={() => editCars(item.id)} size="small">
                Edit
              </Button>
            </Link>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default CarsList;
