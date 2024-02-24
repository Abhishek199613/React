import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object =>  HTMLElement(render)

const heading1 = React.createElement(
    "h1", 
    {id: "heading"},
    "Namaste React"
);

const heading = React.createElement(
    "div", 
    {class: "title"},    
    [
       React.createElement("h1", {}, "I'm an H1 tag"),
       React.createElement("h2", {}, "I'm an H2 tag"),
       React.createElement("h3", {}, "I'm an H3 tag")
   ],
);

const jsxHeading = (
    <h1>I'm an H1 tag in JSX</h1>
)

const HeadingComponent = () =>{
    return <div class="heading">
        {jsxHeading}
        <h2>I'm an H2 tag in JSX</h2>
        <h3>I'm an H3 tag in JSX</h3>
    </div>
}

const logo = (<div className="logo">
<img src="logo.png" alt="Logo"/>
</div>)

const searchBar = (
    <div class="search-bar">
            <input type="text" placeholder="Search..."/>
            <button>Search</button>
        </div>
)

const userIcon = (
    <div className="user-icon">
            <img src="https://www.freepik.com/premium-photo/round-user-icon-isolated-white-background-black-white-3d-rendering_25495508.htm#fromView=search&page=1&position=20&uuid=d331d16f-fd91-4f76-bb9f-e0dce4844617" alt="User Icon"/>
    </div>
)

const HeaderComponent = () => (
    <div class="header">
        {logo}
        {searchBar}
        {userIcon}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);