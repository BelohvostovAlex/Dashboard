import React from "react";

import { Formik } from "formik";
import * as yup from "yup";
import { Box, TextField, Button, useMediaQuery } from "@mui/material";
import { makeStyles } from "./styles";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

const phoneRegExp =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const userSchema = yup.object().shape({
  firstName: yup.string().min(2).required("required"),
  lastName: yup.string().min(2).required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});

export const MyForm = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const styles = makeStyles({ isNonMobile: isNonMobile });

  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={userSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box sx={styles.formWrapper}>
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="First Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.firstName}
              name="firstName"
              error={!!touched.firstName && !!errors.firstName}
              helperText={touched.firstName && errors.firstName}
              sx={styles.textFieldSpan2}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Last Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.lastName}
              name="lastName"
              error={!!touched.lastName && !!errors.lastName}
              helperText={touched.lastName && errors.lastName}
              sx={styles.textFieldSpan2}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={!!touched.email && !!errors.email}
              helperText={touched.email && errors.email}
              sx={styles.textFieldSpan4}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Contact Number"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.contact}
              name="contact"
              error={!!touched.contact && !!errors.contact}
              helperText={touched.contact && errors.contact}
              sx={styles.textFieldSpan4}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Address 1"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.address1}
              name="address1"
              error={!!touched.address1 && !!errors.address1}
              helperText={touched.address1 && errors.address1}
              sx={styles.textFieldSpan4}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Address 2"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.address2}
              name="address2"
              error={!!touched.address2 && !!errors.address2}
              helperText={touched.address2 && errors.address2}
              sx={styles.textFieldSpan4}
            />
          </Box>
          <Box sx={styles.buttonWrapper}>
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              disabled={
                errors.address1 ||
                errors.address2 ||
                errors.contact ||
                errors.email ||
                errors.firstName ||
                errors.lastName
              }
            >
              Create New User
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};
