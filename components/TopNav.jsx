import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import Battery3BarIcon from "@mui/icons-material/Battery3Bar";
import WifiIcon from "@mui/icons-material/Wifi";
import SearchIcon from "@mui/icons-material/Search";
import ListIcon from "@mui/icons-material/List";
import styles from "../styles/TopNav.module.css";

const TopNav = () => {
  return (
    <AppBar position="static" className={styles.navbar}>
      <Toolbar>
        <Box
          className={styles.leftOptions}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <AppleIcon className={`${styles.option} ${styles.appleLogo}`} />
          <Typography variant="h6" className={styles.option} component="div">
            Finder
          </Typography>
          <Typography variant="h6" className={styles.option} component="div">
            File
          </Typography>
          <Typography variant="h6" className={styles.option} component="div">
            Edit
          </Typography>
          <Typography variant="h6" className={styles.option} component="div">
            View
          </Typography>
          <Typography variant="h6" className={styles.option} component="div">
            Go
          </Typography>
          <Typography variant="h6" className={styles.option} component="div">
            Window
          </Typography>
          <Typography variant="h6" className={styles.option} component="div">
            Help
          </Typography>
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
    </AppBar>
  );
};

export default TopNav;
