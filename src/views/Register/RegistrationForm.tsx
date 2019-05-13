import React from "react";
import { withFormik, FormikProps } from "formik";
import { Form, Button, Message } from "semantic-ui-react";
import { validRegistrationSchema } from "./validRegistrationSchema";

interface Props {
  onSubmit: (...args: any) => any;
}

interface RegistrationFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const RegistrationForm: React.FC<
  Props & FormikProps<RegistrationFormValues>
> = props => {
  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    isSubmitting,
    touched
  } = props;
  const { email, password, confirmPassword } = values;

  return (
    <Form onSubmit={handleSubmit} error loading={isSubmitting}>
      <Form.Field required error={false}>
        <label>Email</label>
        <Form.Input
          name="email"
          placeholder="Enter your email address"
          onChange={handleChange}
          value={email}
          disabled={isSubmitting}
          error={!!errors.email && touched.email}
        />
      </Form.Field>
      {errors.email && touched.email && <Message error list={[errors.email]} />}
      <Form.Field required error={false}>
        <label>Password</label>
        <Form.Input
          name="password"
          placeholder="Enter your password"
          type="password"
          onChange={handleChange}
          value={password}
          disabled={isSubmitting}
          error={!!errors.password && touched.password}
        />
      </Form.Field>
      {errors.password && touched.password && (
        <Message error list={[errors.password]} />
      )}
      <Form.Field required error={false}>
        <label>Confirm Password</label>
        <Form.Input
          name="confirmPassword"
          placeholder="Enter your password again"
          type="password"
          onChange={handleChange}
          value={confirmPassword}
          disabled={isSubmitting}
          error={!!errors.confirmPassword && touched.confirmPassword}
        />
      </Form.Field>
      {errors.confirmPassword && touched.confirmPassword && (
        <Message error list={[errors.confirmPassword]} />
      )}
      <div style={{ textAlign: "center" }}>
        <Button type="submit" primary>Register</Button>
        <Button type="submit" color="red">Back to Log in</Button>
      </div>
    </Form>
  );
};

const FormikRegistrationForm = withFormik<Props, RegistrationFormValues>({
  validationSchema: validRegistrationSchema,
  mapPropsToValues: () => {
    return {
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  handleSubmit: async (values, bag) => {
    // await bag.props.onSubmit({
    //   values
    // });
  }
})(RegistrationForm);

export default FormikRegistrationForm;
