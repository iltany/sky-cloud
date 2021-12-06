import React from "react";
import { features } from "../../constants";
import useStyles from "./styles";

const FeaturesSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.featuresdWrapper}>
      <div className={classes.container}>
        <div className={classes.featuresContainer}>
          {features.map(({ Icon, ...item }) => {
            return (
              <div key={item.title} className={classes.dFlex}>
                <div className={classes.featuresIcon}>
                  <Icon />
                </div>
                <div>
                  <div className={classes.featuresTitle}>{item.title}</div>
                  <div className={classes.featuresDescription}>
                    {item.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
