import { Layout, Container } from "./components/Layout";
import "./App.css";
import SignIn from "./components/SignIn";
import Chat from "./components/Chat";
import { auth } from "./components/Firebase";
import { useAuthState } from "react-firebase9-hooks/auth"

function App() {
  const [user] = useAuthState(auth);

  return (
    <Layout>
      <Container>
        {user ? <Chat /> : <SignIn />}
      </Container>
    </Layout>
  );
}

export default App;
