import { createUseStyles } from "react-jss";
import MainBg from "../../assets/images/main-background.png";

const useStyles = createUseStyles({
  mapContainer: {
    width: "100%",
    height: 838,
    margin: "88px 0px 25px 0px",
    "@media (max-width: 992px)": {
      margin: "54px 0px 25px 0px",
    },
  },
  faqContainer: {
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
  stats: {
    marginTop: 247,
    "@media (max-width: 992px)": {
      marginTop: 209,
    },
  },
  accordionContainer: {
    display: "flex",
    justifyContent: "center",
    "& .accordion.ui.styled": {
      maxWidth: 1199,
      width: "100%",
      borderRadius: 15,
      boxShadow: "none",
      margin: "0px 13px 0px 18px",
    },
    "& .ui.styled.accordion > div:nth-child(4n+1)": {
      background: "linear-gradient(90deg, #e8f7ff, #f5ecff)",
      opacity: 1,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
    "& .ui.styled.accordion > div": {
      background: "linear-gradient(90deg, #f0faff, #f9f2ff)",
      opacity: 1,
    },
    "& .ui.styled.accordion > div:nth-last-child(-n+2)": {
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
  },
  accordionTitle: {
    ".ui.styled.accordion &.title": {
      display: "flex",
      flexDirection: "row-reverse",
      alignItems: "center",
      justifyContent: "space-between",
      fontFamily: "Comfortaa",
      fontSize: 30,
      fontWeight: 700,
      lineHeight: "33px",
      color: "#46637E",
      padding: "28px 43px 26px 54px",
      marginBottom: 13,
      border: "none",
      "&:first-child": {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: "unset",
        borderBottomRightRadius: "unset",
      },
    },
    "& svg": {
      width: 31,
      height: 31,
      "@media (max-width: 992px)": {
        width: 13,
      },
    },
    ".ui.styled.accordion &.active.title": {
      background: "linear-gradient(90deg, #B1E3FF 0%, #DFBEFF 100%)",
      opacity: 1,
    },
  },
  accordionContent: {
    ".ui.styled.accordion &.content": {
      fontFamily: "Comfortaa",
      fontSize: 20,
      fontWeight: 400,
      lineHeight: "30px",
      color: "#878787",
      padding: "31px 54px 90px 54px",
      background: "none",
      opacity: 1,
      "@media (max-width: 992px)": {
        padding: "18px 25px 31px 22px",
      },
    },
  },
});

export default useStyles;
