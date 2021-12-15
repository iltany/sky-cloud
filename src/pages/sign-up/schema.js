import * as yup from "yup";

export const schemaSignUp = yup.object().shape({
  email: yup.string().email().required(),
  re_email: yup.string().email().required(),
  password: yup.string().required(),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required(),
});
