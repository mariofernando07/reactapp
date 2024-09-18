// import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import React from 'react';

function App() {
  return (
    <>
      {
        [...Array(10).keys()].map((i) => 
        <React.Fragment key={i}>
          <Counter init="5" end={10 + i} />
        </React.Fragment> 
        )
      }
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

export default App;
