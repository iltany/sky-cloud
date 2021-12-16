import React from "react";
import { Formik, Field, Form } from "formik";
import { Checkbox } from "semantic-ui-react";
import { profileInfo } from "../../constants";
import useStyles from "./styles";
import { schemaProfile } from "./schema";
import FormControl from "../../common/form-control/FormControl";
import MainButton from "../../common/button/MainButton";

const Profile = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.profileContainer}>
        <div className="page-title">profile</div>
        <div className="page-subtitle">Online storage</div>
        <div className={classes.profileInfoWrapper}>
          <div className={classes.profileInfo}>
            {profileInfo.map(({ Icon, ...item }) => {
              return (
                <div key={item.description} className={classes.infoContent}>
                  <Icon />
                  <div>
                    <div className={classes.infoTitle}>{item.title}</div>
                    <div className={classes.infoDescription}>
                      {item.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={classes.profileForm}>
          <Formik
            initialValues={{
              email: "",
              old_password: "",
              password: "",
              confirm_password: "",
              checkbox: false,
            }}
            onSubmit={() => {}}
            validationSchema={schemaProfile}
          >
            <Form>
              <div className={classes.emailWrapper}>
                <Field name="email">
                  {({ field, meta }) => {
                    return (
                      <FormControl
                        label="Required fields
                      e-mail *"
                        labelClass={classes.emailLabel}
                        inputType="email"
                        placeholder="mail@example.com"
                        touched={meta.touched}
                        error={meta.error}
                        {...field}
                      />
                    );
                  }}
                </Field>
                <MainButton
                  wrapperBtn={classes.verifyBtn}
                  type="button"
                  titleBtn="Verify"
                />
              </div>
              <div className={classes.emailTip}>
                Further instructions will be sent to your registered email.
              </div>
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
              <Field name="old_password">
                {({ field, meta }) => {
                  return (
                    <FormControl
                      label="New Password"
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
                      label="Re New Password"
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
                <Field name="check">
                  {({ field }) => {
                    return (
                      <Checkbox
                        label={
                          <label>
                            User Direct Links <br /> Only for Premium users
                          </label>
                        }
                        className={classes.checkbox}
                        {...field}
                      />
                    );
                  }}
                </Field>
                <MainButton
                  wrapperBtn={classes.btnWidth}
                  type="submit"
                  titleBtn="Save"
                />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Profile;
