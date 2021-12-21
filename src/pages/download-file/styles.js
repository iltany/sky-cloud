import { createUseStyles } from "react-jss";
import SelectArrows from "../../assets/icons/select-arrows.svg";

const useStyles = createUseStyles({
  priceWrapper: {
    padding: " 98px 0px 48px 0px",
    "@media (max-width: 992px)": {
      padding: "0px",
    },
  },
  dFlex: {
    display: "flex",
  },
  downloadContainer: {
    maxWidth: 1214,
    width: "100%",
    display: "block",
    margin: "0px auto 143px auto",
    "@media (max-width: 1220px)": {
      padding: "0px 12px",
      margin: "0px auto 79px auto",
    },
  },
  downloadContent: {
    borderRadius: 6,
    marginBottom: 50,
    paddingBottom: 50,
    boxShadow: "0px 3px 9px -3px rgba(34, 60, 80, 0.2)",
    backgroundColor: "#ffffff",
    "@media (max-width: 992px)": {
      paddingBottom: "0px",
    },
  },
  downloadHeader: {
    height: 60,
    backgroundColor: "#F4F7FC",
    padding: "0px 20px 0px 80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "@media (max-width: 992px)": {
      padding: "0px 36px 0px 10px",
    },
  },
  selectNoWrapper: {
    "&.ui.selection.dropdown": {
      width: 62,
      height: 40,
      backgroundColor: "transparent",
      border: "none",
      minWidth: "unset",
      paddingLeft: 0,
      "&:first-child": {
        marginRight: 20,
      },
    },
    "&.ui.dropdown>.text, &.ui.default.dropdown:not(.button)>.text, &.ui.dropdown:not(.button)>.default.text":
      {
        fontFamily: "Inter",
        fontSize: 12,
        fontWeight: 600,
        lineHeight: "15px",
        letterSpacing: "0.05em",
        color: "#606F89",
        textTransform: "uppercase",
      },
    "&.ui.dropdown>.dropdown.icon:before": {
      content: `url(${SelectArrows})`,
    },
    "&.ui.selection.dropdown>.dropdown.icon": {
      top: 11,
    },
  },
  sizeText: {
    fontFamily: "Inter",
    fontSize: "12px",
    fontWeight: 600,
    lineHeight: "15px",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: "#606F89",
    marginRight: 284,
    "@media (max-width: 992px)": {
      marginRight: 0,
    },
  },
  fileInfo: {
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#EAEAEA",
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "17px",
    color: "#000000",
    margin: "20px 26px 23px 69px",
    padding: "11px 20px",
    "@media (max-width: 992px)": {
      margin: "20px 6px 34px 6px",
      padding: "24px 12px 27px 12px",
      height: "unset",
    },
  },
  marginTitle: {
    marginLeft: 37,
  },
  marginSize: {
    marginRight: 238,
    "@media (max-width: 992px)": {
      marginRight: 0,
    },
  },
  fileFeaturesContainer: {
    margin: "0px 26px 0px 69px",
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width: 992px)": {
      flexDirection: "column",
      alignItems: "center",
      margin: 0,
    },
  },
  fileFeaturesContent: {
    display: "flex",
    alignItems: "center",
    width: 255,
    height: 40,
    backgroundColor: "#DAE1EC",
    paddingLeft: 14,
    whiteSpace: "nowrap",
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "17px",
    color: "#3B668D",
    borderRadius: 4,
    marginRight: 10,
    "@media (max-width: 992px)": {
      margin: "0px 0px 10px 0px",
      "&:nth-child(3) svg": {
        marginRight: 13,
      },
      "&:last-child svg": {
        marginRight: 4,
      },
    },
    "&:last-child": {
      marginRight: 0,
      fontWeight: 600,
    },
    "& svg": {
      marginRight: 9,
    },
  },
  downloadTypeContainer: {
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width: 992px)": {
      flexDirection: "column",
    },
  },
  downloadTypeContent: {
    maxWidth: 579,
    width: "100%",
    boxShadow: "0px 13px 19px 0px #00000012",
    padding: "18px 23px 44px 35px",
    backgroundColor: "#ffffff",
    border: "1px solid #E3E3E3",
    "@media (max-width: 992px)": {
      maxWidth: "unset",
      "&:first-child": {
        marginRight: 0,
        marginBottom: 24,
      },
    },
    "&:first-child": {
      marginRight: 20,
    },
    "&:first-child >div": {
      color: "#3B668D",
    },
    "&:last-child >div": {
      color: "#A270FF",
    },
  },
  downloadTypeTitle: {
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: 700,
    lineHeight: "35px",
    letterSpacing: "0.365em",
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 9,
    "@media (max-width: 992px)": {
      letterSpacing: "0.06em",
    },
  },
  downloadTypeSubtitle: {
    fontFamily: "Montserrat",
    fontSize: 14,
    fontWeight: 500,
    lineHeight: "21px",
    letterSpacing: "0.905em",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: 11,
    "@media (max-width: 992px)": {
      letterSpacing: "0.34em",
    },
    "& span": {
      fontWeight: 400,
      color: "#EAEAEA",
    },
  },
  downloadTypeDesc: {
    display: "flex",
    alignItems: "center",
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "39px",
    letterSpacing: "0.699999988079071px",
    "@media (max-width: 992px)": {
      letterSpacing: 0,
    },
    "@media (max-width: 412px)": {
      alignItems: "baseline",
    },
    "& svg": {
      marginRight: 10,
    },
  },
});

export default useStyles;
