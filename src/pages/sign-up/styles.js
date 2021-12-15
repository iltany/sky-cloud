import { createUseStyles } from "react-jss";
import MainBg from "../../assets/images/main-background.png";
import Off from "../../assets/icons/off.svg";
import On from "../../assets/icons/on.svg";

const useStyles = createUseStyles({
  registerContainer: {
    backgroundImage: `url(${MainBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    minHeight: 980,
    height: "100%",
    marginTop: -75,
    paddingTop: 75,
    "@media (max-width: 992px)": {
      backgroundImage: "unset",
      minHeight: "unset",
    },
  },
  registerForm: {
    maxWidth: 850,
    width: "100%",
    display: "block",
    margin: "0px auto",
    paddingTop: 30,
    paddingBottom: 318,
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
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 73,
    "@media (max-width: 640px)": {
      flexDirection: "column",
    },
  },
  checkbox: {
    "&.ui.checkbox label": {
      fontFamily: "Comfortaa",
      fontSize: 18,
      fontWeight: 700,
      lineHeight: "20px",
      color: "#ADADAD",
      marginRight: 54,
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
  capchaContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 55,
    "@media (max-width: 640px)": {
      justifyContent: "center",
    },
    "& .style_captchaContainer__LdFYB": {
      "@media (max-width: 640px)": {
        flexDirection: "row-reverse",
      },
    },
    "& canvas": {
      width: 260,
      height: 100,
      "@media (max-width: 640px)": {
        marginLeft: 38,
      },
      "@media (max-width: 420px)": {
        width: 190,
      },
    },
    "& img": {
      width: 40,
      height: 42,
    },
  },
  dFlex: {
    display: "flex",
    "@media (max-width: 640px)": {
      flexDirection: "column",
    },
  },
  label: {
    "&.ui.label": {
      fontFamily: "Comfortaa",
      fontSize: 24,
      fontWeight: 700,
      lineHeight: "27px",
      color: "#3B3F8D",
      marginRight: 45,
      padding: 0,
      background: "unset",
      whiteSpace: "nowrap",
      "@media (max-width: 992px)": {
        display: "none",
      },
    },
  },
  inputContainer: {
    width: "100%",
    marginLeft: 31,
    "@media (max-width: 640px)": {
      marginTop: 46,
    },
    "&.ui.input>input, &.ui.input>input::placeholder": {
      backgroundColor: "#F3F3F3",
      borderRadius: 61,
      maxWidth: 286,
      width: "100%",
      padding: "36px 20px 37px 58px",
      fontFamily: "Comfortaa",
      fontSize: 24,
      fontWeight: 700,
      lineHeight: "27px",
      color: "#ADADAD",
      border: "none",
    },
    " &.ui.input>input::placeholder": {
      padding: 0,
      borderRadius: 0,
    },
    "&.ui.error": {
      borderRadius: 61,
      border: "1px solid red",
    },
  },
});

export default useStyles;
