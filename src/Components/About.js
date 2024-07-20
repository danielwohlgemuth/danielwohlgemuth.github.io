import { Box, Typography } from "@mui/material";


function About() {

  return (
    <>
      <Box mt={5} sx={{ textAlign: "center" }}>
        <section>
          <Typography variant="body1">Hi, I'm Daniel Wohlgemuth.</Typography>
        </section>
        <section>
          <Typography variant="body1">
            I'm a software engineer with a special interest in backend development and DevOps practices.
          </Typography>
        </section>
        <section>
          <Typography variant="body1">
            You can find me on{" "}
            <a href="https://www.linkedin.com/in/danielwohlgemuth/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>{" "}
            or see some of my projects on <a href="https://github.com/danielwohlgemuth" target="_blank" rel="noreferrer">GitHub</a>.
          </Typography>
        </section>
      </Box>
    </>
  );
}

export default About;
