import React from "react";
import GoogleMapReact from "google-map-react";
import { Formik, Field, Form } from "formik";
import { TextArea } from "semantic-ui-react";
import useStyles from "./styles";
import MainButton from "../../common/button/MainButton";
import FormControl from "../../common/form-control/FormControl";
import { schemaContacts } from "./schema";
import StatsPanel from "../../components/stats-panel/StatsPanel";

const Contact = () => {
  const classes = useStyles();

  return (
    <div>
      <div className="page-title">Contact</div>
      <div className="page-subtitle">Online storage</div>
      <div className={classes.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg",
          }}
          defaultCenter={{
            lat: 59.95,
            lng: 30.33,
          }}
          defaultZoom={11}
        />
      </div>
      <div className={classes.contactContent}>
        <div className={classes.title}>Drop us a line</div>
        <div className={classes.subtitle}>Lorem ipsum dolor sit amet.</div>
        <div className={classes.contactForm}>
          <Formik
            initialValues={{ email: "", name: "", message: "" }}
            onSubmit={() => {}}
            validationSchema={schemaContacts}
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
              <Field name="name">
                {({ field, meta }) => {
                  return (
                    <FormControl
                      label="Name"
                      placeholder="John Doe"
                      touched={meta.touched}
                      error={meta.error}
                      {...field}
                    />
                  );
                }}
              </Field>
              <Field name="message">
                {({ field }) => {
                  return (
                    <TextArea
                      placeholder="Message"
                      {...field}
                      className={classes.textarea}
                    />
                  );
                }}
              </Field>
              <div className={classes.btnWrapper}>
                <div className={classes.tip}>
                  We do not share your personal data.
                </div>
                <MainButton
                  wrapperBtn={classes.btnWidth}
                  type="submit"
                  titleBtn="Subscribe"
                />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <div className={classes.stats}>
        <StatsPanel />
      </div>
    </div>
  );
};

export default Contact;
