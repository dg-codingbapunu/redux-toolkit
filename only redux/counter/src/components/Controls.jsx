import React from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const handlePlus = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleMinus = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center ">
        <button type="button" className="btn btn-primary" onClick={handlePlus}>
          +1
        </button>

        <button type="button" className="btn btn-success" onClick={handleMinus}>
          -1
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center top ">
        <input
          type="text"
          placeholder="Enter numbers"
          className="number-input"
        />

        <button type="button" className="btn btn-info">
          Add
        </button>
        <button type="button" className="btn btn-danger">
          Substract
        </button>
      </div>
    </>
  );
};

export default Controls;
