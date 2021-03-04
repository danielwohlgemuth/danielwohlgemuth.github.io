import {
  Typography,
  List,
  ListItem,
  makeStyles,
  Card,
  CardContent,
} from "@material-ui/core";

const useStyles = makeStyles({
  linkText: {
    textDecoration: `none`,
  },
});

function Home() {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h4">
        Projects
      </Typography>

      <List>
        <a href="/projects/ip-in-subnet-list" className={classes.linkText}>
          <ListItem>
            <Card>
              <CardContent>
                <Typography variant="body1">
                  IP in subnet list checker
                </Typography>
              </CardContent>
            </Card>
            {/* <ListItemText primary="IP in subnet list checker" /> */}
          </ListItem>
        </a>
        <a href="/projects/svg-identicon">
          <ListItem button>
            <Card>
              <CardContent>
                <Typography variant="body1">
                  SVG identicon generator
                </Typography>
              </CardContent>
            </Card>
            {/* <ListItemText primary="SVG identicon generator" /> */}
          </ListItem>
        </a>
      </List>
    </>
  );
}

export default Home;
