import React, { useState } from "react";
import { Form, Formik, FormikProps } from "formik";
import {
  Grid,
  TextField,
  Button,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: "450px",
      display: "block",
      margin: "0 auto",
      height: "520px",
      border: "1px solid gray",
      borderRadius: "10px",
    },
    textField: {
      "& > *": {
        width: "100%",
      },
    },
    submitButton: {
      marginTop: "24px",
    },
    title: { textAlign: "center" },
    successMessage: { color: "green" },
    errorMessage: { color: "red" },
  })
);

interface ISignUpForm {
  fullName: string;
  password: string;
  confirmPassword: string;
  email: string;
}

interface IFormStatus {
  message: string;
  type: string;
}

interface IFormStatusProps {
  [key: string]: IFormStatus;
}

const formStatusProps: IFormStatusProps = {
  success: {
    message: "Signed up successfully.",
    type: "success",
  },
  duplicate: {
    message: "Email-id already exist. Please use different email-id.",
    type: "error",
  },
  error: {
    message: "Something went wrong. Please try again.",
    type: "error",
  },
};
const LoginPageFormik: React.FunctionComponent = () => {
  const classes = useStyles();
  const [displayFormStatus, setDisplayFormStatus] = useState(false);
  const [formStatus, setFormStatus] = useState<IFormStatus>({
    message: "",
    type: "",
  });
  const history = useHistory();
  const changePage = () => {
    history.replace("/register");
  };

  const createNewUser = async (data: ISignUpForm, resetForm: Function) => {
    try {
      // API call integration will be here. Handle success / error response accordingly.
      if (data) {
        setFormStatus(formStatusProps.success);
        resetForm({});
      }
    } catch (error: any) {
      const response = error.response;
      if (response.data === "user already exist" && response.status === 400) {
        setFormStatus(formStatusProps.duplicate);
      } else {
        setFormStatus(formStatusProps.error);
      }
    } finally {
      setDisplayFormStatus(true);
    }
  };

  return (
    <div className={classes.root}>
      <Formik
        initialValues={{
          fullName: "",
          password: "",
          confirmPassword: "",
          email: "",
        }}
        onSubmit={(values: ISignUpForm, actions) => {
          createNewUser(values, actions.resetForm);
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 500);
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Za-z]{6,}$/)
            .required(
              "Please valid email. One uppercase, one lowercase, one special character and no spaces"
            ),
          fullName: Yup.string().required("Please enter full name"),
          password: Yup.string()
            .matches(/^[A-Z0-9@_]{6,20}$/)
            .required("Please valid password. "),
          confirmPassword: Yup.string()
            .required("Required")
            .test("password-match", "Password musth match", function (value) {
              return this.parent.password === value;
            }),
        })}
      >
        {(props: FormikProps<ISignUpForm>) => {
          const {
            values,
            touched,
            errors,
            handleBlur,
            handleChange,
            isSubmitting,
          } = props;
          return (
            <Form>
              <h1 className={classes.title}>Log In</h1>
              <Grid container justify="space-around" direction="row">
                <Grid
                  item
                  lg={10}
                  md={10}
                  sm={10}
                  xs={10}
                  className={classes.textField}
                >
                  <TextField
                    name="email"
                    id="email"
                    label="Email-id"
                    value={values.email}
                    type="email"
                    helperText={
                      errors.email && touched.email
                        ? errors.email
                        : "Enter email-id"
                    }
                    error={errors.email && touched.email ? true : false}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid
                  item
                  lg={10}
                  md={10}
                  sm={10}
                  xs={10}
                  className={classes.textField}
                >
                  <TextField
                    name="password"
                    id="password"
                    label="Password"
                    value={values.password}
                    type="password"
                    helperText={
                      errors.password && touched.password
                        ? "Please valid password. One uppercase, one lowercase, one special character and no spaces"
                        : "One uppercase, one lowercase, one special character and no spaces"
                    }
                    error={errors.password && touched.password ? true : false}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid
                  item
                  lg={10}
                  md={10}
                  sm={10}
                  xs={10}
                  className={classes.submitButton}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    disabled={isSubmitting}
                  >
                    Submit
                  </Button>
                  {displayFormStatus && (
                    <div className="formStatus">
                      {formStatus.type === "error" ? (
                        <p className={classes.errorMessage}>
                          {formStatus.message}
                        </p>
                      ) : formStatus.type === "success" ? (
                        <p className={classes.successMessage}>
                          {formStatus.message}
                        </p>
                      ) : null}
                    </div>
                  )}
                </Grid>
                <p onClick={changePage} style={{ cursor: "pointer" }}>
                  <span>Do you already have an account ? Let sign up ! </span>
                </p>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
export default LoginPageFormik;
