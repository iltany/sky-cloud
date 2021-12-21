import { createUseStyles } from "react-jss";
import Close from "../../assets/icons/close.svg";

const useStyles = createUseStyles({
  modalContainer: {
    "&.ui.modal": {
      padding: "18.5px 18.5px 50px 40px",
      backgroundColor: "#F4F7FC",
      maxWidth: 1100,
      width: "100%",
    },
    "&.ui.modal>.close,icon": {
      top: 18.5,
      right: 18.5,
      padding: 0,
    },
    "& i.icon.close:before": {
      content: `url(${Close})`,
    },
    "&.ui.modal>.content": {
      backgroundColor: "#F4F7FC",
      padding: 0,
      "@media (max-width: 767px)": {
        padding: "0px !important",
      },
    },
  },
  modalTitle: {
    "&.ui.header": {
      fontFamily: "Roboto",
      fontSize: 36,
      fontWeight: 400,
      lineHeight: "60px",
      color: "#3B668D",
      textTransform: "uppercase",
      marginBottom: 27,
      borderBottom: "none",
      backgroundColor: "#F4F7FC",
      padding: 0,
      "@media (max-width: 767px)": {
        fontSize: 24,
      },
    },
  },
});

export default useStyles;
