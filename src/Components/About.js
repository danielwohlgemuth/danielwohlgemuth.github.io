import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
});

function About() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root} mt={5}>
        <section>
          <Typography variant="body1">Hi, I'm Daniel Wohlgemuth.</Typography>
        </section>
        <section>
          <Typography variant="body1">
            I'm a software engineer with an interest in backend development and DevOps practices.
          </Typography>
        </section>
        <section>
          <Typography variant="body1">
            You can find me on{" "}
            <a href="https://www.linkedin.com/in/daniel-wohlgemuth-6982291ba/">
              LinkedIn
            </a>{" "}
            or see some of my projects on <a href="https://github.com/danielwohlgemuth">GitHub</a>.
          </Typography>
        </section>
      </Box>
    </>
  );
}

export default About;
