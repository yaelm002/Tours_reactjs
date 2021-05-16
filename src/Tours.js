import React from 'react';
import Tour from './Tour';
const Tours = ({newData, deleteItem}) => {


  return <>
  <h3 className='title'>Unsere Touren</h3>
  <div className = 'underline'></div>
  {newData.map((data)=>{
    return(
      <Tour key= {data.id}  {...data} deleteItem ={deleteItem}>
      </Tour>
    )
  })}
  
  </>

};

export default Tours;
