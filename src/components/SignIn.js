import styled from "styled-components";
import { auth } from "../components/Firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase9-hooks/auth";

export const SignInCont = styled.div`
    width: 30%;
    height: 15%;
    padding: 3%;
    display: flex;
    align-itens: center;
    justify-content: center;
`;

export const SignInButton = styled.button`
    font-size: 14px;
    color: white;
    background-color: green;
`;



function SignIn() {

    const [user] = useAuthState(auth);

    function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);    
    }

    // function SignOut () {
    //     auth.signOut();
    // }

    if (user) {
        return (
            null
        );
        }

    return (
        <SignInCont>
            <SignInButton onClick={signInWithGoogle}>Entrar/Criar</SignInButton>
        </SignInCont>
    );
}

export default SignIn;