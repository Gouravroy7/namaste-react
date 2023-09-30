
// Part 3
const heading = React.createElement("h1", {id: "heading"}, "This is My React App");



// Part 4 - Nested div  like  Below -
/* 
    <div id="parent">
        <div id="child-1">
            <h1>I am H1 Tag of Child 1</h1>
            <h2>I am H2 Tag of Child 1</h2>
        </div>
        <div id="child-2">
            <h1>I am H1 Tag of Child 2</h1>
            <h2>I am H2 Tag of Child 2</h2>
        </div>
    </div>
*/
const parent = React.createElement("div", {id:"parent"},
[
    React.createElement("div", {id:"child-1"}, [
        React.createElement("h1", {}, "I am H1 Tag of Child 1"),
        React.createElement("h2", {}, "I am H2 Tag of Child 1")
    ]),
    React.createElement("div", {id:"child-2"}, [
        React.createElement("h1", {}, "I am H1 Tag of Child 2"),
        React.createElement("h2", {}, "I am H2 Tag of Child 2")
    ])
])

// The Parent is an Object - createElement returns a JS Object(* It does NOT return an Element)
console.log(parent);



const root = ReactDOM.createRoot(document.getElementById("root"));
// Converts the above JS Object to an Element(<div></div> for above case) which is then inserted into the root.
root.render(parent);