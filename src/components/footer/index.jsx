import React from "react";
import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.container}>
      <h1>Footer</h1>
      <div className={classes.copyright}>
        Copyright © 2016 - 2021 - SkyBox - Online File Storage
      </div>
    </footer>
  );
};
export default Footer;
