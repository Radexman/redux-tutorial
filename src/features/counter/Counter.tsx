import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { increment, decrement } from "./counterSlice";

const Counter = () => {
  const { count } = useAppSelector(state => state.counter);

  return <div>Counter</div>;
};

export default Counter;
