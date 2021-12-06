import React from "react";
import { stats } from "../../constants";
import useStyles from "./styles";

const StatsPanel = () => {
  const classes = useStyles();
  return (
    <div className={classes.statsWrapper}>
      <div className={classes.container}>
        <div className={classes.statsContainer}>
          {stats.map(({ Icon, ...item }) => {
            return (
              <div key={Math.random()} className={classes.statsContent}>
                <div className={classes.statsIcon}>
                  <Icon />
                </div>
                <div>
                  <div className={classes.statsCount}>{item.count}</div>
                  <div className={classes.statsDescription}>
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

export default StatsPanel;
