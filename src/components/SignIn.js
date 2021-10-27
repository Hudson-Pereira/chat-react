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
  display: flex;
  justify-content: center;
  align-items: center;
  heigth: 40px;
  background-color: #281e68;
  border-radius: 8px;
  margin-left: 200%;
  font-size: 14px;
  color: black;
`;

function SignIn() {
  const [user] = useAuthState(auth);

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  if (user) {
    return null;
  }

  return (
    <SignInCont>
      <SignInButton onClick={signInWithGoogle}>Entrar</SignInButton>
    </SignInCont>
  );
}

export default SignIn;
