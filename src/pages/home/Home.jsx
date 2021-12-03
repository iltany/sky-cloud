import React from "react";
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.backgroundWrapper}>
      <div className={classes.container}>Personal and Business</div>
    </div>
  );
};

export default Home;
