import React from "react";

export default function BodySection(props) {
  return (
    <div className="bodySection">
      <h2>{props.test}</h2>
      {props.children}
    </div>
  );
}
