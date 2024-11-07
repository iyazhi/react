import React from "react";
import ReactDOM from "react-dom/client";
import MyButton from "./Component";



const Image = () => (<h2> React sucks bruh!!!</h2>)
const Para = React.createElement("a",{href:"https://www.google.com"},"Google");
const root = ReactDOM.createRoot(document.getElementById('root'));
const Btn =  () => (<><Image/><MyButton /></>);

root.render(<Btn/>);
//console.log(para);