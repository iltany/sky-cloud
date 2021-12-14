import { createUseStyles } from "react-jss";
import PriceBg from "../../assets/images/price-section-background.png";

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

  priceWrapper: {
    backgroundImage: `url(${PriceBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    width: "100%",
    minHeight: 855,
    height: "100%",
    "@media (max-width: 1440px)": {
      backgroundImage: "unset",
    },
  },
  priceMaxWidth: {
    maxWidth: 1600,
  },
  priceContainerWidth: {
    maxWidth: 1600,
    marginTop: 181,
    marginBottom: 177,
    "@media (max-width: 1440px)": {
      margin: "60px 0px 100px 0px",
    },
  },
  priceTitle: {
    fontFamily: "Roboto",
    fontSize: 72,
    fontWeight: 300,
    lineHeight: "84px",
    letterSpacing: " 0.285em",
    textTransform: "uppercase",
    color: "#3B668D",
    margin: "73px 0px 23px 0px",
    textAlign: "center",
    "@media (max-width: 540px)": {
      letterSpacing: "0.1em",
      fontSize: 55,
    },
  },
  priceDescription: {
    fontFamily: "Montserrat",
    fontSize: 30,
    fontWeight: 400,
    lineHeight: "37px",
    color: "#79788F",
    textAlign: "center",
    marginBottom: 76,
  },
  cardContainer: {
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width: 1440px)": {
      display: "block",
    },
  },
  cardContent: {
    maxWidth: 450,
    width: "100%",
    padding: "120px 71px 65px 71px",
    borderRadius: 20,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    height: "100%",
    "@media (max-width: 540px)": {
      padding: "120px 40px 65px 40px",
      maxWidth: 375,
    },
  },
  cardContentActive: {
    maxWidth: 620,
    boxShadow: "0px 13px 27px 0px #0000001A",
    paddingLeft: 156,
    paddingRight: 156,
    marginTop: -105,
  },

  cardPopular: {
    fontFamily: "Comfortaa",
    fontSize: 18,
    fontWeight: 400,
    lineHeight: "18px",
    textAlign: "center",
    color: "#40BF3D",
    marginBottom: 13,
  },
  cardDays: {
    fontFamily: "Comfortaa",
    fontSize: 48,
    fontWeight: 700,
    lineHeight: "54px",
    color: "#3B668D",
    textAlign: "center",
    marginBottom: 39,
  },
  cardPrice: {
    fontFamily: "Comfortaa",
    fontSize: 64,
    fontWeight: 400,
    lineHeight: "71px",
    textAlign: "center",
    color: "#8572FF",
    paddingBottom: 115,
    marginBottom: 77,
    borderBottom: "1px solid #D3D3D3",
  },
  cardList: {
    fontFamily: "Comfortaa",
    fontSize: 24,
    fontWeight: 400,
    lineHeight: "24px",
    color: "#567796",
    marginBottom: 40,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width: 540px)": {
      lineHeight: "8,6px",
      fontSize: 20,
      "& svg ": {
        width: 13,
        height: 12,
      },
    },
  },
  btnWrapper: {
    marginTop: 108,
    marginBottom: 47,
  },
  helpBlock: {
    fontFamily: "Comfortaa",
    fontSize: 18,
    fontWeight: 400,
    lineHeight: "18px",
    color: "#567796",
    textAlign: "center",
  },
  h100: {
    height: "100%",
  },
});

export default useStyles;
