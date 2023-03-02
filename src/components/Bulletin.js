import React, { useEffect } from "react";
import { fetchBulletin } from "../reducers/bulletinSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Typography,
} from "@mui/material";

const Bulletin = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.bulletin);

  useEffect(() => {
    dispatch(fetchBulletin());
  }, [dispatch]);
  //get all items
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        bgcolor: "#EFEEFC",
        width: "80%",
        margin: "auto",
      }}>
      <TableContainer className="table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", fontSize: "2em" }}>
                Bundle
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", fontSize: "2em" }}>
                Name
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", fontSize: "2em" }}>
                Quantity
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* map through items*/}
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell
                  sx={{ fontWeight: "medium", fontSize: "1.5em" }}
                  component="th">
                  {item.bundle} Bundle
                </TableCell>
                <TableCell sx={{ fontWeight: "medium", fontSize: "1.5em" }}>
                  {item.name}
                </TableCell>
                <TableCell sx={{ fontWeight: "medium", fontSize: "1.5em" }}>
                  {item.quantity}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Bulletin;
