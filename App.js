import React from "react";
import ReactDOM from "react-dom/client";

// Creating element with React.createElement


const container = React.createElement("div",{id:"container"},[
 React.createElement("h1",{className:"title"},"This is heading1"),
 React.createElement("h2",{className:"title"},"This is heading2"),
 React.createElement("h3",{className:"title"},"This is heading3")]);


// Creating same element with jsx

const jContainer = (
    <>
    {container}
    <div id="jcontainer">
        <h1 className="title">This is jsx heading1</h1>
        <h2 className="title">This is jsx heading2</h2>
        <h3 className="title">This is jsx heading3</h3>
    </div>
    </>
)

// Creating same with a functional component


const functionalContainer = () => (
    <>
    {jContainer()}
     <div id="funcontainer">
        <h1 className="title">This is functional component heading1</h1>
        <h2 className="title">This is functional component heading2</h2>
        <h3 className="title">This is functional component heading3</h3>
     </div>
    </>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<functionalContainer />);