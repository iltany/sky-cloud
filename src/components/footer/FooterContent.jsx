import React from "react";
import useStyles from "./styles";

const FooterContent = ({ footerTitle, children }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.footerTitle}>{footerTitle}</div>
      <div className={classes.footerDescription}>{children}</div>
    </>
  );
};
export default FooterContent;
