import React, {Component,useState,useEffect} from 'react';
import './App.css';
// import Counter from './comps/counter';
// // import React, { useState, useEffect } from 'react';


// class App extends Component{
//  mydate ="18-10-2023"

//   render(){
//   return(
//     <div className="App">
//       <Counter></Counter>
//       <h2>Count Down to {this.mydate}</h2>
//       <h3>Days: xxx</h3>
//       <input defaultValue="daniel"/>
//       <button className='btn btn-success'>change</button>
//     </div>
//   )
//  }
// }



// const Counter = (props) => {
//   const [count, setCount] = useState(props.start);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount((prevCount) => prevCount + 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       <p>Count: {count}</p>
//     </div>
//   );
// };




// export default App;


const App = () => {
  const mydate = "18-10-2023";

  return (
    <div className="App">
      <Counter start={0} />
      <h2>Count Down to {mydate}</h2>
      <h3>Days: xxx</h3>
      <input defaultValue="daniel" />
      <button className='btn btn-success'>change</button>
      <Toggle />
    </div>
  );
};

const Counter = (props) => {
  const [count, setCount] = useState(props.start);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  return (
    <div>
      <button className='btn btn-warning' onClick={handleToggle}>{isOn ? 'On' : 'Off'}</button>
    </div>
  );
};





const SmartToggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  return (
    <div>
      <button onClick={handleToggle} style={{ backgroundColor: isOn ? 'green' : 'grey' }}>
        {isOn ? 'On' : 'Off'}
      </button>
    </div>
  );
};




export default App;
