import {
  Typography,
  Container,
  makeStyles,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    paddingTop: "20px",
  },
  description: {
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  root: {
    height: "100%",
  },
  card: {
    display: "flex",
    height: "100%",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  linkText: {
    textDecoration: `none`,
  },
  imageContainer: {
    marginTop: "auto",
    marginBottom: "auto",
  },
  image: {
    height: 150,
    width: 150,
    objectFit: "contain",
  },
});

const projects = [
  {
    name:
      "Utility to find out if an IPv4 address is contained in an IPv4 address range",
    url: "/projects/ip-in-subnet-list",
    image: "ip-in-subnet-list.png",
  },
  {
    name: "Identicon generator using SVG",
    url: "/projects/svg-identicon",
    image: "svg-identicon-generator.png",
  },
  {
    name: "Visual representation for a few fuzzy logic operators",
    url: "https://github.com/danielwohlgemuth/fuzzy-operators-visualization",
    image: "fuzzy-logic.png",
  },
  {
    name: "Send sensor data and visualize it with Grafana",
    url: "https://github.com/danielwohlgemuth/sensor2graph-micropython-esp32",
    image: "sensor-to-graph.png",
  },
];

function Home() {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h4" align="center" className={classes.title}>
        Projects
      </Typography>

      <Typography
        variant="body1"
        align="center"
        className={classes.description}
      >
        Different projects that I've been working on to try out ideas or
        technologies.
      </Typography>

      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} lg={4} key={project.url}>
              <Box p={1} className={classes.root}>
                <a href={project.url} className={classes.linkText}>
                  <Card className={classes.card} raised={true}>
                    <div className={classes.imageContainer}>
                      <CardMedia
                        className={classes.image}
                        image={"/images/" + project.image}
                        component="img"
                        title={project.name}
                      />
                    </div>
                    <div className={classes.details}>
                      <CardContent className={classes.content}>
                        <Typography variant="h6">{project.name}</Typography>
                      </CardContent>
                    </div>
                  </Card>
                </a>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Home;
