import React from "react";
import { Container, Card } from "semantic-ui-react";
import LoginForm from "./LoginForm";
import { RouteComponentProps } from "react-router";


const Login: React.FC<RouteComponentProps> = (props) => {
  return (
    <Container style={{ paddingTop: "15%" }} text>
      <Card style={{ margin: 'auto'}}>
        <Card.Content>
          <LoginForm {...props} />
        </Card.Content>
      </Card>
    </Container>
  );
}

export default Login;