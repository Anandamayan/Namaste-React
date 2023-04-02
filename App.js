
const parent = React.createElement("div", { id: "Parent" },[
    React.createElement("div", { id: "child" },[
        React.createElement("h1", {}, "I'm a Javascript Developer"),
        React.createElement("h2", {}, "I'm a React Developer")
    ]),
    React.createElement("div", { id: "child2" },[
        React.createElement("h1", {}, "I'm a Javascript Developer"),
        React.createElement("h2", {}, "I'm a React Developer")
    ])
]
)




// const heading = React.createElement("h1", {id:"heading"}, "Hello World From React")

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);