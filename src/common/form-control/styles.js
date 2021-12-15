import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  formControl: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  label: {
    "&.ui.label": {
      fontFamily: "Comfortaa",
      fontSize: 24,
      fontWeight: 700,
      lineHeight: "27px",
      color: "#3B3F8D",
      marginRight: 45,
      padding: 0,
      background: "unset",
      whiteSpace: "nowrap",
    },
  },
  inputContainer: {
    width: "100%",
    "&.ui.input>input, &.ui.input>input::placeholder": {
      backgroundColor: "#F3F3F3",
      borderRadius: 61,
      minWidth: 630,
      maxWidth: 739,
      width: "100%",
      padding: "36px 20px 37px 58px",
      fontFamily: "Comfortaa",
      fontSize: 24,
      fontWeight: 700,
      lineHeight: "27px",
      color: "#ADADAD",
      border: "none",
    },
    " &.ui.input>input::placeholder": {
      padding: 0,
      borderRadius: 0,
    },
    "&.ui.error": {
      borderRadius: 61,
      border: "1px solid red",
    },
  },
});

export default useStyles;
