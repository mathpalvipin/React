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

// // now for fetching it from node_module we have to use import
// import React from 'react';
// import ReactDOM from 'react-dom/client';

////////////////////React.createElement => ReactElement js - object =>  HTML element(render)
// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     [ React.createElement("div", { id: "child" }, [    /// put child in araay if have multiple children
//         React.createElement("h1", {}, "i am tag1 , edit it  "),
//         React.createElement("h1", {}, "i am tag2 "),
//       ]),
//       React.createElement("div", { id: "child2" }, [    /// put child in araay if have multiple children
//       React.createElement("h1", {}, "i am tag1 "),
//       React.createElement("h1", {}, "i am tag2 "),
//     ])]
//   );

// console.log(parent);
// const Reactroot = ReactDOM.createRoot(document.getElementById("Reactroot"));
// Reactroot.render(parent); // every thing insdie the Reactroot will be replaced with parent // not appended

////////*****************FOUNDATION************ */
import React from "react";
import ReactDOM from "react-dom/client";

//JSX javascript XML
// it is not html inside javascript.
// looks like HTML or XML like structure.

// const JSXHeading =<div id='ReactHeading'>JSX heading</div>;
// JSX => React.createElement => ReactElement js - object =>  HTML element(render)

// for multiple line of JSX we have to wrap it around the () to let the babel know from where the jsx start and end;
const JSXHeading = <div id="ReactHeading">JSX heading</div>;

// React Component
//class based component
//function  component

const Header = () => {
  return <h1>This is Header Component</h1>;
};
console.log(Header());

const Header2 = () => <h1>This is Header Component</h1>;

// const Body = ()=>{
//  return <div>This is body of function component</div>
// }

//component composition - create component with more then one component
// const Header3 = () => (
//   <div id="container">
//     <h1 id="heading">This is Header3 Component</h1>
//     <Body></Body>
//   </div>
// );

// element inside components

const body = <div>This is body of function component</div>;
// const data = api.getDAte();  JXS sanitize the the data for you , avoid cross site scripting
const Header3 = () => (
  <div id="container">
    <h1 id="heading">This is Header3 Component</h1>
    {body}  
{/* {data} */}
  </div>
);
console.log(JSXHeading); // it is also object and same se created bu React.createElement
const root = ReactDOM.createRoot(document.getElementById("Reactroot"));
// root.render(Header3());
root.render(<Header3></Header3>);
