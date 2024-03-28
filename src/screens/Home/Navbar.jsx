/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, useTheme } from "../../context/ThemeContext";
import "./Home.css";


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
   
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
  ];
  const handleLogin = async () => {
    await loginWithRedirect();
  };

  const handleLogout = () => {
     
    logout({ logoutParams: { returnTo: window.location.origin } });
    
  };

  

  if (isAuthenticated) {
    navigate("/dashboard");
    // alert("User Logged in successfully!");
  }

  return (
    <ThemeProvider>
    <nav style={{ backgroundColor: theme === "dark" ? "#2e2e48" : "white" }}>
      <div className="nav-logo-container"></div>
      <div className="navbar-links-container" style={{ marginRight: "5rem" }}>
        <a href="" style = {{color: theme === "dark" ? "white" : "black"}} >Home</a>
        <a href="" style = {{color: theme === "dark" ? "white" : "black"}}>About</a>
        <a href="" style = {{color: theme === "dark" ? "white" : "black"}}>Contact</a>
        {isAuthenticated ? (
          <button
            className="button"
            style={{
              fontSize: "18px",
              color: theme === "dark" ? "white" : "black",
            }}
            onClick={() => handleLogout()}
          >
            Log Out
          </button>
        ) : (
          <button
            style={{
              fontSize: "17px",
              color: theme === "dark" ? "white" : "white",
              border: "1px solid",
              borderRadius: "10px",
              padding: "5px",
              backgroundColor: "#2e2e48",
            }}
            onClick={() => handleLogin()}
          >
            Log In
          </button>
        )}
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
    </ThemeProvider>
  );
};

export default Navbar;
