import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  fetchSingleCharacter,
  selectSingleCharacter,
} from "../reducers/singleCharacterSlice";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid } from "@mui/material";

const SingleCharacter = () => {
  const { id } = useParams();

  const character = useSelector(selectSingleCharacter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleCharacter(id));
  }, [dispatch]);
};

export default SingleCharacter;
