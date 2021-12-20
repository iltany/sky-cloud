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
    "@media (min-width: 1900px)": {
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
    overflowX: "auto",
    boxShadow: " 0px 3px 9px -3px rgba(34, 60, 80, 0.2)",
    marginBottom: 30,
    "& .ui.table": {
      border: "none",
    },
    "& .ui.table tr td": {
      border: "none",
      fontFamily: "Inter",
      fontSize: 14,
      fontWeight: 400,
      lineHeight: "17px",
      color: "#2E3B52",
      padding: "18px 0px 18px 24px",
      "@media(max-width: 767px)": {
        display: "flex !important",
      },
      "&:nth-child(2)": {
        width: 0,
        paddingLeft: 0,
        "& svg": {
          display: "block",
          margin: "0px auto",
          "@media(max-width: 767px)": {
            margin: "10px 0px 0px 0px",
          },
        },
      },
      "&:last-child": {
        paddingRight: 24,
      },
    },
    "& .ui.table thead th": {
      backgroundColor: "#F4F7FC",
      border: "none",
      padding: "35px 0px 0px 24px",
    },
    "& .ui.table thead tr:nth-child(2) th": {
      "&:nth-child(6), &:nth-child(7), &:nth-child(8)": {
        width: 97,
        paddingLeft: 15,
      },
      "&:nth-child(5)": {
        width: 97,
      },
      "&:nth-child(8)": {
        paddingRight: 24,
      },
    },
    "& .ui.table thead tr:nth-child(3) th": {
      "@media(max-width: 767px)": {
        "&>div": {
          display: "flex",
          justifyContent: "flex-start",
        },
      },
      "&:nth-child(8)": {
        paddingLeft: 15,
      },
      "&:nth-child(9)": {
        paddingRight: 24,
        verticalAlign: "middle",
        "&>div": {
          fontSize: 30,
          letterSpacing: 0,
          height: 40,
        },
      },
      "&": {
        paddingBottom: 15,
      },
    },
    "& .ui.striped.table tbody tr:nth-child(2n), & .ui.striped.table>tr:nth-child(2n)":
      {
        backgroundColor: "#F4F7FC",
      },
    "& .ui.table tfoot tr td:last-child": {
      padding: 0,
      height: 44,
      "@media(max-width: 767px)": {
        height: "unset",
      },
    },
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
    "@media(max-width: 767px)": {
      width: "100%",
    },
    "& .ui.button": {
      padding: 0,
      backgroundColor: "transparent",
    },
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
        left: 1,
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
    textAlign: "center",
  },
  accessContainer: {
    width: 49,
    height: 20,
    backgroundColor: "#0A65FF",
    color: "#ffffff",
    borderRadius: 11,
    fontFamily: "Inter",
    fontSize: 10,
    fontWeight: 500,
    lineHeight: "12px",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    "@media(max-width: 767px)": {
      marginLeft: 0,
    },
  },
  widthUnset: {
    "&.ui.selection.dropdown": {
      width: "unset",
      paddingLeft: 16,
      "@media(max-width: 767px)": {
        width: 80,
        paddingLeft: 0,
      },
    },
  },
  alignCenter: {
    "@media(max-width: 400px)": {
      display: "flex",
      alignItems: "center",
    },
    ".ui.table tr td&": {
      textAlign: "center",
    },
  },
  activeRow: {
    backgroundColor: "#EBF2FF",
    ".ui.striped.table tbody tr:nth-child(2n)&, .ui.striped.table>tr:nth-child(2n)&":
      {
        backgroundColor: "#EBF2FF",
      },
    ".ui.striped.table tbody tr& td:first-child": {
      borderLeft: "5px solid #0A65FF",
      paddingLeft: 19,
    },
  },
  paginationContainer: {
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: 600,
    lineHeight: "15px",
    letterSpacing: "0.05em",
    color: "#606F89",
    display: "flex",
    alignItems: "baseline",
    justifyContent: "flex-end",
    marginRight: 224,
    "@media(max-width: 767px)": {
      marginRight: 0,
    },
    "@media(max-width: 400px)": {
      flexDirection: "column",
    },
  },
  paginationSelect: {
    "&.ui.selection.dropdown": {
      minWidth: "unset",
      paddingLeft: 5,
      paddingTop: 10,
      marginRight: 50,
      border: "none",
      color: "#606F89",
    },
  },
  btnWrapper: {
    marginLeft: 50,
    "& .ui.button": {
      padding: 0,
      backgroundColor: "transparent",
      "&:first-child": {
        marginRight: 50,
      },
    },
  },
});

export default useStyles;
