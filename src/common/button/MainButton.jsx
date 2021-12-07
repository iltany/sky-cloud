import React from "react";
import { Button } from "semantic-ui-react";
import useStyles from "./styles";

const MainButton = ({ wrapperBtn, type, titleBtn }) => {
  const classes = useStyles();
  return (
    <div className={wrapperBtn}>
      <Button type={type} className={classes.mainBtn}>
        {titleBtn}
      </Button>
    </div>
  );
};
export default MainButton;
