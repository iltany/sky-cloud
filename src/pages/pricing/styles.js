import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  priceWrapper: {
    padding: " 98px 0px 48px 0px",
    "@media (max-width: 992px)": {
      padding: "0px",
    },
  },
});

export default useStyles;
