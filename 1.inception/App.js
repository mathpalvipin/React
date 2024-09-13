// *****************************************************
//create aheader using createElement which give you the object with all properties
//  create Root using createRoot whiich is functin of ReactDOM ,
// now the Root give the the render method which convert the object created bu createElement to <Tag> and render it on root;

// const reactHeader = React.createElement('h1', {id:"ReactHeading"},"hello world from React"); //SEcond argument is used to give atribute
//  console.log(reactHeader) // object

// const reactRoot= ReactDOM.createRoot(document.getElementById('Reactroot'));
// reactRoot.render(reactHeader);
// console.log(reactRoot);

// *****************************************************

{
  /* <div id="parent">  
    <div id="child">
        <h1>I am tag1</h1>
    </div>
</div> */
}

//  const parent = React.createElement("div",{id :"parent"},
//     React.createElement("div" ,{id:"child"}, React.createElement("h1",{},"i am tag1 "))
//  )


 
// //  <div id="parent">
// //     <div id="child">
// //         <h1>I am tag1</h1>
// //         <h1>I am tag2</h1>
// //     </div>
// //  </div>

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [    /// put child in araay if have multiple children
//     React.createElement("h1", {}, "i am tag1 "),
//     React.createElement("h1", {}, "i am tag2 "),
//   ])
// );


//  <div id="parent">
//     <div id="child">
//         <h1>I am tag1</h1>
//         <h1>I am tag2</h1>
//     </div>
//      <div id="child">
//         <h1>I am tag1</h1>
//         <h1>I am tag2</h1>
//     </div>
//  </div>


// now for fetching it from node_module we have to use import
import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement(
    "div",
    { id: "parent" },
    [ React.createElement("div", { id: "child" }, [    /// put child in araay if have multiple children
        React.createElement("h1", {}, "i am tag1 , edit it  "),
        React.createElement("h1", {}, "i am tag2 "),
      ]),
      React.createElement("div", { id: "child2" }, [    /// put child in araay if have multiple children
      React.createElement("h1", {}, "i am tag1 "),
      React.createElement("h1", {}, "i am tag2 "),
    ])]
  );
  

console.log(parent);
const Reactroot = ReactDOM.createRoot(document.getElementById("Reactroot"));
Reactroot.render(parent); // every thing insdie the Reactroot will be replaced with parent // not appended
