import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Counter კომპონენტი ჩაიტვირთა!");
  }, []);

  return (
    <div
      style={{ padding: "1rem", border: "1px solid #4CAF50", margin: "1rem 0" }}
    >
      <h3>Redux Toolkit Counter</h3>
      <p>
        მიმდინარე თვლა (Redux): <strong>{count}</strong>
      </p>

      <button
        onClick={() => dispatch(increment())}
        style={{ marginRight: "10px" }}
      >
        გაზრდა (+)
      </button>
      <button
        onClick={() => dispatch(decrement())}
        style={{ marginRight: "10px" }}
      >
        შემცირება (-)
      </button>
      <button onClick={() => dispatch(reset())}>განულება (Reset)</button>
    </div>
  );
}

export default Counter;
