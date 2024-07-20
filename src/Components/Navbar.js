import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AppBar, Box, Toolbar, List, ListItem, ListItemText } from "@mui/material";


function Navbar() {

  return (
    <AppBar position="static">
      <Box display="flex" justifyContent="center">
        <Toolbar>
          <List style={{
              display: `flex`,
              alignContent: `center`,
            }}
          >
            <Link to="/" style={{
                textDecoration: `none`,
                textTransform: `uppercase`,
                color: `white`,
              }}
            >
              <ListItem button>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>
            <NavLink to="/about" style={{
                textDecoration: `none`,
                textTransform: `uppercase`,
                color: `white`,
              }}
            >
              <ListItem button>
                <ListItemText primary="About" />
              </ListItem>
            </NavLink>
          </List>
        </Toolbar>
      </Box>
    </AppBar>
  );
}

export default Navbar;
