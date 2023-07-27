import React, {Component} from 'react';
import './App.css';
import Counter from './comps/counter';



class App extends Component{
 mydate ="18-10-2023"

  render(){
  return(
    <div className="App">
      <Counter></Counter>
      <h2>Count Down to {this.mydate}</h2>
      <h3>Days: xxx</h3>
      <input defaultValue="daniel"/>
      <button className='btn btn-success'>change</button>
    </div>
  )
 }
}

export default App;
