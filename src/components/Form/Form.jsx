import React, { useState } from "react";
import { Grid, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { FormStyles } from "./FormStyles";

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [errors, setErrors] = useState();
  const dispatch = useDispatch();

  const validEmail = (e) => {
    const {
      target: { value },
    } = e;
    setErrors({ email: "" });
    setEmail(e.target.value);
    let reg = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ).test(value);
    if (!reg) {
      setErrors({ email: "Not an email" });
    }
  };
  const validPassword = (e) => {
    setErrors({ pass: "" });
    setPass(e.target.value);
    if (e.target.value.length < 3) {
      setErrors({ pass: "Too short password" });
    }
  };

  return (
    <Grid container spacing={1.5}>
      <Grid item xs={12}>
        <TextField
          label="email"
          color="neutral"
          error={Boolean(errors?.email)}
          helperText={errors?.email}
          focused
          value={email}
          onChange={validEmail}
          type="email"
          sx={FormStyles}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="password"
          color="neutral"
          error={Boolean(errors?.pass)}
          helperText={errors?.pass}
          focused
          value={pass}
          onChange={validPassword}
          type="password"
          sx={FormStyles}
        />
      </Grid>
      <Grid item xs>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => handleClick(email, pass, dispatch)}
        >
          {title}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Form;
