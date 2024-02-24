import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object =>  HTMLElement(render)

const heading = React.createElement(
    "h1", 
    {id: "heading"},
    "Namaste React"
);


const elem = <span>Hi this is Abhi</span>

// JSX - is not HTML in JS
// JSX - HTML-like or XML-like syntax
const jsxHeading = (<h1 id="heading">  
{elem}
Namaste React using JSX
</h1>)



//React Components
const HeadingComponent = () => {
    return <h1 id="heading">Namaste React using JSX</h1>
}

const Title = () => (
    <h1 id="heading" tabIndex="5">
        Namaste React using JSX 🚀
    </h1>
);

// component composition => component inside component
const HeadingComponent2 = () => (
    <div id="container">
    {jsxHeading}
    {Title()} 
    <Title></Title>
    <Title/> 
        <h1 id="heading">Namaste React Functional Component</h1>
    </div>// Title component can also be added as <Title></Title>
); // same as above for single statement return



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2/>);