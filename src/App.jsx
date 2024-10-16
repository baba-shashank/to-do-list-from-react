import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import Entry from "./components/Entry";
import Items from "./components/items";
import Container from "./components/Container";
function App() {
  return (
    <Container>
      <center>
        <AppName></AppName>
        <Entry></Entry>
        <Items></Items>
      </center>
    </Container>
  );
}

export default App;
