import { useState, useEffect } from "react";
import "./Counter.css";

function Counter({ init, end, autostart }) {
  init = parseInt(init || 0);
  end = parseInt(end || 0);
  autostart = parseInt(autostart || 0);
  const [count, setCount] = useState(init);
  const [start, setStart] = useState(true); // true for displaying the Start button

  useEffect(() => {
    if (!start) {
      // The Start button is not displaye; you can initiate the timer
      var timer = setInterval(() => {
        setCount((count) => {
          var newCount = count + 1;
          if (newCount >= end) setStart(true);
          return newCount;
        });
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  });

  useEffect(() => {
    if (autostart) restart();
  }, [])

  function restart() {
    console.log('restart')
    setStart(false); // Hide the Start button
    setCount(init); // Reset "count" to the initial value
  }

  return (
    <div className="counter-container">
      Initial value of the counter is: {init}
      <br />
      End of the counter at: {end}
      <br />
      The counter is set to: {count}
      <br />
      {autostart ? <span style={{color: "green"}}>
        Autostart enable
      </span> : <span style={{color: "blue"}}>
        Autostart disable
      </span>
      }
      <br />
      {start ? (
        <>
          <b style={{ color: "red", fontSize: "20px" }}>Counter stopped</b>
          &nbsp;
          <button onClick={restart}>Start</button>
        </>
      ) : (
        <>
          <i>Counter in progress</i>
        </>
      )}
    </div>
  );
}

export default Counter;
