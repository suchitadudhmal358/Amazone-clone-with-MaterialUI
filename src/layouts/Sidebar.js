import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { capitalize, ListSubheader } from "@mui/material";

const drawerWidth = 300;

// const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//       transition: theme.transitions.create("margin", {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   })
// );

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="static"
        open={open}
        sx={{ background: "#232f3e", height: "50px", justifyContent: "center" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            size="small"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
            <span>All</span>
          </IconButton>
          <Typography
            component="div"
            sx={{ fontSize: "12px", padding: "8px 9px" }}
          >
            Best Sellers
          </Typography>
          <Typography
            component="div"
            sx={{ fontSize: "12px", padding: "8px 9px" }}
          >
            Mobiles
          </Typography>
          <Typography
            component="div"
            sx={{ fontSize: "12px", padding: "8px 9px" }}
          >
            Today's Deals
          </Typography>
          <Typography
            component="div"
            sx={{ fontSize: "12px", padding: "8px 9px" }}
          >
            Customer Service
          </Typography>
          <Typography
            component="div"
            sx={{ fontSize: "12px", padding: "8px 9px" }}
          >
            Electronics
          </Typography>
          <Typography
            component="div"
            sx={{ fontSize: "12px", padding: "8px 9px" }}
          >
            Prime
          </Typography>
          <Typography
            component="div"
            sx={{ fontSize: "12px", padding: "8px 9px" }}
          >
            Fashion
          </Typography>
          <Typography
            component="div"
            sx={{ fontSize: "12px", padding: "8px 9px" }}
          >
            Amazon Pay
          </Typography>
          <Typography
            component="div"
            sx={{ fontSize: "12px", padding: "8px 9px" }}
          >
            Home & Kitchen
          </Typography>
          <Typography
            component="div"
            sx={{ fontSize: "12px", padding: "8px 9px" }}
          >
            New Releases
          </Typography>
          <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Hit2/400x39-SWM_NP._CB617027672_.jpg" />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          // width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader
          display="flex"
          sx={{
            justifyContent: "space-between",
            backgroundColor: "rgb(35 47 62)",
            color: "#fff",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0 10px",
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            <AccountCircleRoundedIcon fontSize="medium" />
            <span style={{ marginLeft: "2px" }}>Hello, Sign in</span>
          </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <span
            style={{
              fontSize: "18px",
              fontWeight: 700,
              padding: " 13px 20px 5px 36px",
            }}
          >
            Trending
          </span>
          {["Best Sellers", "New Releases", "Movers and Shakers"].map(
            (text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={text}
                    style={{ padding: "0 20px 0  36px" }}
                  />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
        <Divider />
        <span
          style={{
            fontSize: "18px",
            fontWeight: 700,
            padding: " 13px 20px 5px 36px",
            textTransform: "capitalize",
          }}
        >
          digital content and devices
        </span>
        <List>
          {[
            "Amazon miniTV- FREE entertainment",
            "Echo & Alexa",
            "Kindle E-Readers & eBooks",
            "Audible Audiobooks",
            "Amazon Prime Video",
            "Amazon Prime Music",
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={text}
                  style={{ padding: "0 20px 0  36px" }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <span
            style={{
              fontSize: "18px",
              fontWeight: 700,
              padding: " 13px 20px 5px 36px",
            }}
          >
            shop by category
          </span>
          {[
            "Mobiles, Computers",
            "TV, Appliances, Electronics",
            "Men's Fashion",
            "Women's Fashion",
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={text}
                  style={{ padding: "0 20px 0  36px" }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* <Main open={open} display="flex" style={{ flexDirection: "column" }}>
        <DrawerHeader />
      </Main> */}
    </Box>
  );
}
