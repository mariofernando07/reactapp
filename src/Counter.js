import { useState, useEffect } from 'react';
import './Counter.css'

function Counter({init, end}) {
    init = parseInt(init || 0)
    end = parseInt(end || 0)
    const [count, setCount] = useState(init)

    useEffect(() => {
        if (end && count >= end) return;
        var timer = setInterval(() => {
            // setCount(count+1);
            setCount((count) => count + 1)
            console.log(`Count = ${count}`)
        }, 1000)

        return () => {clearInterval(timer)}
    })

    return (
      <div className='counter-container'>
        Initial value of the counter is: {init}
        <br />
        End of the counter at: {end}
        <br />
        The counter is set to: {count}
        <br />
        {
            (end && count >= end) ? <b style={{color: "red", fontSize: "20px"}}>Counter stopped</b> : <i>Counter in progress</i>
        }
      </div>
    );
  }
  
  export default Counter;