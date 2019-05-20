import React, { useState } from "react";

import { Input } from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const SEND_MESSAGE = gql`
  mutation($channelId: String!, $message: String!) {
    sendMessage(channelId: $channelId, message: $message) {
      ok
    }
  }
`;

const MessageInput: React.FC<{}> = () => {
  const [message, setMessage] = useState("");
  const [sendMessage, { error, data }] = useMutation(SEND_MESSAGE, {
    variables: { channelId: "TEMP", message }
  })

  const handleKeyPress = (event )

  return (
    <Input action={{
      content: "Send",
      onClick: () => {}
    }} value={message} onChange={event => setMessage(event.target.value)} fluid/>
  );
}