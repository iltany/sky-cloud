import { createUseStyles } from "react-jss";
import bgImg from "../../assets/images/top-home-background.png";

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
  backgroundWrapper: {
    backgroundImage: `url(${bgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    minHeight: 1056,
    height: "100%",
    paddingTop: 190,
    "@media (min-width: 1920px)": {
      backgroundSize: "cover",
    },
    "@media (max-width: 999.9px)": {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },
});

export default useStyles;
