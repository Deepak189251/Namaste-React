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
);

// Creating same with a functional component


const FunctionalContainer = () => (
    <>
    {jContainer}
     <div id="funcontainer">
        <h1 className="title">This is functional component heading1</h1>
        <h2 className="title">This is functional component heading2</h2>
        <h3 className="title">This is functional component heading3</h3>
     </div>
    </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FunctionalContainer />);
/*
import React from "react";
import ReactDOM from "react-dom/client";

// Creating element in createElement

const heading = (
    <h1>Namaste React CreateElement</h1>
)
console.log(heading);

// Functional component "A basic js function which returns react element"

var  JsxHeading = () => (
    <div>
    <h1 id="heading">Namaste React using JSX.</h1>
    <p>This is a component.</p>
    {heading}
    </div>
 )

console.log(JsxHeading)




// This is component composition in react " using a component inside a component ."

const HeadingComponent = () => (
    
    <div id="container">
        
        {JsxHeading()}
        {heading}
        <h1>Namaste React using Functional component.</h1>
     </div>
)
const root = ReactDOM.createRoot(document.getElementById(`root`));

root.render(<HeadingComponent />); */
