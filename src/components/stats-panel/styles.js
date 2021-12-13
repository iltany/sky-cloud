import { createUseStyles } from "react-jss";
import StatsBg from "../../assets/images/stats-panel.png";

const useStyles = createUseStyles({
  container: {
    maxWidth: 1213,
    width: "100%",
    display: "block",
    margin: "0px auto",
    position: "relative",
    "@media (max-width: 1260px)": {
      padding: "0px 22px",
    },
  },

  statsWrapper: {
    backgroundImage: `url(${StatsBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    minHeight: 261,
    marginBottom: 148,
    display: "flex",
    alignItems: "center",
    "@media (max-width: 999.9px)": {
      backgroundImage: "unset",
      margin: "150px 0px 0px 0px",
    },
  },
  statsContainer: {
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width: 1440px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  statsContent: {
    display: "flex",
    "@media (max-width: 1440px)": {
      flexDirection: "column",
      alignItems: "center",
      marginBottom: 63,
      "&:last-child": {
        marginBottom: 0,
      },
    },
  },
  statsCount: {
    fontFamily: "Comfortaa",
    fontSize: 42,
    fontWeight: 700,
    lineHeight: "47px",
    color: "#425B8C",
    marginBottom: 16,
    "@media (max-width: 1440px)": {
      marginBottom: 8,
      textAlign: "center",
    },
  },
  statsDescription: {
    fontFamily: "Comfortaa",
    fontSize: 24,
    fontWeight: 700,
    lineHeight: "27px",
    color: "#718DC2",
    "@media (max-width: 1440px)": {
      textAlign: "center",
      fontSize: 20,
      lineHeight: "22px",
    },
  },
  statsIcon: {
    marginRight: 30,
    display: "flex",
    alignItems: "center",
    "@media (max-width: 1440px)": {
      marginRight: 0,
      marginBottom: 20,
    },
  },
});

export default useStyles;
