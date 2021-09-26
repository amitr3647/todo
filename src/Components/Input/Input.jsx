import { useState } from "react";
import "./Input.css";
import todoImg from "../../images/todoImg.png";
export default function Input({ setInputValue, inputValue, setItems, items }) {
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todoImg} height="50px" width="50px"></img>
            <figcaption>Add your list here 🤞</figcaption>
          </figure>
          <div className="add-item">
            <div className="add-box">
              <input
                value={inputValue}
                type="text"
                placeholder="  ✍️  type here"
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
              ></input>
            </div>

            <ion-icon
              name="add-outline"
              onClick={() => {
                console.log(!inputValue);

                if (inputValue.trim().length !== 0) {
                  setItems([...items, inputValue]);
                  setInputValue("");
                }
              }}
            ></ion-icon>
          </div>
        </div>
      </div>
    </>
  );
}
