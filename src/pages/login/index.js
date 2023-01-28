import React from "react";
import { Grid, TextField, Stack, Container, Button } from "@mui/material";
import { Formik } from "formik";
import { loginHandler } from "../../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";

const initialValues = { email: "", password: "" };

const LoginPage = () => {
  const isLoading = useSelector((state) => state?.LoginReducer?.loading);
  const dispatch = useDispatch();

  const onSubmit = (payload, { resetForm }) => {
    dispatch(loginHandler(payload));
    // resetForm();
  };

  return (
    <>
      <Container maxWidth="sm">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Formik
            initialValues={initialValues}
            // validate={LoginSchema}
            onSubmit={onSubmit}
            enableReinitialize
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <Grid>
                  <TextField
                    name="email"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    sx={{ m: 1, width: "50ch" }}
                    value={values?.email}
                    onChange={handleChange}
                  />
                  {errors.email && touched.email && errors.email}
                </Grid>
                <Grid>
                  <TextField
                    name="password"
                    sx={{ m: 1, width: "50ch" }}
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    onChange={handleChange}
                  />
                  {errors.password && touched.password && errors.password}
                </Grid>

                <Button
                  variant="contained"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isLoading ? "Logging In" : "Login"}
                </Button>
              </form>
            )}
          </Formik>
        </Stack>
      </Container>
    </>
  );
};

export default LoginPage;
