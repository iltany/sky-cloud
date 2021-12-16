import { createUseStyles } from "react-jss";
import MainBg from "../../assets/images/main-background.png";
import SelectArrows from "../../assets/icons/select-arrows.svg";
import SearchIcon from "../../assets/icons/search.svg";
import CheckboxOff from "../../assets/icons/checkbox-off.svg";
import CheckboxOn from "../../assets/icons/checkbox-on.svg";

const useStyles = createUseStyles({
  filesContainer: {
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
  tableContainer: {
    maxWidth: 1214,
    width: "100%",
    display: "block",
    margin: "0px auto",
    "& .ui.table thead th": {
      backgroundColor: "#F4F7FC",
    },
    "& .ui.striped.table tbody tr:nth-child(2n), & .ui.striped.table>tr:nth-child(2n)":
      { backgroundColor: "#F4F7FC" },
  },
  dFlex: {
    display: "flex",
  },
  thBtn: {
    "&.ui.button": {
      width: 148,
      height: 40,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#ffffff",
      borderRadius: 4,
      fontFamily: "Inter",
      fontSize: 14,
      fontWeight: 600,
      lineHeight: "17px",
      backgroundColor: "#913E98",
    },
    "& svg": {
      marginRight: 10,
    },
  },
  uploadBtn: {
    "&.ui.button": {
      backgroundColor: "#F04438",
      marginLeft: 20,
    },
  },
  spaceBetween: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  fileStored: {
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: 400,
    lineHeight: "15px",
    letterSpacing: "0.05em",
    color: "#437FEC",
    textTransform: "uppercase",
    display: "flex",
    justifyContent: "space-between",
  },
  displaying: {
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: 400,
    lineHeight: "15px",
    letterSpacing: " 0.05em",
    textTransform: "uppercase",
    color: "#606F89",
    "& span": {
      fontFamily: "Inter",
      fontSize: 12,
      fontWeight: 600,
      lineHeight: "15px",
      letterSpacing: " 0.05em",
      textTransform: "uppercase",
      color: "#606F89",
    },
  },
  selectContainer: {
    "&.ui.selection.dropdown": {
      width: 97,
      height: 40,
      backgroundColor: "#DAE1EC",
      border: "none",
      borderRadius: 4,
      minWidth: "unset",
      padding: "12px 30px",
    },
    "&.ui.dropdown>.text": {
      fontFamily: "Inter",
      fontSize: 14,
      fontWeight: 600,
      lineHeight: "17px",
      letterSpacing: "0.05em",
      color: "#606F89",
    },
    "&.ui.dropdown>.dropdown.icon:before": {
      content: `url(${SelectArrows})`,
    },
    "&.ui.selection.dropdown>.dropdown.icon": {
      top: 13,
    },
  },
  searchContainer: {
    "& .ui.icon.input>input": {
      width: 357,
      height: 40,
      background: " #DAE1EC",
      borderRadius: 4,
      border: "none",
    },
    "& .ui.icon.input>input, & .ui.icon.input>input::placeholder": {
      fontFamily: "Inter",
      fontSize: 14,
      fontWeight: 400,
      lineHeight: "17px",
      color: "#2E3B5254",
    },
    "& i.icon.search:before": {
      content: `url(${SearchIcon})`,
    },
    "& .ui.icon.input>i.icon:before": {
      top: 17,
    },
  },
  tableInput: {
    "&.ui.input>input": {
      width: 97,
      height: 40,
      backgroundColor: "#DAE1EC",
      border: "none",
      borderRadius: 4,
      minWidth: "unset",
      fontFamily: "Inter",
      fontSize: 14,
      fontWeight: 600,
      lineHeight: "17px",
      letterSpacing: "0.05em",
      color: "#606F89",
    },
  },
  searchBtn: {
    "&.ui.button": {
      width: 97,
      height: 40,
      backgroundColor: "#455B66",
      border: "none",
      borderRadius: 4,
      minWidth: "unset",
      fontFamily: "Inter",
      fontSize: 14,
      fontWeight: 600,
      lineHeight: "17px",
      color: "#ffffff",
    },
  },
  tableCheckbox: {
    "&.ui.checkbox input:focus~.box:before, &.ui.checkbox input:focus~label:before, &.ui.checkbox .box:before, &.ui.checkbox label:before, &.ui.checkbox input:checked~.box:before, &.ui.checkbox input:checked~label:before":
      {
        content: `url(${CheckboxOff})`,
        width: 20,
        height: 20,
      },
    "&.ui.checkbox input:checked~.box:after, &.ui.checkbox input:checked~label:after":
      {
        content: `url(${CheckboxOn})`,
        width: 20,
        height: 20,
      },
  },
  selectNoWrapper: {
    "&.ui.selection.dropdown": {
      width: 75,
      height: 40,
      backgroundColor: "transparent",
      border: "none",
      minWidth: "unset",
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
  thTitle: {
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: 600,
    lineHeight: "15px",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: "#606F89",
  },
});

export default useStyles;
