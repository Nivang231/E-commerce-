import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Products = () => {
    const [apiData, setApiData] = useState([]);
   

    useEffect(()=>{
         const fetchData = async ()=>{
        const {data} = await axios("https://fakestoreapi.com/products");
        setApiData(data);
        console.log(data)
    };
        fetchData();
    },[])
  return (
    <div className='p-5'>
        <div className='grid  grid-cols-5  gap-5'>
            {apiData.map((item,index)=>(
                <div key={index} className='border-2 p-2'>
                    <img src={item.image} alt="" className='aspect-square' />
                    <p className='line-clamp-1'>{item.title}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Products