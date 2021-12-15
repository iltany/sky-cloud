import * as yup from "yup";

export const schemaProfile = yup.object().shape({
  email: yup.string().email().required(),
  old_password: yup.string().required(),
  password: yup.string().required(),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required(),
});
