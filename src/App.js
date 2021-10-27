import { Layout, Container, Header, LogoutButton } from "./components/Layout";
import "./App.css";
import SignIn from "./components/SignIn";
import Chat from "./components/Chat";
import { auth } from "./components/Firebase";
import { useAuthState } from "react-firebase9-hooks/auth";

function SignOut() {
  auth.signOut();
}

function pageScroll() {
  window.scrollBy(0, 1);
  const scrolldelay = setTimeout(pageScroll, 10);
}

function App() {
  pageScroll();
  const [user] = useAuthState(auth);

  return (
    <Layout>
      <Container>
        <Header>
          {user && <LogoutButton onClick={SignOut}>Sair</LogoutButton>}
        </Header>
        {user ? <Chat /> : <SignIn />}
      </Container>
    </Layout>
  );
}

export default App;
