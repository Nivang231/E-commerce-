import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

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
    // <div className='p-5'>
    //     <div className='grid  grid-cols-5  gap-5'>
    //         {apiData.map((item,index)=>(
    //             <div key={index} className='border-2 p-2'>
    //                 <img src={item.image} alt="" className='aspect-square' />
    //                 <p className='line-clamp-1'>{item.title}</p>
    //                 <p>Price: {item.price}$</p>
    //                 <p>Rating: {item.rating.rate}</p>
    //                 <p>Count: {item.rating.count}</p>
    //             </div>
    //         ))}
    //     </div>
    // </div>
    <div className='p-5'>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
    {apiData.map((item, index) => (
        <Link to={`/products/${item.id}`}>
      <div
        key={index}
        className='bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-xl p-4 border border-gray-200 hover:-translate-y-1'
      >
        <div className='w-full aspect-square overflow-hidden rounded-lg'>
          <img
            src={item.image}
            alt={item.title}
            className='w-full h-full object-contain p-2'
          />
        </div>

        <p className='font-semibold text-gray-800 mt-3 line-clamp-1'>
          {item.title}
        </p>

        <p className='text-lg font-bold text-blue-600 mt-1'>
          ${item.price}
        </p>

        <div className='flex items-center justify-between mt-2 text-sm text-gray-600'>
          <p className='flex items-center gap-1'>
            ⭐ {item.rating.rate}
          </p>
          <p className='text-gray-500'>({item.rating.count})</p>
        </div>

        <button className='mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition'>
          Add to Cart
        </button>
      </div>
      </Link>
    ))}
  </div>
</div>

  )
}

export default Products