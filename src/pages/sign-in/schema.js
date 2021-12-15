import * as yup from "yup";

export const schemaSignIn = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
