import React from "react";
import { Formik, Field, Form } from "formik";
import useStyles from "./styles";
import MainButton from "../../common/button/MainButton";
import FormControl from "../../common/form-control/FormControl";
import { schemaSignIn } from "./schema";
import StatsPanel from "../../components/stats-panel/StatsPanel";

const SignIn = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.loginContainer}>
        <div className="page-title">Login</div>
        <div className="page-subtitle">Online storage</div>
        <div className={classes.loginForm}>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={() => {}}
            validationSchema={schemaSignIn}
          >
            <Form>
              <Field name="email">
                {({ field, meta }) => {
                  return (
                    <FormControl
                      label="Email"
                      inputType="email"
                      placeholder="mail@example.com"
                      touched={meta.touched}
                      error={meta.error}
                      {...field}
                    />
                  );
                }}
              </Field>

              <Field name="password">
                {({ field, meta }) => {
                  return (
                    <FormControl
                      label="Password"
                      inputType="password"
                      placeholder="***********"
                      touched={meta.touched}
                      error={meta.error}
                      {...field}
                    />
                  );
                }}
              </Field>

              <div className={classes.btnWrapper}>
                <MainButton
                  wrapperBtn={classes.btnWidth}
                  type="submit"
                  titleBtn="Login"
                />
                <div className={classes.tip}>Forget Password</div>
              </div>
            </Form>
          </Formik>
        </div>
        <StatsPanel />
      </div>
    </div>
  );
};

export default SignIn;
