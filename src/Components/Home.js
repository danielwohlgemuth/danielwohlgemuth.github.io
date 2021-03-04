import {
  Typography,
  List,
  makeStyles,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  linkText: {
    textDecoration: `none`,
  },
  cover: {
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
    name: "Visual representation for some fuzzy logic operators",
    url: "https://github.com/danielwohlgemuth/fuzzy-operators-visualization",
    image: "fuzzy-logic.png",
  },
];

function Home() {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h4">Projects</Typography>

      <List>
        {projects.map((project) => (
          <Box p={1} key={project.url}>
            <a href={project.url} className={classes.linkText}>
              <Card className={classes.root}>
                <CardMedia
                  className={classes.cover}
                  image={"/images/" + project.image}
                  component="img"
                  title={project.name}
                />
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography variant="subtitle1">{project.name}</Typography>
                  </CardContent>
                </div>
              </Card>
            </a>
          </Box>
        ))}
      </List>
    </>
  );
}

export default Home;
