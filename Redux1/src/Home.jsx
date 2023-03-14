import React from "react";
import { useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  // const {c} = useSelector(state => state.custom)
  const addBtn = () => {
    dispatch({
      type: "increment",
    });
  };
  const subBtn = () => {
    dispatch({
      type: "decrement",
    });
  };
  const valBtn = () => {
    dispatch({
      type: "incrementByValue",
      payload: 20,
    });
  };

  const val2Btn = () => {
    dispatch({
      type: "decrementByValue",
      payload: 10,
    });
  };
  // console.log(val2Btn)

  return (
    <div>
      {/* <div>{c}</div> */}
      <button onClick={addBtn}>Increment</button>&nbsp;&nbsp;&nbsp;
      <button onClick={subBtn}>Decrement</button>&nbsp;&nbsp;&nbsp;
      <button onClick={valBtn}>Increment by value</button>&nbsp;&nbsp;&nbsp;
      <button onClick={val2Btn}>Derement by value</button>&nbsp;&nbsp;&nbsp;
    </div>
  );
}

export default Home;
