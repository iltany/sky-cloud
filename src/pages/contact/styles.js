import { createUseStyles } from "react-jss";
import ContactBg from "../../assets/images/contact-background.png";

const useStyles = createUseStyles({
  mapContainer: {
    width: "100%",
    height: 838,
    margin: "88px 0px 25px 0px",
    "@media (max-width: 992px)": {
      margin: "54px 0px 25px 0px",
    },
  },
  contactContent: {
    backgroundImage: `url(${ContactBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: 973,
    "@media (max-width: 992px)": {
      backgroundImage: "unset",
      height: "unset",
    },
  },
  title: {
    fontFamily: "Comfortaa",
    fontSize: 72,
    fontWeight: 700,
    lineHeight: "80px",
    padding: "170px 0px 29px 0px",
    color: "#3B668D",
    textAlign: "center",
    "@media (max-width: 992px)": {
      fontSize: 48,
      lineHeight: "54px",
      padding: "84px 0px 16px 0px",
    },
  },
  subtitle: {
    fontFamily: "Comfortaa",
    fontSize: 30,
    fontWeight: 400,
    lineHeight: "33px",
    color: "#79788F",
    marginBottom: 79,
    textAlign: "center",
    "@media (max-width: 992px)": {
      fontSize: 24,
      marginBottom: 47,
    },
  },
  contactForm: {
    display: "block",
    margin: "0px auto",
    maxWidth: 749,
    width: "100%",
    "@media (max-width: 992px)": {
      padding: "0px 15px",
      "& .ui.label": {
        display: "none",
      },
      "& .ui.input>input": {
        maxWidth: "unset !important",
        minWidth: "unset !important",
      },
    },
  },
  tip: {
    fontFamily: "Comfortaa",
    fontSize: 18,
    fontWeight: 700,
    lineHeight: "20px",
    color: "#ADADAD",
    "@media (max-width: 992px)": {
      marginTop: 30,
      marginBottom: 36,
    },
  },
  btnWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width: 992px)": {
      flexDirection: "column",
    },
  },
  btnWidth: {
    maxWidth: 251,
    width: "100%",
  },
  textarea: {
    resize: "none",
    "&, &::placeholder": {
      width: "100%",
      height: 273,
      borderRadius: 50,
      backgroundColor: "#F3F3F3",
      fontFamily: "Comfortaa",
      fontSize: 24,
      fontWeight: 700,
      lineHeight: "27px",
      border: "none",
      padding: "36px 47px",
      marginBottom: 20,
      color: "#ADADAD",
    },
    "&::placeholder": {
      padding: 0,
      height: "unset",
    },
    "&:focus-visible": {
      outline: "none",
    },
  },
  stats: {
    marginTop: 420,
    "@media (max-width: 992px)": {
      marginTop: 157,
    },
  },
});

export default useStyles;
