import React from "react";
import { Formik, Field, Form } from "formik";
import { Checkbox, Input, Label } from "semantic-ui-react";
import ClientCaptcha from "react-client-captcha";
import useStyles from "./styles";
import MainButton from "../../common/button/MainButton";
import FormControl from "../../common/form-control/FormControl";
import { schemaSignUp } from "./schema";
import StatsPanel from "../../components/stats-panel/StatsPanel";
import refreshIcon from "../../assets/icons/refresh.svg";

const SignUp = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.registerContainer}>
        <div className="page-title">Register</div>
        <div className="page-subtitle">Online storage</div>
        <div className={classes.registerForm}>
          <Formik
            initialValues={{
              email: "",
              re_email: "",
              password: "",
              confirm_password: "",
              agree: false,
              capcha: "",
            }}
            onSubmit={() => {}}
            validationSchema={schemaSignUp}
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
              <Field name="re_email">
                {({ field, meta }) => {
                  return (
                    <FormControl
                      label="Re - Email"
                      inputType="email"
                      placeholder="maomail@example.com"
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
              <Field name="confirm_password">
                {({ field, meta }) => {
                  return (
                    <FormControl
                      label="Re - Password"
                      inputType="password"
                      placeholder="***********"
                      touched={meta.touched}
                      error={meta.error}
                      {...field}
                    />
                  );
                }}
              </Field>

              <div className={classes.capchaContainer}>
                <Label className={classes.label}>Capcha</Label>
                <div className={classes.dFlex}>
                  <ClientCaptcha
                    captchaCode={(code) => console.log(code)}
                    retryIcon={refreshIcon}
                  />
                  <Field name="capcha">
                    {({ field, meta }) => {
                      return (
                        <Input
                          placeholder="enter capcha"
                          className={classes.inputContainer}
                          type="text"
                          name={field.name}
                          value={field.value}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          error={Boolean(meta.touched && meta.error)}
                        />
                      );
                    }}
                  </Field>
                </div>
              </div>

              <div className={classes.btnWrapper}>
                <Field name="agree">
                  {({ field }) => {
                    return (
                      <Checkbox
                        label="I agree with terms"
                        className={classes.checkbox}
                        {...field}
                      />
                    );
                  }}
                </Field>
                <MainButton
                  wrapperBtn={classes.btnWidth}
                  type="submit"
                  titleBtn="Register"
                />
              </div>
            </Form>
          </Formik>
        </div>
        <StatsPanel />
      </div>
    </div>
  );
};
export default SignUp;
