import { createUseStyles } from "react-jss";
import MainBg from "../../assets/images/main-background.png";

const useStyles = createUseStyles({
  textContainer: {
    backgroundImage: `url(${MainBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    width: "100%",
    minHeight: 980,
    height: "100%",
    marginTop: -75,
    paddingTop: 75,
    marginBottom: 109,
    "@media (min-width: 2570px)": {
      backgroundSize: "cover",
    },
    "@media (max-width: 992px)": {
      backgroundImage: "unset",
      minHeight: "unset",
      marginBottom: -105,
    },
  },
  textContent: {
    display: "block",
    margin: "0px auto",
    maxWidth: 1194,
    width: "100%",
    "@media (max-width: 992px)": {
      padding: "0px 14px 0px 18px",
    },
  },
  textTitle: {
    fontFamily: "Roboto",
    fontSize: 36,
    fontWeight: 400,
    lineHeight: "60px",
    textTransform: "uppercase",
    color: "#3B668D",
    marginBottom: 3,
    "@media (max-width: 992px)": {
      lineHeight: "45px",
    },
  },
  textDescription: {
    "& p": {
      fontFamily: "Montserrat",
      fontSize: 18,
      fontWeight: 400,
      lineHeight: "27px",
      color: "#2B4964",
      marginBottom: 26,
      "&:last-child": {
        marginBottom: 46,
      },
    },
  },
  descriptionContent: {
    display: "flex",
    justifyContent: "space-between",
    "& p": {
      maxWidth: 582,
      width: "100%",
      marginBottom: 32,
      "&:last-child": {
        marginLeft: 9,
        marginBottom: 32,
      },
    },
  },
});

export default useStyles;
