import React from "react";
import { CircularProgress, Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";

const Loader = () => {
  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems={"center"}
        justifyContent={"center"}
        textAlign={"center"}
      >
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      </Grid>
    </Container>
  );
};

export default Loader;
