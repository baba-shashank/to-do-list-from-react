import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import Entry from "./components/Entry";
import Items from "./components/items";
import Container from "./components/Container";
import { useState } from "react";
function App() {
  let arr = [];
  const [Input, setInput] = useState("");
  let onkeydown = (event) => {
    if (event.key === "Enter") {
      setInput(event.target.value);
    }
  };
  const [Datee, setDatee] = useState("");
  let onchange = (event) => {
    if (event.target.value !== "") {
      setDatee(event.target.value);
    }
  };
  const [Arr, setArr] = useState(arr);
  let onclick = () => {
    let newItems = [
      ...Arr,
      {
        work: Input,
        date: Datee,
      },
    ];
    setArr(newItems);
  };

  return (
    <Container>
      <center>
        <AppName></AppName>
        <Entry
          onkeydown={onkeydown}
          onchange={onchange}
          onclick={onclick}
        ></Entry>
        <Items xrr={Arr}></Items>
      </center>
    </Container>
  );
}

export default App;
