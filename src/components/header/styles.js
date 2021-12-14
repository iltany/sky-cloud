import { createUseStyles } from "react-jss";
import headerBg from "../../assets/images/header-background.png";
import smallHeaderBg from "../../assets/images/small-header-background.png";

const useStyles = createUseStyles({
  container: {
    maxWidth: 1213,
    width: "100%",
    display: "block",
    margin: "0px auto",
    "@media (max-width: 1260px)": {
      padding: "0px 22px",
    },
  },
  headerContainer: {
    backgroundImage: `url(${headerBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: 337,
    "@media (max-width: 420px)": {
      backgroundImage: `url(${smallHeaderBg})`,
      height: 239,
    },
  },
  navigationMenu: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: 63,
    marginBottom: -103,
    color: "#ffffff",
    "@media (max-width: 1260px)": {
      paddingTop: 25,
    },
    "@media (max-width: 999.9px)": {
      alignItems: "center",
    },
  },
  logo: {
    "& a": {
      textTransform: "uppercase",
      fontFamily: "Comfortaa",
      fontSize: 36,
      fontWeight: 700,
      lineHeight: "40px",
      color: "#ffffff",
    },
  },
  alignCenter: {
    display: "flex",
    alignItems: "center",
    "@media (max-width: 999.9px)": {
      display: "none",
    },
  },
  navigationLink: {
    fontFamily: "Comfortaa",
    fontSize: 20,
    fontWeight: 700,
    lineHeight: "22px",
    marginRight: 69,
    textTransform: "capitalize",
    color: "#ffffff",
    "@media (max-width: 1260px)": {
      marginRight: 50,
    },
  },
  btnWrapper: {
    marginLeft: 47,
    "@media (max-width: 1260px)": {
      marginLeft: 25,
    },
  },
  btnTransparent: {
    "&.ui.button": {
      width: 132,
      fontFamily: "Poppins",
      fontSize: 13,
      fontWeight: 500,
      lineHeight: "16px",
      backgroundColor: "transparent",
      textTransform: "uppercase",
      color: "#ffffff",
      "&:hover": {
        color: "#3B668D",
      },
    },
  },
  btnSignUp: {
    "&.ui.button": {
      width: 132,
      fontFamily: "Poppins",
      fontSize: 13,
      fontWeight: 500,
      lineHeight: "16px",
      textTransform: "uppercase",
      letterSpacing: "1.25px",
      backgroundColor: "#ffffff",
      color: "#BB6DF3",
      border: " 1px solid #0000001F",
      borderRadius: 30,
      "&:hover": {
        background: "linear-gradient(90deg, #43A1D6 0%, #907EFF 100%)",
        color: "#ffffff",
      },
    },
  },
  burgerWrapper: {
    "&.ui.button": {
      backgroundColor: "transparent",
      padding: 0,
      margin: 0,
      "@media (min-width: 1000px)": {
        display: "none",
      },
    },
  },
  sidebarWrapper: {
    "&.ui.thin.left.sidebar": {
      width: "100%",
      maxWidth: 300,
      background: "linear-gradient(90deg, #3871ed 0%, #907EFF 100%)",
    },
    "&.ui.labeled.icon.menu .item>.icon:not(.dropdown)": {
      fontSize: "20px !important",
      margin: "0px !important",
      color: "#ffffff",
    },
    "&.ui.vertical.menu .item:first-child": {
      textTransform: "uppercase",
      fontFamily: "Comfortaa",
      fontSize: 30,
      fontWeight: 700,
      lineHeight: "40px",
      color: "#ffffff",
    },
    "&.ui.vertical.menu .item:before": {
      background: "#ffffff",
    },
    "&.ui.icon.menu .item": {
      color: "#ffffff",
      marginRight: 0,
    },
  },
  sidebarTop: {
    "&.item": {
      display: "flex !important",
      flexDirection: "row !important",
      justifyContent: "space-between",
    },
  },
  btnSidebar: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 30,
  },
});

export default useStyles;
