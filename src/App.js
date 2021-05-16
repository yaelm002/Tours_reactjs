import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'


const url = 'https://course-api.com/react-tours-project';


function App() {
  const [isLoading, setLoading] = useState(true);
  const [newData, setData] = useState([]);

    function deleteItem(id){
    const aktData= newData.filter((item)=>{
      return item.id !== id;
    })
    setData(aktData);
  }


  useEffect(() => {
    fetch(url)
    .then((response)=> response.json()
    )
    .then((data)=> {
      setData(data);
      console.log(newData);
      setLoading(false);
    })
    .catch(err=>{
      new Error ('errorA');
    });
  }, []);


  return <>
  <main>
    {isLoading? <Loading/> :  <Tours newData= {newData}  deleteItem= {deleteItem}/>}

  </main>
  
  </>
  
}

export default App
