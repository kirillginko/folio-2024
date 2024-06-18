import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import Battery3BarIcon from "@mui/icons-material/Battery3Bar";
import WifiIcon from "@mui/icons-material/Wifi";
import SearchIcon from "@mui/icons-material/Search";
import ListIcon from "@mui/icons-material/List";
import styles from "../styles/TopNav.module.css";

const TopNav = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuName, setMenuName] = useState("");

  const handleMenuOpen = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setMenuName(menu);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuName("");
  };

  const menuOptions = {
    Finder: [
      "About Finder",
      "Preferences...",
      "Services",
      "Hide Finder",
      "Quit Finder",
    ],
    File: [
      "New Tab",
      "New Window",
      "New Private Window",
      "Open Location...",
      "Open File...",
      "Close Tab",
      "Save Page As...",
      "Print...",
      "Import From Another Browser...",
      "Work Offline",
    ],
    Edit: ["Undo", "Redo", "Cut", "Copy", "Paste", "Delete", "Select All"],
    View: ["Show All Tabs", "Full Screen", "Customize Toolbar"],
    Go: ["Back", "Forward", "Home", "Reload", "History"],
    Window: ["Minimize", "Zoom", "Close Window", "Bring All to Front"],
    Help: ["Firefox Help", "Submit Feedback"],
  };

  const renderMenu = (menu) => (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl) && menuName === menu}
      onClose={handleMenuClose}
      classes={{ paper: styles.menuPaper }}
    >
      {menuOptions[menu].map((option, index) => (
        <MenuItem
          key={index}
          onClick={handleMenuClose}
          className={styles.menuItem}
        >
          {option}
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <AppBar position="static" className={styles.navbar}>
      <Toolbar>
        <Box
          className={styles.leftOptions}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <AppleIcon className={`${styles.option} ${styles.appleLogo}`} />
          {Object.keys(menuOptions).map((menu) => (
            <Typography
              key={menu}
              variant="h6"
              className={styles.option}
              component="div"
              onClick={(event) => handleMenuOpen(event, menu)}
            >
              {menu}
            </Typography>
          ))}
        </Box>
        <Box
          className={styles.rightOptions}
          sx={{ display: "flex", alignItems: "center", marginLeft: "auto" }}
        >
          <VolumeUpIcon className={styles.option} />
          <Battery3BarIcon className={styles.option} />
          <WifiIcon className={styles.option} />
          <Typography variant="h6" className={styles.option} component="div">
            Wed 8:59 PM
          </Typography>
          <SearchIcon className={styles.option} />
          <ListIcon className={styles.option} />
        </Box>
      </Toolbar>
      {Object.keys(menuOptions).map((menu) => renderMenu(menu))}
    </AppBar>
  );
};

export default TopNav;
