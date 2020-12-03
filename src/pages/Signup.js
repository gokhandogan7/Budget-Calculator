import React, { useState } from "react";
import { Button, TextField, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import firebase from "../firebase/firebase.utils";
import * as Yup from "yup";

//ValidationSchema
const signUpValidationSchema = Yup.object().shape({
  displayName: Yup.string().required("Display name is reqired"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum."),
});

const styles = makeStyles({
  wrapper: {
    marginTop: "5rem",
    padding: 10,
  },
});

function Signup() {
  const formik = useFormik({
    initialValues: {
      displayName: "",
      email: "",
      password: "",
    },
    validationSchema: signUpValidationSchema,
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));
      firebase.register(values.displayName, values.email, values.password);
    },
  });
      console.log(formik)

  const handleGoogleButtonClick = () => {
    firebase.useGoogleProvider();
  };

  const signUpStyles = styles();

  return (
    <Container maxWidth="sm" className={signUpStyles.wrapper}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              name="displayName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              error={formik.errors.displayName}
              helperText={formik.errors.displayName}

            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.errors.email}
              helperText={formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.errors.password}
              helperText={formik.errors.password}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={handleGoogleButtonClick}
              variant="contained"
              color="primary"
              fullWidth
            >
              Sign Up With Google
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Signup;
