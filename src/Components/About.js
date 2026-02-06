import { Box, Typography, Link } from "@mui/material";


function About() {

  return (
    <>
      <Box mt={5} sx={{ textAlign: "center", px: 2 }}>
        <Typography sx={{ typography: 'body1', lineHeight: 2 }}>
          Hi, I'm Daniel Wohlgemuth.
        </Typography>
        <Typography sx={{ typography: 'body1', lineHeight: 2 }}>
          I'm a full-stack developer, leaning towards backend development and DevOps, with decent frontend skills. I use this site to share some of my more interesting projects and mini-apps.
        </Typography>
        <Typography sx={{ typography: 'body1', lineHeight: 2 }}>
          You can find me on{" "}
          <Link href="https://www.linkedin.com/in/danielwohlgemuth/" target="_blank" rel="noreferrer">
            LinkedIn
          </Link>{" "}
          or browse my repos on{" "}
          <Link href="https://github.com/danielwohlgemuth" target="_blank" rel="noreferrer">
            GitHub
          </Link>.
        </Typography>
      </Box>
    </>
  );
}

export default About;
