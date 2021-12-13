import React from "react";
import { Input, Label } from "semantic-ui-react";
import useStyles from "./styles";

const FormControl = ({
  formControlWrapper,
  label,
  placeholder,
  inputType,
  inputIcon,
  iconPosition,
  name,
  value,
  onChange,
  onBlur,
  touched,
  error,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.formControl || formControlWrapper}>
      <Label className={classes.label}>{label}</Label>
      <Input
        placeholder={placeholder}
        className={classes.inputContainer}
        type={inputType}
        icon={inputIcon}
        iconPosition={iconPosition}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={Boolean(touched && error)}
      />
    </div>
  );
};
export default FormControl;
