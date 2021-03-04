import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  makeStyles,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const useStyles = makeStyles({
  navListDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
    alignContent: `center`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
});

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <List className={classes.navListDisplayFlex}>
          <Link to="/" className={classes.linkText}>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <NavLink to="/about" className={classes.linkText}>
            <ListItem button>
              <ListItemText primary="About" />
            </ListItem>
          </NavLink>
        </List>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
