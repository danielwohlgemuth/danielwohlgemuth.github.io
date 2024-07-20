import React from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const Body = ({ paybackList }) => {
  if (paybackList.length === 0) {
    return (
      <TableRow>
        <TableCell colSpan={3} align="center">
          Please add expenses for two or more people
        </TableCell>
      </TableRow>
    );
  }

  return (
    <>
      {paybackList.map(({ from, to, amount }, i) => (
        <TableRow key={i}>
          <TableCell>{from}</TableCell>
          <TableCell>{to}</TableCell>
          <TableCell align="right">{amount}</TableCell>
        </TableRow>
      ))}
    </>
  );
};

function Payback({ paybackList }) {
  return (
    <>
      <Typography variant="h6">Payback Strategy</Typography>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>From</TableCell>
              <TableCell>To</TableCell>
              <TableCell align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Body paybackList={paybackList} />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Payback;
