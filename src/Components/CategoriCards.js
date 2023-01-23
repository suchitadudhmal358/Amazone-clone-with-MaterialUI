import { InsertEmoticon } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React from "react";
import CatCard from "./CatCard";

const CategoriCards = () => {
  return (
    <Grid spacing={2}>
      <Grid item xs={2}>
        <CatCard
          imgSRC={
            "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg"
          }
        />
      </Grid>

      <Grid item xs={2}>
        <CatCard
          imgSRC={
            "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg"
          }
        />
      </Grid>
      <Grid item>
        <CatCard
          imgSRC={
            "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg"
          }
        />
      </Grid>
      <Grid item>
        <CatCard
          imgSRC={
            "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg"
          }
        />
      </Grid>
    </Grid>
  );
};

export default CategoriCards;
