import { createUseStyles } from "react-jss";
import MainBg from "../../assets/images/main-background.png";
import Off from "../../assets/icons/off.svg";
import On from "../../assets/icons/on.svg";

const useStyles = createUseStyles({
  profileContainer: {
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
      marginBottom: -120,
    },
  },
  profileInfoWrapper: {
    display: "flex",
    justifyContent: "center",
    margin: "92px 0px 117px 0px",
    "@media (max-width: 992px)": {
      padding: "0px 14px 0px 18px",
      margin: "47px 0px 67px 0px",
    },
  },
  profileInfo: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: 1081,
    width: "100%",
    "@media (max-width: 992px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  infoContent: {
    border: "2px solid #F0F0F0",
    borderRadius: 10,
    padding: "23px 0px 17px 18px",
    backgroundColor: "#ffffff",
    display: "flex",
    alignItems: "center",
    maxWidth: 313,
    width: "100%",
    "@media (max-width: 992px)": {
      marginBottom: 47,
      "&:last-child": {
        marginBottom: 0,
      },
    },
  },
  infoTitle: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: 400,
    lineHeight: "25px",
    textTransform: "uppercase",
    color: "#3B668D",
  },
  infoDescription: {
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: 400,
    lineHeight: "30px",
    textTransform: "uppercase",
    color: "#F36DD4",
  },
  profileForm: {
    maxWidth: 992,
    width: "100%",
    display: "block",
    margin: "0px auto",
    paddingTop: 30,
    paddingBottom: 452,
    "@media (max-width: 992px)": {
      padding: "0px 14px 0px 18px",
    },
    "& .ui.input, & .ui.input>input": {
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
    },
    "& .ui.label": {
      "@media (max-width: 992px)": {
        display: "none",
      },
    },
  },
  emailLabel: {
    "&.ui.label": {
      fontFamily: "Comfortaa",
      fontSize: 24,
      fontWeight: 700,
      lineHeight: "27px",
      color: "#3B3F8D",
      marginRight: 40,
      padding: 0,
      background: "unset",
    },
  },
  emailTip: {
    fontFamily: "Comfortaa",
    fontSize: 16,
    fontWeight: 700,
    lineHeight: "18px",
    color: "#BB6DF3",
    margin: "31px 0px 45px 200px",
    display: "flex",
    justifyContent: "center",
    "@media (max-width: 992px)": {
      marginLeft: 22,
    },
  },
  btnWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 65,
  },
  checkbox: {
    "&.ui.checkbox label": {
      fontFamily: "Comfortaa",
      fontSize: 18,
      fontWeight: 700,
      lineHeight: "20px",
      color: "#ADADAD",
      marginBottom: 28,
    },
    "&.ui.checkbox input:focus~.box:before, &.ui.checkbox input:focus~label:before, &.ui.checkbox .box:before, &.ui.checkbox label:before, &.ui.checkbox input:checked~.box:before, &.ui.checkbox input:checked~label:before":
      {
        content: `url(${Off})`,
        width: 25,
        height: 25,
        top: -3,
        left: 1,
      },
    "&.ui.checkbox input:checked~.box:after, &.ui.checkbox input:checked~label:after":
      {
        content: `url(${On})`,
        width: 25,
        height: 25,
        top: -3,
        left: 1,
      },
  },
  btnWidth: {
    maxWidth: 350,
    width: "100%",
    "@media (max-width: 640px)": {
      marginTop: 52,
    },
  },
  emailWrapper: {
    display: "flex",
    position: "relative",
  },
  verifyBtn: {
    position: "absolute",
    top: 10,
    right: 11,
    maxWidth: 251,
    width: "100%",
    "@media (max-width: 540px)": {
      maxWidth: 116,
    },
  },
});

export default useStyles;
