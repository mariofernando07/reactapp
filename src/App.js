// import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import InputFieldCounter from './InputFieldCounter';
import SimpleCounter from './SimpleCounter';
import CounterAdvance from './CounterAdvance';
import CounterCustomHook from './CounterCustomHook';
import Countries from './Countries';
import React, { useState, createContext } from 'react';


const TotalContext = createContext();
function App() {

  const [total, setTotal] = useState(0)
  const [name, setName] = useState('');

  function change(event) {
    setName(event.target.value)
  }
  return (
    <>
      {
        [...Array(3).keys()].map((i) => {
          var val = i < 2 ? '1' : '0'; // value of the "autostart" attribute
          return <React.Fragment key={i}>
              <Counter autostart={val} init="5" end={10 + i} />
            </React.Fragment>
        })
      }
      <hr/>
      <TotalContext.Provider value={[total, setTotal]}>
        <InputFieldCounter focus/>
        <hr/>
        <InputFieldCounter/>
        <hr/>
        <InputFieldCounter/>
        <hr/>
        <b>Total: {total}</b>
      </TotalContext.Provider>
      <hr/>
      <SimpleCounter name="SimpleCounter#1"/>
      <hr/>
      <CounterAdvance/>
      <hr/>
      <CounterCustomHook />
      <hr/>
      Country: <input type='text' onChange={change}/> <br/><br/>
      <Countries name={name}/>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

  );
}

// export default App;
export {App, TotalContext };
