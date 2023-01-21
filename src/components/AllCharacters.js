import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters, characterSelector } from "../reducers/characterSlice";
import {
  Typography,
  CardActions,
  CardMedia,
  CardContent,
  Card,
  Button,
  Grid,
} from "@mui/material";

const AllCharacters = () => {
  const dispatch = useDispatch();
  const characters = useSelector(characterSelector);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{
        float: "center",
        justifyContent: "center",
        height: "100vh",
      }}>
      {characters && characters.length
        ? characters.map((character) => {
            return (
              <div className="character" key={character.id}>
                <Card
                  raised
                  sx={{
                    width: 280,
                    ml: 10,
                    mb: 3,
                    height: 325,
                    padding: "0.1em",
                    alignContent: "center",
                  }}>
                  <CardMedia
                    component="img"
                    image={character.imageUrl}
                    height="250"
                    width="140"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      align="center">
                      {character.name}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            );
          })
        : null}
    </Grid>
  );
};

export default AllCharacters;
