import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();
  const handlePlus = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleMinus = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleToggle = () => {
    dispatch({ type: "PRIVACYTOGGLE" });
  };
  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };
  const handleSubstract = () => {
    dispatch({
      type: "SUBSTRACT",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
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

        <button
          type="button"
          className="btn btn-warning"
          onClick={handleToggle}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center top ">
        <input
          type="text"
          placeholder="Enter numbers"
          className="number-input"
          ref={inputElement}
        />

        <button type="button" className="btn btn-info" onClick={handleAdd}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubstract}
        >
          Substract
        </button>
      </div>
    </>
  );
};

export default Controls;
