import React from "react";
import ReactDOM from "react-dom";

//es6
//class Hello extends React.Component {
//    render() {
//        return (
//            <div>
//            <h1>Hello World!</h1>
//            <h2>This is my first React component!</h2>
//            </div>
//        )
//    }
//}


var Hello = React.createClass({
    render: function() {
    return (
    <div>
     <h1>Hello World!</h1>
     <h2>This is my first React component!</h2>
     </div>
    )}
})



ReactDOM.render(<Hello/>, document.getElementById("app"));
