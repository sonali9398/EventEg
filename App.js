import React, { useState } from 'react';
import './App.css';
const App = () =>{
  const purple = "#8e44ad";
  const[back, setBack] = useState(purple);
  const [text, setText] = useState('click');


  const bgChange = () =>{
    let newBack = "#0000ff";
    setBack(newBack);
    setText("Hey there");
  };

  const bgNew = () => {
    setBack(purple);
    setText("Again");
  }; 

  return(
    <>
      <div style={{backgroundColor: back}}>
        <button onMouseEnter={bgChange} onMouseLeave={bgNew}>
          {text}
        </button>
      </div>
    </>
  )
}



export default App;
