import { useState } from "react";
import styled from "styled-components";
import { addDoc, collection, query, orderBy } from "firebase/firestore";
import { firestore, auth } from "./Firebase";
import { useAuthState } from "react-firebase9-hooks/auth";
import { useCollectionData } from "react-firebase9-hooks/firestore";

const Messages = styled.div`
  display: flex;
  flex-direction: column;
`;

// const Nome = styled.div`
//   display: flex;
//   align-items: center;
//   background: red;
//   height: 25px;
// `;

const MessageCont = styled.div`
  display: flex;
  flex-direction: ${(props) => props.isMine && "row-reverse"};
  background: ${(props) => props.isMine && "#281e68"};
  width: 99%;
  margin: 2px;
  border-radius: 8px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 30px;
  margin: 5px;
`;

const Message = styled.div`
  display: flex;
  background: lightblue;
  border-radius: 8px;
  margin: 5px;
  padding: 3px;
  align-items: center;
`;

const SendMessageCont = styled.form`
  display: flex;
  justify-content: end;
  align-items: center;
  border-radius: 8px;
`;

const Input = styled.input`
  display: flex;
  width: 80%;
  height: 30px;
  border-radius: 8px;
`;

const Send = styled.button`
  display: flex;
  border-radius: 8px;
  margin-left: 3px;
`;

function Chat() {
  const [formValue, setFormValue] = useState("");
  const [user] = useAuthState(auth);
  const messagesRef = collection(firestore, "messages");
  const [messages] = useCollectionData(
    query(messagesRef, orderBy("createdAt"))
  );

  function sendMessage(e) {
    const { uid, displayName, photoURL } = user;
    e.preventDefault();

    addDoc(collection(firestore, "messages"), {
      text: formValue,
      createdAt: new Date(),
      uid,
      displayName,
      photoURL,
    });

    setFormValue("");
  }

  return (
    <Messages>
      {messages &&
        messages.map((msg) => (
          <MessageCont isMine={msg.uid === user.uid}>
            {/* <Nome>{msg.displayName}</Nome> */}
            <Avatar src={msg.photoURL} />

            <Message>{msg.text}</Message>
          </MessageCont>
        ))}
      <SendMessageCont onSubmit={sendMessage}>
        <Input
          type="text"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <Send>Enviar</Send>
      </SendMessageCont>
    </Messages>
  );
}

export default Chat;
