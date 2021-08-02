import React from "react"
import ReactDOM from "react-dom"


const element = <h1>Hello World</h1>

console.log(element);
ReactDOM.render(
 <h1>{element}</h1>,
 document.querySelector("#root")
);
