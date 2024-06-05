import type { ChangeEvent } from "react";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
} from "./counterSlice";

const Counter = () => {
  const [number, setNumber] = useState(0);
  const { count } = useAppSelector(state => state.counter);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleChangeNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const correctNumber = Number(e.target.value);
    setNumber(correctNumber);
  };

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(number));
  };

  const handleDecrementByAmount = () => {
    dispatch(decrementByAmount(number));
  };

  const handleReset = () => {
    const windowValue = window.confirm("Do you want to reset");

    if (count === 0) {
      window.alert("Counter value is already zero");
      return;
    }

    if (!windowValue) {
      return;
    }

    dispatch(reset());
  };

  return (
    <section>
      <h1>{count}</h1>
      <div>
        <button onClick={handleIncrement} type="button">
          +
        </button>
        <button onClick={handleDecrement} type="button">
          -
        </button>
      </div>
      <form>
        <p>Select a number from 1 - 10 and increment / decrement the count</p>
        <label htmlFor="number">
          <input
            type="number"
            name="number"
            id="number"
            min={1}
            max={10}
            value={number}
            onChange={handleChangeNumber}
          />
        </label>
        <div className="button-container">
          <button onClick={handleIncrementByAmount} type="button">
            Add Amount
          </button>
          <button onClick={handleDecrementByAmount} type="button">
            Remove Amount
          </button>
        </div>
      </form>
      <button onClick={handleReset} type="button">
        Reset
      </button>
    </section>
  );
};

export default Counter;
