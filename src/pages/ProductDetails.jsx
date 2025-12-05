import { useParams } from "react-router-dom";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  const params = useParams();
  const [apiData, setApiData] = useState([]);
   

    useEffect(()=>{
         const fetchData = async ()=>{
        const {data} = await axios(`https://fakestoreapi.com/products/${params.id}`);
        setApiData(data);
        console.log(data)
    };
        fetchData();
    },[])

  return (
    <div className="p-5 border-2 w-[400px]">  
      <h1 className="text-2xl font-bold">{params.id}</h1>
      <img src={apiData.image} alt="" />
      <p className="bg-green-400 w-fit">⭐{apiData?.rating?.rate}</p>
      <p className="bg-violet-500 w-fit">${apiData.price}</p>
    </div>
  );
};

export default ProductDetails;
