import { Typography, Container, Grid, Card, CardContent, CardMedia, Box } from "@mui/material";
import LinkOrUrl from "./LinkOrUrl";


const projects = [
  {
    name: "Japanese language learning portal using GenAI",
    url: "https://github.com/danielwohlgemuth/genai-bootcamp",
    image: "japanese-language-learning-portal.png",
  },
  {
    name: "Twitter-style application featuring expiring messages",
    url: "https://github.com/danielwohlgemuth/aws-bootcamp-cruddur",
    image: "cruddur.png",
  },
  {
    name: "Turn-based game provisioned with infrastructure as code",
    url: "https://github.com/danielwohlgemuth/experiments/blob/main/2024/turn-based-game-dynamodb-amazon-sns/README.md",
    image: "turn-based-game.png",
  },
  {
    name: "CI/CD using AWS CodePipeline, CodeBuild, and CodeDeploy",
    url: "https://github.com/danielwohlgemuth/experiments/blob/main/2024/ci-cd-using-codepipeline-codebuild-and-codedeploy/README.md",
    image: "ci-cd-pipeline.png",
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
    name: "Self managed reverse proxy and NAT instance on AWS",
    url: "https://github.com/danielwohlgemuth/experiments/tree/main/2025/aws-simple-architecture",
    image: "reverse-proxy-nat-instance.png",
  },
  {
    name: "Visual representation of some fuzzy logic operators",
    url: "https://github.com/danielwohlgemuth/fuzzy-operators-visualization",
    image: "fuzzy-logic.png",
  },
  {
    name: "K inverse pairs distribution",
    url: "https://github.com/danielwohlgemuth/experiments/tree/main/2024/k-inverse-pairs",
    image: "k-inverse-pairs-distribution.png",
  },
  {
    name: "Cost sharing calculator",
    to: "/app/cost-sharing",
    image: "cost-sharing.png",
  },
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
            <Grid
              key={project.url || project.to}
              size={{
                xs: 12,
                md: 6,
                lg: 4
              }}>
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
