import useCounterMax from "./useCounterMax";

function CounterCustomHook({ max }) {

  if (!max) max = 5;

  const [value, incr, decr, error] = useCounterMax(max)

  function incrValue() {
    incr();
  }

  function decrValue() {
    decr();
  }

  return <>
    <button onClick={incrValue}>value + 1</button>
    &nbsp;&nbsp;
    <button onClick={decrValue}>value - -</button>
    &nbsp;
    =&gt;
    value={value};<br />
    <b>{error}</b>
  </>

}

export default CounterCustomHook;