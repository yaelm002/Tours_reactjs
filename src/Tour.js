import React, { useState } from 'react';

const Tour = ({id, image,info, price,name, deleteItem}) => {
  const [readMore, setReadMore]= useState(false);

 

/*   function deleteItem(id){
    const aktData= newData.filter((item)=>{
      return item.id !== id;
    })
    setData(aktData);
  } */
  return <>
  <article className = 'single-tour'>
      <img src= {image} alt= {name}/>
      <footer>
        <div className= 'tour-info'>
          <h4 >{name}</h4 >
          <h4 className= 'tour-price'>{price}€</h4>
        </div>
      <p>{readMore? info : `${info.substring(0,200)}...`}<button onClick= {()=>setReadMore(!readMore)}>{readMore ? 'less' : 'Mehr'}</button></p>
      <br></br>
      <button className= 'delete-btn' style= {{marginBottom: '2rem'}} onClick= {()=>deleteItem(id)}>Keine Intresse</button>
      </footer>
    </article>
  </>;
};

export default Tour;
