import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Menubar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#232f3e" }}>
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
            <span>All</span>
          </IconButton>
          <Typography
            component="div"
            sx={{ flexGrow: 1, fontSize: "12px", padding: "8px 9px" }}
          >
            Best Sellers
          </Typography>
          <Typography
            component="div"
            sx={{ flexGrow: 1, fontSize: "12px", padding: "8px 9px" }}
          >
            Mobiles
          </Typography>
          <Typography
            component="div"
            sx={{ flexGrow: 1, fontSize: "12px", padding: "8px 9px" }}
          >
            Today's Deals
          </Typography>
          <Typography
            component="div"
            sx={{ flexGrow: 1, fontSize: "12px", padding: "8px 9px" }}
          >
            Customer Service
          </Typography>
          <Typography
            component="div"
            sx={{ flexGrow: 1, fontSize: "12px", padding: "8px 9px" }}
          >
            Electronics
          </Typography>
          <Typography
            component="div"
            sx={{ flexGrow: 1, fontSize: "12px", padding: "8px 9px" }}
          >
            Prime
          </Typography>
          <Typography
            component="div"
            sx={{ flexGrow: 1, fontSize: "12px", padding: "8px 9px" }}
          >
            Fashion
          </Typography>
          <Typography
            component="div"
            sx={{ flexGrow: 1, fontSize: "12px", padding: "8px 9px" }}
          >
            Amazon Pay
          </Typography>
          <Typography
            component="div"
            sx={{ flexGrow: 1, fontSize: "12px", padding: "8px 9px" }}
          >
            Home & Kitchen
          </Typography>
          <Typography
            component="div"
            sx={{ flexGrow: 1, fontSize: "12px", padding: "8px 9px" }}
          >
            New Releases
          </Typography>
          <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Hit2/400x39-SWM_NP._CB617027672_.jpg" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
