import { useState } from "react";
import styled from "styled-components";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "./Firebase";

const Messages = styled.div`
display: flex;
`;

const SendMessageCont = styled.form`
display: flex;
`;

const Input = styled.input`
display:flex;
`;

const Send = styled.button`
display: flex;
`;

function Chat () {

    const [formValue, setFormValue] = useState("");

    function sendMessage(e){
        e.preventDefault();

        addDoc(collection(firestore, "messages"), {
            text: formValue,
        });

    }

    return (
        <Messages>
            <SendMessageCont onSubmit={sendMessage}>
                <Input type="text" value={formValue} onChange = {(e) => setFormValue(e.target.value)} />
                <Send>Enviar</Send> 
            </SendMessageCont>
        </Messages>
    )
}

export default Chat;