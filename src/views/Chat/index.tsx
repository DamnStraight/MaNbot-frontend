import React from "react";
import gql from "graphql-tag";
import { List, Image, Container, Feed, Card, Input } from "semantic-ui-react";
import { useSubscription } from "@apollo/react-hooks";
import moment from "moment";

interface MessagePayload {
  content: string;
  profileImage: string;
  userName: string;
  dateSent: string;
}

const MESSAGE_SUBSCRIPTION = gql`
  subscription {
    newMessage {
      content
      profileImage
      userName
      dateSent
    }
  }
`;

let messages: any[] = [];

const Chat: React.FC<{}> = props => {
  const { loading, data } = useSubscription(MESSAGE_SUBSCRIPTION);

  if (data) messages.push(data);

  return (
    <Container text style={{ paddingTop: "40px" }}>
      <Card fluid style={{ height: "700px" }}>
        <Card.Content style={{ overflowY: "scroll" }}>
          <Feed
            style={{
              minHeight: "600px",
              backgroundColor: "white",
              padding: "8px"
            }}
          >
            {messages.map((message, index) => {
              return (
                <Feed.Event
                  key={index}
                  image={message.newMessage.profileImage}
                  date={moment(message.newMessage.dateSent).fromNow()}
                  summary={message.newMessage.userName}
                  extraText={message.newMessage.content}
                />
              );
            })}
          </Feed>
        </Card.Content>
        <Card.Content>
          <Input fluid />
        </Card.Content>
      </Card>
    </Container>
  );
};

export default Chat;

// const Chat: React.FC<{}> = props => {
//   const { loading, data } = useSubscription(MESSAGE_SUBSCRIPTION);

//   if (data) messages.push(data);

//   return (
//     <Container text style={{ marginTop: '40px'}}>
//     <List style={{ minHeight: '600px', backgroundColor: 'white', padding: '8px', borderRadius: '8px'}}>
//       {messages.map((message, index) => {
//         return (
//           <List.Item key={index} style={{width: '100%'}} >
//             <Image avatar src={message.newMessage.profileImage} />
//             <List.Content>
//               <List.Header>{message.newMessage.userName}</List.Header>
//               <List.Description>{message.newMessage.content}</List.Description>
//             </List.Content>
//           </List.Item>
//         );
//       })}
//     </List>
//     </Container>
//   );
// };

// export default Chat;
