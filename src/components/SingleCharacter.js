import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  fetchSingleCharacter,
  selectSingleCharacter,
} from "../reducers/singleCharacterSlice";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, Typography } from "@mui/material";

const SingleCharacter = () => {
  const { id } = useParams();

  const character = useSelector(selectSingleCharacter);
  const dispatch = useDispatch();
  //get single character
  useEffect(() => {
    dispatch(fetchSingleCharacter(id));
  }, [dispatch]);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column">
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          width: "60%",
          height: "100%",
          borderRadius: "16px",
          textAlign: "center",
          paddingBottom: 30,
          paddingTop: 10,
          bgcolor: "#EFEEFC",
          fontWeight: "bold",
        }}>
        <div>
          <div>
            <img className="charImg" src={character.imageUrl} />
          </div>
          <Typography
            sx={{ mt: 3, fontWeight: "bold", fontSize: "h5.fontSize" }}>
            {character.name}
          </Typography>
          <Typography
            sx={{ mt: 3, fontWeight: "medium", fontSize: "h5.fontSize" }}>
            {character.birthday}
          </Typography>
          {character.bachelor ? (
            <Typography
              sx={{ mt: 3, fontWeight: "medium", fontSize: "h5.fontSize" }}>
              Bachelor
            </Typography>
          ) : character.bachelorette ? (
            <Typography
              sx={{ mt: 3, fontWeight: "medium", fontSize: "h5.fontSize" }}>
              Bachelorette
            </Typography>
          ) : null}
          <Typography
            sx={{ mt: 3, fontWeight: "bold", fontSize: "h5.fontSize" }}>
            Best gifts:
          </Typography>
          <Typography
            sx={{ mt: 3, fontWeight: "medium", fontSize: "h5.fontSize" }}>
            {character.bestGift}
          </Typography>
        </div>
      </Box>
    </Grid>
  );
};

export default SingleCharacter;
