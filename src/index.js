import React from "react";
import ReactDOM from "react-dom";
//......CASE1.....
ReactDOM.render(
  <div>
    <h1 style={{ color: "red" }}>Hello World!</h1>
    <p>This is a paragraph.</p>
  </div>,
  document.getElementById("root")
);

// {/*........CASE2........
// //USE JS FOR ResizeObserverSize,BORDER ETC
// const customStyle={
//   color:"red",//in js string and comma is used
//   fontSize:"20px",//font-size likhte the pahle ab camel case me
//   border:"1px solid black"
// }//here customstyle is js object
// ReactDOM.render(
//   <div>
//     <h1 style={customStyle}>Hello World!</h1>
//     <p>This is a paragraph.</p>
//   </div>,
//   document.getElementById("root")
// );*/}
