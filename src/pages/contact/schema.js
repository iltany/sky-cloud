import * as yup from "yup";

export const schemaContacts = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
});
