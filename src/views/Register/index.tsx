import React, { useState, useCallback, ChangeEvent } from "react";

import { Container, Button, Form, Card, Message } from "semantic-ui-react";
import { useMutation } from "react-apollo-hooks";
import gql from "graphql-tag";
import {
  graphql,
  MutateProps,
  ChildMutateProps,
  ChildDataProps
} from "react-apollo";

import RegistrationForm from "./RegistrationForm";

const Register: React.FC<Props> = props => {
  return (
    <Container style={{ paddingTop: "15%" }} text>
      <Card style={{ margin: 'auto', width: "400px" }}>
        <Card.Content>
          <RegistrationForm onSubmit={props.mutate} />
        </Card.Content>
      </Card>
    </Container>
  );
};

const registerMutation = gql`
  mutation($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      id
      email
      createdDate
      updatedDate
    }
  }
`;

interface Variables {
  email: string;
  password: string;
}

interface Response {}

type InputProps = {};

type Props = ChildMutateProps<InputProps, Response, Variables>;

export default graphql<InputProps, Response, Variables, Props>(
  registerMutation
)(Register);
