// import local files
import React from "react";
import "./Card.module.css";

function Card(props) {
  return <div className={"card"}>{props.children}</div>;
}

export default Card;
