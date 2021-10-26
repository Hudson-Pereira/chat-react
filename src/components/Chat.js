import { useState } from "react";
import styled from "styled-components";
import { addDoc, collection, query } from "firebase/firestore";
import { firestore, auth } from "./Firebase";
import { useAuthState } from "react-firebase9-hooks/auth";
import { useCollectionData } from "react-firebase9-hooks/firestore";

const Messages = styled.div`
  display: flex;
`;

const SendMessageCont = styled.form`
  display: flex;
`;

const Input = styled.input`
  display: flex;
`;

const Send = styled.button`
  display: flex;
`;

function Chat() {
  const [formValue, setFormValue] = useState("");
  const [user] = useAuthState(auth);
  const messagesRef = collection(firestore, "messages");
  const [messages] = useCollectionData(query(messagesRef));

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
