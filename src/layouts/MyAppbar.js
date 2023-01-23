import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

import { InputAdornment, TextField } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid>
          <Item sx={{ backgroundColor: "#000" }}>
            <img
              height={40}
              width={100}
              src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg"
            />
          </Item>
        </Grid>
        <Grid>
          <Item sx={{ backgroundColor: "#000", color: "#fff" }}>
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
        <Grid>
          <Item sx={{ color: "#fff" }}>
            <TextField
              id="internet-speed"
              InputProps={{
                endAdornment: (
                  <InputAdornment disableTypography position="end">
                    search
                  </InputAdornment>
                ),
              }}
            />
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
            <div>
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
