import React from "react";
import ReactDOM from "react-dom/client";

const parent= React.createElement("div", {id: `parent`},[
              React.createElement("div", {id: `child1`}, [React.createElement("h1", {}, "This is h1 child1"), React.createElement("h2", {}, "This is a h2 from child1")]),
              React.createElement("div", {id: `child2`}, [React.createElement("h1", {}, "This is h1 child2"), React.createElement("h2", {}, "This is a h2 from child2")])]);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);
