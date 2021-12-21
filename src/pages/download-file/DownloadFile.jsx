import React from "react";
import { Select } from "semantic-ui-react";
import useBreakpoint from "use-breakpoint";
import StatsPanel from "../../components/stats-panel/StatsPanel";
import PriceSection from "../../components/tariff-plans/PriceSection";
import { BREAKPOINTS, downloadType, fileFeatures } from "../../constants";
import { PAGE_SIZE } from "../my-files/MOCK";
import useStyles from "./styles";
import ImageFillIcon from "../../assets/icons/ImageFill";

const DownloadFile = () => {
  const classes = useStyles();
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  const isMobile = ["smallMobile", "mobile"].includes(breakpoint);

  return (
    <div>
      <div className="page-title">Download file</div>
      <div className="page-subtitle">Online storage</div>
      <div className={classes.downloadContainer}>
        <div className={classes.downloadContent}>
          <div className={classes.downloadHeader}>
            <div className={classes.dFlex}>
              <Select
                placeholder="Type"
                options={PAGE_SIZE}
                className={classes.selectNoWrapper}
              />
              <Select
                placeholder="Name"
                options={PAGE_SIZE}
                className={classes.selectNoWrapper}
              />
            </div>
            <div className={classes.sizeText}>size</div>
          </div>
          <div className={classes.fileInfo}>
            <div className={classes.dFlex}>
              <ImageFillIcon />
              <div className={classes.marginTitle}>Lorem-ipsum_sitamet.jpg</div>
            </div>
            <div className={classes.marginSize}>12.44 Mb</div>
          </div>
          <div className={classes.fileFeaturesContainer}>
            {fileFeatures.map(({ Icon, ...item }) => {
              return (
                <div
                  key={item.description}
                  className={classes.fileFeaturesContent}
                >
                  <Icon />
                  <div>{item.description}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={classes.downloadTypeContainer}>
          {downloadType.map(({ Smiley, ...item }) => {
            return (
              <div key={item.id} className={classes.downloadTypeContent}>
                <div className={classes.downloadTypeTitle}>{item.title}</div>
                <div className={classes.downloadTypeSubtitle}>
                  {item.subtitle} <span>{item.time}</span>
                </div>

                {item.description.map((desc) => {
                  return (
                    <div className={classes.downloadTypeDesc}>
                      <Smiley />
                      <div>{desc}</div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="page-title">{isMobile ? "price" : "tariff plans"}</div>
      <div className="page-subtitle">Online storage</div>
      <div className={classes.priceWrapper}>
        <PriceSection />
      </div>
      <StatsPanel />
    </div>
  );
};

export default DownloadFile;
