import { Box, Typography, Link } from "@mui/material";


function About() {

  return (
    <>
      <Box mt={5} sx={{ textAlign: "center", px: 2 }}>
        <Typography sx={{ typography: 'body1', lineHeight: 2 }}>
          Hi, I'm Daniel Wohlgemuth.
        </Typography>
        <Typography sx={{ typography: 'body1', lineHeight: 2 }}>
          I'm a software engineer with a special interest in backend development and DevOps practices.
        </Typography>
        <Typography sx={{ typography: 'body1', lineHeight: 2 }}>
          You can find me on{" "}
          <Link href="https://www.linkedin.com/in/danielwohlgemuth/" target="_blank" rel="noreferrer">
            LinkedIn
          </Link>{" "}
          or see some of my projects on{" "}
          <Link href="https://github.com/danielwohlgemuth" target="_blank" rel="noreferrer">
            GitHub
          </Link>.
        </Typography>
      </Box>
    </>
  );
}

export default About;
