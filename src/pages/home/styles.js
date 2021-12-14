import { createUseStyles } from "react-jss";
import bgImg from "../../assets/images/top-home-background.png";
import smallBgImg from "../../assets/images/small-top-home-background.png";
import homeBtn from "../../assets/images/home-button.png";
import featuresImg from "../../assets/images/features-section.png";
import smallFeaturesImg from "../../assets/images/small-features-section.png";

const useStyles = createUseStyles({
  container: {
    maxWidth: 1213,
    width: "100%",
    display: "block",
    margin: "0px auto",
    position: "relative",
    "@media (max-width: 1260px)": {
      padding: "0px 22px",
    },
  },
  backgroundWrapper: {
    backgroundImage: `url(${bgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    paddingTop: 292,
    "@media (min-width: 1920px)": {
      minHeight: 1056,
    },
    "@media (max-width: 999.9px)": {
      backgroundImage: `url(${smallBgImg})`,
    },
    "@media (max-width:425px)": {
      paddingTop: 566,
      backgroundSize: "contain",
    },
  },
  homeInfo: {
    maxWidth: 525,
    width: "100%",
  },
  homeTitle: {
    fontFamily: "Roboto",
    fontSize: 72,
    fontWeight: 900,
    lineHeight: "70px",
    color: "#3B668D",
    marginBottom: 9,
    textTransform: "uppercase",
    "@media (max-width:425px)": {
      textAlign: "center",
      marginLeft: -22,
      marginRight: -22,
    },
    "@media (max-width:360px)": {
      fontSize: 50,
    },
  },
  homeSubtitle: {
    fontFamily: "Montserrat",
    fontSize: 24,
    fontWeight: 400,
    lineHeight: "36px",
    letterSpacing: "0.905em",
    color: "#3B668D",
    textTransform: "uppercase",
    paddingBottom: 32,
    "@media (max-width:425px)": {
      letterSpacing: "0.35em",
      paddingBottom: 0,
      textAlign: "center",
    },
  },
  storeBlock: {
    fontFamily: "Roboto",
    fontSize: 26,
    fontWeight: 500,
    lineHeight: "41px",
    color: "#3B668D",
    paddingTop: 45,
    borderTop: "2px solid #3B668D",
    maxWidth: 506,
    "@media (max-width:425px)": {
      borderTop: "none",
      paddingTop: 30,
    },
  },
  uploadBlock: {
    fontFamily: "Montserrat",
    fontSize: 18,
    fontWeight: 400,
    lineHeight: "28px",
    letterSpacing: "0.075em",
    color: "#2B4964",
    maxWidth: 496,
    width: "100%",
    marginBottom: 27,
  },
  homeBtn: {
    "&.ui.button": {
      backgroundImage: `url(${homeBtn})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundColor: "transparent",
      color: "#ffffff",
      width: 308,
      height: 79,
      fontFamily: "Comfortaa",
      fontSize: 24,
      fontWeight: 700,
      lineHeight: "27px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },

  /* FEATURES SECTION STYLES */
  featuresdWrapper: {
    backgroundImage: `url(${featuresImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    width: "100%",
    minHeight: 1165,
    "@media (max-width: 999.9px)": {
      backgroundImage: `url(${smallFeaturesImg})`,
      backgroundSize: "cover",
      marginTop: 46,
      minHeight: 1220,
    },
  },
  featuresContainer: {
    maxWidth: 580,
    position: "absolute",
    right: 0,
    top: 150,
    "@media (max-width: 999.9px)": {
      left: 25,
      top: 80,
    },
  },
  featuresTitle: {
    fontFamily: "Roboto",
    fontSize: 36,
    fontWeight: 400,
    lineHeight: "60px",
    color: "#3B668D",
    textTransform: "uppercase",
    "@media (max-width: 999.9px)": {
      fontSize: 28,
      color: "#000000",
    },
  },
  featuresDescription: {
    fontFamily: "Montserrat",
    fontSize: 18,
    fontWeight: 400,
    lineHeight: "27px",
    marginBottom: 40,
    color: "#2B4964",
    "@media (max-width: 999.9px)": {
      color: "#ffffff",
      maxWidth: 361,
      marginRight: 20,
    },
  },
  dFlex: {
    display: "flex",
  },
  featuresIcon: {
    width: 93,
    height: 91,
    marginRight: 25,
    "@media (max-width: 999.9px)": {
      display: "none",
    },
  },
  /* END OF FEATURES SECTION STYLES */
});

export default useStyles;
