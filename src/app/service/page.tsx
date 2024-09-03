"use client"

import { useEffect, useState } from "react"
import {useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation";


function page () {

  const {data: session} = useSession();
  const router = useRouter()  
    const[data,setData] = useState([]);
     const[loader,setLoader] = useState(true)
    console.log(data)
    console.log(loader)


  async function fetchApi () {
     try {
       const res = await fetch("https://fakestoreapi.com/products")
       const apiData = await res.json()
       if(apiData){
         setData(apiData)
         setLoader(false)                   

        }
     } catch (error) {
        
     }
};


useEffect(()=>{
    fetchApi()
},[])

  return (
    <>
   
   {session?.user?.email  ? 
  <div className=" items-center mx-auto bg-blue-600 ">

   <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-1  gap-4   mx-12 lg:mx-24">
        {loader?(<><div style={{
            alignItems:"center",
            justifyContent:"center",
            marginLeft :"750px",
            marginTop: "70%",
            backgroundColor: "blue",
            height: "100vh"
        }}><h1><div role="status">
        <svg aria-hidden="true" className=" w-8 h-8 text-gray-200 animate-spin dark:text-dark-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
    </div></h1></div></>):""}
        {data.map((data:any)=>{
                return(                 
           <>
             <div className=" mt-5 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                 <a href="#">
                     <img  src={data.image} alt="product image" className=" h-3/5 w-full rounded-2xl" />
                 </a>
                 <div className="px-5 pb-5 text-center p-2 ">
                    <h1 className=" text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"> Product Name </h1>

                    <p className="text-white">{data.title}</p>
                  </div>
                      <h1 className="text-white m-6">Price ₹ {data.price}</h1>
                    <hr />
                    <div className=" text-white">
                         <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Descrition</h1>
                         <p>{data.description}</p>
                    </div>
             </div>
             
           </>
                )
        })}
    </div>
    </div>

     : router.push("/login")}
  
    </>
  )
}

export default page
