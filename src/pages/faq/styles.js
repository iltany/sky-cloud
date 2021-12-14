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
      marginTop: 157,
    },
  },
  accordionContainer: {
    display: "flex",
    justifyContent: "center",
  },
});

export default useStyles;
