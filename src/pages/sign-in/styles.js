import { createUseStyles } from "react-jss";
import MainBg from "../../assets/images/main-background.png";

const useStyles = createUseStyles({
  loginContainer: {
    backgroundImage: `url(${MainBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    width: "100%",
    minHeight: 980,
    height: "100%",
    marginTop: -75,
    paddingTop: 75,
    "@media (min-width: 2570px)": {
      backgroundSize: "cover",
    },
    "@media (max-width: 992px)": {
      backgroundImage: "unset",
      minHeight: "unset",
    },
  },
  loginForm: {
    maxWidth: 793,
    width: "100%",
    display: "block",
    margin: "0px auto",
    paddingTop: 30,
    paddingBottom: 318,
    marginBottom: 405,
    "@media (max-width: 992px)": {
      padding: "0px 14px 0px 18px",
    },
    "& .ui.input, & .ui.input>input": {
      maxWidth: "630px",
      "@media (max-width: 992px)": {
        maxWidth: "unset",
        minWidth: "unset",
      },
    },
    "& .ui.input>input, & .ui.input>input::placeholder": {
      padding: "0px 20px 0px 58px",
      height: 100,
      display: "flex",
      alignItems: "center",
    },
    "& .ui.input>input::placeholder": {
      padding: 0,
      borderRadius: 0,
    },
    "& .ui.error": {
      width: "100%",
      maxWidth: 632,
    },
    "& .ui.label": {
      "@media (max-width: 992px)": {
        display: "none",
      },
    },
  },
  btnWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  btnWidth: {
    maxWidth: 350,
    width: "100%",
    margin: "38px 0px 35px 0px",
    "@media (max-width: 640px)": {
      marginTop: 52,
    },
  },
  tip: {
    fontFamily: "Comfortaa",
    fontSize: 18,
    fontWeight: 700,
    lineHeight: "20px",
    color: "#ADADAD",
  },
});

export default useStyles;
