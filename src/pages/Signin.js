import React from "react";
import { Button, TextField, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "../firebase/firebase.utils";
import { Formik } from "formik";

console.log(firebase);
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
    alert(JSON.stringify(values, null, 2));
    /* firebase.signIn(values.email, values.password) */
  };

  return (
    <Container maxWidth="sm" className={signInStyles.wrapper}>
      <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
        {({
            handleSubmit,
            values,
            handleChange,
            errors,
           

        }) => (
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
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
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
