import React from "react";

//console.log(props.question} //test null or value

function Person(props) {
  return (
    <div>
      <h3 style={{ display: props.name ? "block" : "none" }}>
        Name: {props.name}
      </h3>
    </div>
  );
}
export default Person;
