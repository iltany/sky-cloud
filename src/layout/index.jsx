import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import useStyles from "./styles";

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <main className={classes.mainContainer}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
