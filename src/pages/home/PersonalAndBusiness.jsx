import React from "react";
import { Button } from "semantic-ui-react";
import useStyles from "./styles";

const PersonalAndBusiness = () => {
  const classes = useStyles();
  return (
    <div className={classes.backgroundWrapper}>
      <div className={classes.container}>
        <div className={classes.homeInfo}>
          <div className={classes.homeTitle}>Personal and Business</div>
          <div className={classes.homeSubtitle}>Online storage</div>
          <div className={classes.storeBlock}>
            STORE AND MANAGE ALL YOUR Files!
          </div>
          <div className={classes.uploadBlock}>
            Upload multiple files at once and keep them forever on this site. If
            you&apos;re using FireFox or Chrome, you can simply drag & drop your
            files to begin uploading
          </div>
          <Button className={classes.homeBtn}>Try SkyBox Now</Button>
        </div>
      </div>
    </div>
  );
};

export default PersonalAndBusiness;
