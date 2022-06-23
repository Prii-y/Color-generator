import React, { useState } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js';

function App() {
  const [hex,setHex]=useState();
  const [error,setError]=useState(false);
  const [list,setList]=useState(new Values('#f15025').all(10));

  const submitHandler=(e)=>{
  e.preventDefault();
  try {
    let  color= new Values(hex).all(10);
    setList(color);
  }
   catch (error) {
  setError(true);
  console.log(error);
  }
  setHex('');
  };

  return <>
   <h3>color generator</h3>
  <form onSubmit={submitHandler}>
    <label htmlFor='color'>Enter color</label>
    <input placeholder='#F15025 ' type='text' onChange={(e)=>{setHex(e.target.value)}} id='color'
      className={error?`error`:null}
     value={hex}></input>
    <button type='submit' className='btn'>Submit</button>
  </form>
  
  <div className='colors'>{
    list.map((elem,index)=>{
      return (
      <SingleColor key={index}  {...elem} index={index} hexcolor={elem.hex}></SingleColor>
      
      );})
  }
  </div>
  
  </>
}
export default App
