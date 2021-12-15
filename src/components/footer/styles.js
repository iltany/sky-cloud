import { createUseStyles } from "react-jss";
import bgImg from "../../assets/images/footer-background.png";

const useStyles = createUseStyles({
  footerContainer: {
    backgroundImage: `url(${bgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    "@media (max-width: 1075px)": {
      backgroundPosition: "80%",
    },
  },
  container: {
    maxWidth: 1486,
    width: "100%",
    display: "block",
    margin: "0px auto",
    paddingTop: 448,
    "@media (max-width: 1440px)": {
      padding: "448px 22px 0px 22px",
    },
  },
  footerContent: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 79,
    "@media (max-width: 1075px)": {
      justifyContent: "center",
    },
  },
  copyright: {
    fontFamily: "Comfortaa",
    fontSize: 24,
    fontWeight: 700,
    lineHeight: "27px",
    color: "#ffffff",
    padding: "65px 0px 60px 0px",
    textAlign: "center",
    borderTop: " 1px solid #FFFFFF",
  },
  footerTitle: {
    fontFamily: "Comfortaa",
    fontSize: 48,
    fontWeight: 700,
    lineHeight: "54px",
    color: "#ffffff",
    marginBottom: 70,
  },
  footerDescription: {
    fontFamily: "Comfortaa",
    fontSize: 20,
    fontWeight: 400,
    lineHeight: "30px",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    "& a:hover": {
      color: "#ffffff",
    },
  },
  aboutWrapper: {
    maxWidth: 423,
    width: "100%",
    "@media (max-width: 1075px)": {
      display: "none",
    },
  },
  contactWrapper: {
    maxWidth: 286,
    width: "100%",
    "& span": {
      marginBottom: 25,
      "& a": {
        color: "#ffffff",
        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
  },
  featuredWrapper: {
    maxWidth: 418,
    width: "100%",
    "@media (max-width: 1075px)": {
      display: "none",
    },
  },
  footerLink: {
    color: "#ffffff",
    textDecoration: "underline",
    marginBottom: 25,
    "&:last-child": {
      marginBottom: 0,
    },
  },
});

export default useStyles;
