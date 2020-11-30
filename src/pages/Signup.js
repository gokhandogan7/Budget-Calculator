import React from "react";
import { Button, TextField, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import firebase from "../firebase/firebase.utils";

const styles = makeStyles({
  wrapper: {
    marginTop: "5rem",
    padding: 10,
  },
});

function Signup() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));
      firebase.register(values.email, values.password);
    },
  });

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
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
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
