import React, { useState, useEffect } from "react";
import Item from "./Components/Item/Item";
import "./App.css";
import Input from "./Components/Input/Input";

const getLocalItems = () => {
  let localItem = localStorage.getItem("addedItem");
  if (localItem) {
    return JSON.parse(localStorage.getItem("addedItem"));
  } else {
    return [];
  }
};
function App() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState(getLocalItems());
  // localStorage.setItem("addedItem", [...items, items]);

  // console.log("updatedItems", updatedItems);
  useEffect(() => {
    // console.log(items);
    localStorage.setItem("addedItem", JSON.stringify(items));
  }, [items]);
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
