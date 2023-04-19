import React from "react";
import ReactDOM from "react-dom/client";

// Creating element in createElement

const heading = React.createElement(`h1`, {id: `heading`}, `Namaste React CreateElement`);

console.log(heading);

// Functional component "A basic js function which returns react element"

const JsxHeading = () => <h1 id="heading">Namaste React using JSX.</h1>

console.log(JsxHeading)




// This is component composition in react " using a component inside a component ."

const HeadingComponent = () => (
    
    <div id="container">
        
        <JsxHeading />
        {heading}
        <h1>Namaste React using Functional component.</h1>
     </div>
)
const root = ReactDOM.createRoot(document.getElementById(`root`));

root.render(<HeadingComponent />);

