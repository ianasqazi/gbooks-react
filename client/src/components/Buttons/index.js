import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually

export function DetailsBtn(props) {
  return (
    <span className="btn btn-primary book-controls" {...props} role="button" tabIndex="0" >
      Details
    </span>
  );
}

export function SaveBtn(props) {
  return (
    <span className="btn btn-primary book-controls" {...props} role="button" tabIndex="0">
      Save
    </span>
  );
}

export function DeleteBtn(props) {
  return (
    <span className="btn btn-danger book-controls" {...props} role="button" tabIndex="0">
      Remove
    </span>
  );
}
