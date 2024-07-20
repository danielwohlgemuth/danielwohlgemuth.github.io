import React from "react";
import {
  Box,
  Typography,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import "./Expenses.css";

const Body = ({ personList, editPerson }) => (
  <>
    {personList.map(({ name, amount }, i) => (
      <TableRow key={i}>
        <TableCell align="left">
          <TextField
            name="Person"
            value={name}
            onChange={(e) => editPerson(i, "name", e.target.value)}
          />
        </TableCell>
        <TableCell align="right">
          <TextField
            name="Amount"
            value={amount}
            type="number"
            onChange={(e) => {
              let value = parseFloat(e.target.value);
              if (isNaN(value) || value < 0) {
                value = 0;
              }
              editPerson(i, "amount", value);
            }}
          />
        </TableCell>
      </TableRow>
    ))}
  </>
);

function Expenses({ personList, editPerson, total }) {
  return (
    <>
      <Typography variant="h6">Expenses</Typography>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Person</TableCell>
              <TableCell align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Body personList={personList} editPerson={editPerson} />
            <TableRow>
              <TableCell>
                <Box fontWeight="fontWeightMedium">Total</Box>
              </TableCell>
              <TableCell align="right">
                <Box fontWeight="fontWeightMedium" mr={2}>
                  {total}
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Expenses;
