import React, { useState } from "react";
import { Box, Typography, makeStyles, Container } from "@material-ui/core";
import { getEmptyPerson, isEmptyPerson, calculatePayback } from "./utils";
import Expenses from "./Expenses";
import Payback from "./Payback";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
});

function CostSharing() {
  const classes = useStyles();
  const [personList, setPersonList] = useState([getEmptyPerson()]);
  const [total, setTotal] = useState(0);
  const [paybackList, setPaybackList] = useState([]);

  const editPerson = (i, field, value) => {
    setPersonList((personList) => {
      let filledOutPersonList = personList
        .map((person, j) => {
          if (i === j) {
            return {
              ...person,
              [field]: value,
            };
          } else {
            return person;
          }
        })
        .filter((person) => !isEmptyPerson(person));

      const [paybackList, total] = calculatePayback(filledOutPersonList);
      setTotal(total);
      setPaybackList(paybackList);

      return [...filledOutPersonList, getEmptyPerson()];
    });
  };

  return (
    <>
      <Container maxWidth="sm">
        <Box className={classes.root} mt={5}>
          <section>
            <Typography variant="h4">Cost Sharing</Typography>
          </section>
          <section>
            <Box mt={4}>
              <Expenses
                personList={personList}
                editPerson={editPerson}
                total={total}
              />
            </Box>

            <Box mt={5} mb={5}>
              <Payback paybackList={paybackList} />
            </Box>
          </section>
        </Box>
      </Container>
    </>
  );
}

export default CostSharing;
