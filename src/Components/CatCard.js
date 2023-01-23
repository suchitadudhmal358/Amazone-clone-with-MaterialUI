import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
} from "@mui/material";

export default function CatCard({ imgSRC }) {
  return (
    <Card raised={true} sx={{ maxWidth: 150 }}>
      <CardMedia component="img" height="150" image={imgSRC} alt="category" />
      <CardContent>
        <Typography variant="caption" component="h6" sx={{ padding: 0 }}>
          Lizard
        </Typography>
      </CardContent>
    </Card>
  );
}
