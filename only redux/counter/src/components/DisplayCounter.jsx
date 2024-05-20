import React from "react";
import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((store) => store.counter);
  return <p class="lead mb-4">counter value is: {counter}</p>;
};

export default DisplayCounter;
