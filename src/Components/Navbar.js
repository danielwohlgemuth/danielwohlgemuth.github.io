import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AppBar, Box, Toolbar, List, ListItemButton } from "@mui/material";
import { Brightness7, Brightness4 } from '@mui/icons-material';
import ThemeContext from "./ThemeContext";




function Navbar() {
  const { isDarkMode, toggleMode } = useContext(ThemeContext);

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
              <ListItemButton>Home</ListItemButton>
            </Link>
            <NavLink to="/about" style={{
              textDecoration: `none`,
              textTransform: `uppercase`,
              color: `white`,
            }}
            >
              <ListItemButton>About</ListItemButton>
            </NavLink>

            <ListItemButton onClick={toggleMode}>
              {isDarkMode ? <Brightness7 /> : <Brightness4 />}
            </ListItemButton>
          </List>
        </Toolbar>
      </Box>
    </AppBar>
  );
}

export default Navbar;
