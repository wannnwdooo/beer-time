import React from "react";
import { Link } from "react-router-dom";
import Login from "../../components/Login/Login";
import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { LoginPageWrapper } from "./LoginPageStyles";
import { REGISTER_ROUTE } from "../../utils/consts";

const LoginPage = () => {
  return (
    <LoginPageWrapper>
      <Container maxWidth="sm">
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          textAlign={"center"}
        >
          <Typography sx={{ fontSize: "inherit" }} marginBottom={2}>
            Login
          </Typography>
          <Login />
          <Typography
            sx={{ fontSize: "inherit", textDecoration: "none" }}
            marginTop={2}
            component={Link}
            to={REGISTER_ROUTE}
            underline="none"
            color="inherit"
          >
            Or register
          </Typography>
        </Grid>
      </Container>
    </LoginPageWrapper>
  );
};

export default LoginPage;
