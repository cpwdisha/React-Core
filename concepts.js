// React creates it virtual DOM replicating the query selector div under body
 const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement('div', null, 'HI'));

//Renders a parameter element and tells us where to put it - MAIN LINE OF CODE
ReactDOM.render(<div>Hi</div>, document.getElementById("root"));

// Render an unordered list in root div
ReactDOM.render(
    <ul>
        <li>Disha</li>
        <li>Jyotir</li>
    </ul>,
    document.getElementById("root")
);

// Create a main component and render it in root div
const MainComponent = () => {
  return (
    <div>
      <h1>Hi returning jsx</h1>
      <h2>Hi disha</h2>
    </div>
  );
};
ReactDOM.render(<MainComponent />, document.getElementById("root"));

//Append <h1> as a child => div#root & give it some textcontent with a className = "header"
// Imperatively
const h1 = document.getElementById("h1");
h1.textContent = "React's Imperative nature";
h1.className = "header";
document.getElementById("root").appendChild(h1);


//Declarative way of doing the same
ReactDOM.render(<h1 className="header" > React's Declarative Nature</h1>, document.getElementById("root"));