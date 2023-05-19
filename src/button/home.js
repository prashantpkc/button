import React from "react";
import { CustomButton } from "./custom_button";
import "./home.css";

export function Home() {
  const handleClickButton1 = () => {
    alert("i am button 1 clicked");
  };

  const handleClickButton2 = () => {
    alert("i am button 2 clicked");
  };

  return (
    <div className="parent">
      <CustomButton
        buttonStyle="button1style"
        buttonText="Button1"
        onClick={handleClickButton1}
      />

      <CustomButton
        buttonStyle="button2style"
        buttonText="Button2"
        onClick={handleClickButton2}
      />
    </div>
  );
}
