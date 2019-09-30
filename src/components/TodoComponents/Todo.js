import React from "react";

export default function Todo(props) {
  const { task, id } = props;
  return <div key={id}>{task}</div>;
}
