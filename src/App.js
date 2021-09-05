import React, { useState } from "react";
import Item from "./Components/Item/Item";
import "./App.css";
import Input from "./Components/Input/Input";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <Input
        setInputValue={setInputValue}
        inputValue={inputValue}
        setItems={setItems}
        items={items}
      />
      <Item items={items} setItems={setItems} />
    </div>
  );
}

export default App;
