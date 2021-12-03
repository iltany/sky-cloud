import { createUseStyles } from "react-jss";

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
  copyright: {
    fontFamily: "Comfortaa",
    fontSize: 24,
    fontWeight: 700,
    lineHeight: "27px",
  },
});

export default useStyles;
