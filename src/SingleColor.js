import React, { useState, useEffect } from 'react'

const SingleColor = ({rgb,type,weight,hexcolor,index}) => {
  const [alert,setalert]=useState(false);
  const bcg=rgb.join();
  // console.log(hexa);
  const hexvalue=`#${hexcolor}`
  // console.log(rgb.join());
  // const hex= rgbToHex(...rgb);
useEffect(()=>{
  const timeout=setTimeout(()=>{setalert(false)},2000)
    return ()=> {clearTimeout(timeout);}
  
  },[alert]);

  return (
    <>
      <article
      onClick={()=>{setalert(true);
      navigator.clipboard.writeText(hexvalue)
      }}
       className={`color ${index>10 && 'color-light'}`} 
      style={{backgroundColor : `rgb(${bcg})` }} 
       >
        <p className='percent-value'>{weight}%</p>
        <p className='color-value'>{hexvalue}</p>
        
        {alert && <p className='alert'>Copied to clipboard</p>}
    </article>
   
    </>
  );
}

export default SingleColor
