// const heading = React.createElement("h1", {id:"heading", name:"heading"}, "Hello World from React!");
// //the object above is used to give attributes to the element
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


/* <div id="parent">
    <div id="child1">
        <h1>I'm an H1 tag</h1>
        <h2>I'm an H2 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm an H1 tag</h1>
        <h2>I'm an H2 tag</h2>
    </div>
</div>

ReactElement = Html(Browser Understands) */


const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement("div", {id: "child"},
     [
        React.createElement("h1", {}, "I'm an H1 tag"),
        React.createElement("h2", {}, "I'm an H2 tag")
    ]),
    React.createElement("div", {id: "child2"},
     [
        React.createElement("h1", {}, "I'm an H1 tag"),
        React.createElement("h2", {}, "I'm an H2 tag")
    ]),
)

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);












