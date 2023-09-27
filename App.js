import React from "react";
import ReactDOM  from "react-dom";

console.log(ReactDOM)
const head=React.createElement("h1",{color:"red"},"heloo react")
const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(head)

