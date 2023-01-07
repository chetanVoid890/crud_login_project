import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Cookies from "js-cookie";

const Header = () => {
  const onLogoutHandler = (event) => {
    event.preventDefault();
    Cookies.remove("user");
    window.location.href = `${window.location.origin}/login`;
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.01 }}>
            ExhiByte Solution
          </Typography>
          <NavLink to="/product" className="nav-link">
            <MenuItem sx={{ color: "white" }}>Home</MenuItem>
          </NavLink>
          <NavLink to="/about_us" className="nav-link">
            <MenuItem sx={{ color: "white" }}>About Us</MenuItem>
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            <MenuItem sx={{ color: "white" }}>Contact</MenuItem>
          </NavLink>
          <NavLink to="/crude" className="nav-link">
            <MenuItem sx={{ color: "white" }}>Crud</MenuItem>
          </NavLink>
          <Button variant="contained" type="submit" onClick={onLogoutHandler}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
