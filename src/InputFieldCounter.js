import { useEffect, useRef, useState } from "react";
import "./InputFieldCounter.css";

function InputFieldCounter({focus, setTotal}) {
  const [value, setValue] = useState('');
  const refCounter = useRef();

  useEffect(() => {
    // Give focus to the field if the "focus" attribute is indicated
    if(focus) refCounter.current.focus(); // refeCounter.current represents the DOM element associated with that reference
  }, [])
  
  function change(event) {
    var newValue = parseInt(event.target.value || 0)
    setValue(newValue)

    setTotal((total) => total-value) // subtract the old value
    setTotal((total) => total+newValue) // add the new value
    
  }

  function keydown(event) {
    console.log(event.key)
    // Allow the Backspace, Delete, ArrowLeft, ArrowRight, and Tab keys
    if(["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(event.key)) return;
    // Then disallow all other keys except those from 0 to 9
    if (event.key < "0" || event.key > "9") event.preventDefault();
  }

  return (
    <>
      <label htmlFor="inputCounter">Counter</label>
      <input name="inputCounter" type="text" onChange={change} onKeyDown={keydown} ref={refCounter} />
      <br />
      <br />
      Input value: {value}
    </>
  );
}

export default InputFieldCounter;
