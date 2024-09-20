import { useReducer } from "react";

function CounterAdvance() {

  const [value, dispatch] = useReducer((value, action) => {
    if (action === 'INCR') value += 1;
    if (action === 'DECR') value -= 1;
    return value;
  }, 0)

  function incrValue() {
    dispatch('INCR');
  }

  function decrValue() {
    dispatch('DECR');
  }

  return <>
    <button onClick={incrValue}>value + 1</button>
    &nbsp;&nbsp;
    <button onClick={decrValue}>value - 1</button>
    &nbsp;
    =&gt;value={value}
  </>

}

export default CounterAdvance;