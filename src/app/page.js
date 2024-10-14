"use client";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import {
  Box,
  List,
  ListItem,
  Container,
  Typography,
  Divider,
  Button,
  Drawer,
  CssBaseline,
  ListItemButton,
  ListItemText,
  AppBar,
  Toolbar,
} from "@mui/material";

const drawerWidth = 240;
//An array of the nav items
const navItems = ["Home", "About", "Booking", "Delivery"];

export default function DrawerApp(props) {
  const { window } = props;
  //setting the current state of the mobile to false
  const [isMobile, setIsMobile] = useState(false);
  // toggling the mobile drawer open/close state

  const handleDrawerApp = () => {
    setIsMobile((prevState) => !prevState);
  };

  //what one sees in the mobile view
  const drawer = (
    <Box
      onClick={handleDrawerApp}
      sx={{ bgcolor: "#cdf5f5", height: "100vh", padding: 10 }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        FreshThreads
      </Typography>

      <List>
        {navItems.map(
          (
            item //the paranthesis are used to write js functions
          ) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    //in xl screens
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerApp}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            FreshThreads
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "white" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={isMobile}
          onClose={handleDrawerApp}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
//function that is used to reset the state of the isMobile
