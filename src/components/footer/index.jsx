import React from "react";
import { Link } from "react-router-dom";
import { featuredLinks } from "../../constants";
import FooterContent from "./FooterContent";
import useStyles from "./styles";

const phone = "+37 06 225 29 36";
const mail = "mail@example.com";

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footerContainer}>
      <div className={classes.container}>
        <div className={classes.footerContent}>
          <div className={classes.aboutWrapper}>
            <FooterContent footerTitle="About us">
              When using the SKYBOX Services You may transmit, store and or
              share certain data, information, files, etc. (altogether “Service
              Data”). For the avoidance of doubt, You retain full ownership of
              Your Service Data. SKYBOX doea that You or any other uss while
              using the Service. SKYBOX agrees that these Terms do not grant
            </FooterContent>
          </div>
          <div className={classes.featuredWrapper}>
            <FooterContent footerTitle="Featured links">
              {featuredLinks.map((item) => {
                return (
                  <Link
                    key={item.titleLink}
                    to={item.link}
                    className={classes.footerLink}
                  >
                    {item.titleLink}
                  </Link>
                );
              })}
            </FooterContent>
          </div>
          <div className={classes.contactWrapper}>
            <FooterContent footerTitle="Contact us">
              <span> Our office:</span>
              <span>Digitalgoals LTD</span>
              <span>Lapathou, 6, Strovolos 2027,</span>
              <span>Lefkosia, Cyprus</span>
              <span>
                Phone: <a href={`tel: ${phone}`}> {phone}</a>
              </span>
              <span>
                Email:
                <a href={`mailto:${mail}`}>{mail}</a>
              </span>
            </FooterContent>
          </div>
        </div>
        <div className={classes.copyright}>
          Copyright © 2016 - 2021 - SkyBox - Online File Storage
        </div>
      </div>
    </footer>
  );
};
export default Footer;
