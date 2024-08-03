import { Typography, Container, Grid, Card, CardContent, CardMedia, Box } from "@mui/material";
import LinkOrUrl from "./LinkOrUrl";


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
  {
    name: "Visualize house prices in Kibana",
    url: "https://github.com/danielwohlgemuth/visualize-house-prices-in-kibana",
    image: "visualize-house-prices-in-kibana.png",
  },
  {
    name: "Cost sharing calculator",
    to: "/app/cost-sharing",
    image: "cost-sharing.png",
  },
  {
    name: "K inverse pairs distribution",
    url: "https://github.com/danielwohlgemuth/experiments/tree/main/2024/k-inverse-pairs",
    image: "k-inverse-pairs-distribution.png",
  },
  {
    name: "Hiragana flashcards",
    to: "/app/hiragana",
    image: "hiragana.png",
  },
  {
    name: "Katakana flashcards",
    to: "/app/katakana",
    image: "katakana.png",
  },
];

function Home() {
  return (
    <>
      <Typography variant="h4" align="center" sx={{ paddingTop: "20px" }}>
        Projects
      </Typography>

      <Typography
        align="center"
        sx={{
          typography: 'body1',
          p: "20px",
        }}
      >
        A list of different projects that I've worked on to try out ideas or
        technologies.
      </Typography>

      <Container maxWidth="lg" sx={{ pb: 3 }}>
        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} lg={4} key={project.url || project.to}>
              <Box p={1} style={{ height: "100%" }}>
                <LinkOrUrl url={project.url} to={project.to}>
                  <Card sx={{ display: "flex", height: "100%" }} raised={true}>
                    <div style={{ alignContent: "center" }}>
                      <CardMedia
                        sx={{
                          height: 150,
                          width: 150,
                          objectFit: "contain"
                        }}
                        image={"/images/" + project.image}
                        component="img"
                        title={project.name}
                      />
                    </div>
                    <div style={{ alignContent: "center"}}>
                      <CardContent>
                        <Typography variant="h6">{project.name}</Typography>
                      </CardContent>
                    </div>
                  </Card>
                </LinkOrUrl>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Home;
