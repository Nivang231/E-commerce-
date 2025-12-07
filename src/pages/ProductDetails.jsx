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
    // <div className="p-5 border-2 w-[400px]">  
    //   <h1 className="text-2xl font-bold">{params.id}</h1>
    //   <img src={apiData.image} alt="" />
    //   <p>{apiData.title}</p>
    //   <p className="bg-green-400 w-fit">⭐{apiData?.rating?.rate}</p>
    //   <p className="bg-violet-500 w-fit">${apiData.price}</p>
    //   <p className="bg-violet-500 w-fit">${apiData.price}</p>
    //   <div className="float-right ">
    //     <p>{apiData.description}</p>
    //   </div>
    // </div>
    <div className="w-full min-h-screen bg-rose-100 p-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-rose-200 shadow-lg rounded-2xl p-10">

    {/* LEFT — FULL PAGE IMAGE */}
    <div className="flex justify-center items-center">
      <img
        src={apiData.image}
        alt={apiData.title}
        className="w-full max-w-lg h-auto object-contain rounded-xl"
      />
    </div>

    {/* RIGHT — DETAILS */}
    <div className="flex flex-col justify-center">

      <h1 className="text-4xl font-bold text-gray-900 leading-tight">
        {apiData.title}
      </h1>

      <p className="mt-4 text-lg text-gray-700 leading-relaxed">
        {apiData.description}
      </p>

      {/* Rating row */}
      <div className="mt-5 flex items-center gap-3">
        <span className="bg-yellow-400 text-black px-3 py-1 rounded-lg font-semibold">
          ⭐ {apiData?.rating?.rate}
        </span>

        <span className="text-gray-600">
          ({apiData?.rating?.count} reviews)
        </span>
      </div>

      {/* Price */}
      <p className="text-4xl font-bold text-rose-600 mt-6">
        ${apiData.price}
      </p>

      {/* ADD TO CART BUTTON */}
      <Link to="/cart">
      <button
        className="mt-8 bg-rose-600 text-white py-4 rounded-lg text-2xl font-semibold hover:bg-rose-700 transition w-full"
        onClick={() => addToCart(apiData)}  // <- if you're using cart context
      >
        Add to Cart
      </button>
      </Link>

    </div>
  </div>
</div>

  );
};

export default ProductDetails;
