import React from "react";
import { Link } from "react-router-dom";
import Register from "../../components/Register/Register";
import { Container, Grid } from "@mui/material";
import { RegisterPageWrapper } from "./RegisterPageStyles";
import Typography from "@mui/material/Typography";
import { LOGIN_ROUTE } from "../../utils/consts";

const RegisterPage = () => {
  return (
    <RegisterPageWrapper>
      <Container maxWidth="sm">
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          textAlign={"center"}
        >
          <Typography sx={{ fontSize: "inherit" }} marginBottom={2}>
            Register
          </Typography>
          <Register />
          <Typography
            sx={{ fontSize: "inherit", textDecoration: "none" }}
            marginTop={2}
            component={Link}
            to={LOGIN_ROUTE}
            underline="none"
            color="inherit"
          >
            Already have an account? Sign in
          </Typography>
        </Grid>
      </Container>
    </RegisterPageWrapper>
  );
};

export default RegisterPage;
