import React from "react";
import { Button, TextField, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "../firebase/firebase.utils";
import { Formik } from "formik";
import * as Yup from "yup";

//ValidationSchema
const signInValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Can't be empty"),
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
const initialValues = {
  email: "",
  password: "",
};

function Signin() {
  const handleGoogleButtonClick = () => {
    firebase.useGoogleProvider();
  };

  const signInStyles = styles();

  const handleFormSubmit = (values) => {
    /* alert(JSON.stringify(values, null, 2)); */
    firebase.signIn(values.email, values.password);
  };

  return (
    <Container maxWidth="sm" className={signInStyles.wrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validationSchema={signInValidationSchema}
      >
        {({ handleSubmit, values, handleChange, errors, handleFormSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email}
                  helperText={errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  error={errors.password}
                  helperText={errors.password}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleFormSubmit}
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  onClick={handleGoogleButtonClick}
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Sign In with Google
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Container>
  );
}

export default Signin;
