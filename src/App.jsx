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
        <Items work={"buy milk"} date={"15/10/2024"}></Items>
        <Items work={"go to college"} date={"15/10/2024"}></Items>
      </center>
    </Container>
  );
}

export default App;
