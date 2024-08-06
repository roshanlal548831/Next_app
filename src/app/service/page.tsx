"use client"

import { use, useEffect, useState } from "react"


const page = () => {
    const[data,setData] = useState([]);
     const[loader,setLoader] = useState(true)
    console.log(data)
    console.log(loader)


const fetchApi = async()=> {
     try {
        setLoader(false)
        const res = await fetch("https://fakestoreapi.com/products")
        const apiData = await res.json()
         setData(apiData)
     } catch (error) {
        
     }
};


useEffect(()=>{
    fetchApi()
},[])

  return (
    <>
    <h1>{loader?"Loading" : ""}</h1>
    <div className=" grid grid-cols-4 gap-4 ">
        {data.map((data:any)=>{
                return(                    <>
       

<div className=" w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img  src={data.image} alt="product image" className=" h-3/5 w-full rounded-2xl" />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Title : <p>{data.title}</p></h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
               
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>
       
    </div>
</div>

                    </>
                )
        })}
    </div>
    </>
  )
}

export default page
