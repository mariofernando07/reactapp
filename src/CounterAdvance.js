import { useReducer } from "react";

function CounterAdvance() {

  const valueIncr = 10;
  const valueDecr = 10;

  const [state, dispatch] = useReducer((state, action) => {
    if (action.type === 'INCR') state.value += action.value;
    if (action.type === 'DECR') state.value -= action.value;
    return {...state};
  }, {value: 0})

  function incrValue() {
    dispatch({type:'INCR', value: valueIncr});
  }

  function decrValue() {
    dispatch({type:'DECR', value: valueDecr});
  }

  return <>
    <button onClick={incrValue}>value + {valueIncr}</button>
    &nbsp;&nbsp;
    <button onClick={decrValue}>value - {valueDecr}</button>
    &nbsp;
    =&gt;value={state.value}
  </>

}

export default CounterAdvance;