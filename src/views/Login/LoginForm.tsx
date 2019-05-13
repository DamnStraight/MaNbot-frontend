import React from "react";
import { withFormik, FormikProps } from "formik";

import { Link, RouteComponentProps } from "react-router-dom";

import { Form, Button, Message } from "semantic-ui-react";
import { validLoginSchema } from "./validLoginSchema";

const LoginForm: React.FC<Props & FormikProps<LoginFormValues>> = props => {
  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    isSubmitting,
    touched
  } = props;
  const { email, password } = values;

  return (
    <Form onSubmit={handleSubmit} error>
      <Form.Field>
        <label>Email</label>
        <Form.Input
          name="email"
          placeholder="Email address"
          onChange={handleChange}
          value={email}
          disabled={isSubmitting}
          error={!!errors.email && touched.email}
        />
      </Form.Field>
      {errors.email && touched.email && <Message error list={[errors.email]} />}
      <Form.Field>
        <label>Password</label>
        <Form.Input
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={password}
          disabled={isSubmitting}
          error={!!errors.password && touched.password}
        />
      </Form.Field>
      {errors.password && touched.password && (
        <Message error list={[errors.password]} />
      )}
      <Button type="submit">Log in</Button>
      <Link to={`${props.match.url}register`}>
        <p
          style={{
            paddingTop: "10px",
            fontWeight: "bold",
            textAlign: "center"
          }}
        >
          Don't have an account? Register
        </p>
      </Link>
    </Form>
  );
};

const FormikLoginForm = withFormik<Props, LoginFormValues>({
  validationSchema: validLoginSchema,
  mapPropsToValues: () => {
    return {
      email: "",
      password: ""
    };
  },
  handleSubmit: async (values, bag) => {}
})(LoginForm);

export default FormikLoginForm;

interface Props extends RouteComponentProps {}

interface LoginFormValues {
  email: string;
  password: string;
}
