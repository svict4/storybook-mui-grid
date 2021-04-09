import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";

const Footer: React.FC = () => (
  <footer>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper>xs=12</Paper>
      </Grid>
    </Grid>

    {/* even this will fail 
      <Grid>test</Grid>
    */}
  </footer>
);
export default Footer;
