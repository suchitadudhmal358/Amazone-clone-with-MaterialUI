import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

import {
  FormControl,
  InputAdornment,
  TextField,
  MenuItem,
  InputLabel,
  Select,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Header() {
  const [language, setLanguage] = useState("EN");
  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <Box sx={{ backgroundColor: "#000", height: "60px" }}>
      <Grid
        container
        spacing={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mx: 2 }}
      >
        <Grid>
          <Item
            sx={{ backgroundColor: "#000" }}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              height={40}
              width={100}
              src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg"
            />
            <span style={{ color: "#fff", marginBottom: "2px" }}>.in</span>
          </Item>
        </Grid>
        <Grid>
          <Item
            sx={{ backgroundColor: "#000", color: "#fff" }}
            style={{ display: "flex", alignItems: "center" }}
          >
            <LocationOnOutlinedIcon />
            <div>
              <p style={{ marginTop: 0, marginBottom: 0, textAlign: "left" }}>
                Hello
              </p>
              <p style={{ marginTop: 0, marginBottom: 0, fontWeight: 600 }}>
                Select your Location
              </p>
            </div>
          </Item>
        </Grid>
        <Grid style={{ display: "flex", alignItems: "center", width: "30%" }}>
          <Item sx={{ color: "#fff", border: "none", padding: 0, width: 1 }}>
            <FormControl style={{ width: "100%" }}>
              <TextField
                size="small"
                variant="outlined"
                style={{ height: "40px", margin: "0", padding: "0" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      disableTypography
                      position="end"
                      style={{
                        height: "20px",
                        padding: "10px",
                        marginRight: 0,
                      }}
                    >
                      <SearchOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </Item>
        </Grid>
        <Grid>
          <Item style={{ padding: 0 }}>
            <Select
              value={language}
              onChange={handleChange}
              displayEmpty
              style={{
                height: "40px",
                margin: "0",
                padding: "0",
              }}
            >
              <MenuItem value={"EN"}>
                <em>EN</em>
              </MenuItem>
              <MenuItem value={"HI"}>HI</MenuItem>
              <MenuItem value={20}></MenuItem>
              <MenuItem value={20}>TE</MenuItem>
              <MenuItem value={30}>TA</MenuItem>
            </Select>
          </Item>
        </Grid>
        <Grid>
          <Item sx={{ backgroundColor: "#000", color: "#fff" }}>
            <div>
              <p style={{ marginTop: 0, marginBottom: 0, textAlign: "left" }}>
                Hello, sign in
              </p>
              <p style={{ marginTop: 0, marginBottom: 0, fontWeight: 600 }}>
                Acoounts & Lists
              </p>
            </div>
          </Item>
        </Grid>
        <Grid>
          <Item sx={{ backgroundColor: "#000", color: "#fff" }}>
            <div>
              <p style={{ marginTop: 0, marginBottom: 0, textAlign: "left" }}>
                Returns
              </p>
              <p style={{ marginTop: 0, marginBottom: 0, fontWeight: 600 }}>
                & Orders
              </p>
            </div>
          </Item>
        </Grid>
        <Grid>
          <Item sx={{ backgroundColor: "#000", color: "#fff" }}>
            <div style={{ display: "flex" }}>
              <ShoppingCartOutlinedIcon />
              <p style={{ marginTop: 0, marginBottom: 0, fontWeight: 600 }}>
                Cart
              </p>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
