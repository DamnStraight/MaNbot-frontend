import * as yup from "yup";

export const validRegistrationSchema = yup.object().shape({
  email: yup
    .string()
    .min(3)
    .max(255)
    .email("lol")
    .required(),
  password: yup
    .string()
    .min(6)
    .max(64)
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required()
});

