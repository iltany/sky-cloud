import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();

  const featuredLinks = [
    { link: "/pricing", titleLink: "Pricing" },
    { link: "/contacts", titleLink: "Contact" },
    { link: "/", titleLink: "DMCA" },
    { link: "/", titleLink: "Refund Policy" },
    { link: "/", titleLink: "Privacy Policy" },
    { link: "/", titleLink: "Terms of Service" },
  ];
  return (
    <footer className={classes.footerContainer}>
      <div className={classes.container}>
        <div className={classes.footerContent}>
          <div className={classes.aboutWrapper}>
            <div className={classes.footerTitle}>About us</div>
            <div className={classes.footerDescription}>
              When using the SKYBOX Services You may transmit, store and or
              share certain data, information, files, etc. (altogether “Service
              Data”). For the avoidance of doubt, You retain full ownership of
              Your Service Data. SKYBOX doea that You or any other uss while
              using the Service. SKYBOX agrees that these Terms do not grant
            </div>
          </div>
          <div className={classes.featuredWrapper}>
            <div className={classes.footerTitle}>Featured links</div>
            <div className={classes.footerDescription}>
              {featuredLinks.map((item) => {
                return (
                  <Link to={item.link} className={classes.footerLink}>
                    {item.titleLink}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className={classes.contactWrapper}>
            <div className={classes.footerTitle}>Contact us</div>
            <div className={classes.footerDescription}>
              <span> Our office:</span>
              <span>Digitalgoals LTD</span>
              <span>Lapathou, 6, Strovolos 2027,</span>
              <span>Lefkosia, Cyprus</span>
              <span>
                Phone: <a href="tel:+37 06 225 29 36}"> +37 06 225 29 36</a>
              </span>
              <span>
                Email:
                <a href="mailto:mail@example.com"> mail@example.com</a>
              </span>
            </div>
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
