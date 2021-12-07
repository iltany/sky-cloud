import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  mainBtn: {
    "&.ui.button": {
      color: "#ffffff",
      background: "linear-gradient(90deg, #43A1D6 0%, #907EFF 100%)",
      borderRadius: 62,
      fontFamily: "Comfortaa",
      fontSize: 24,
      fontWeight: 700,
      lineHeight: "27px",
      textAlign: "center",
      padding: "26px 0px",
      width: "100%",
    },
  },
});

export default useStyles;
