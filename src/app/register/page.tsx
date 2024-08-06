"use client"

import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, {  useState } from 'react'


const page = () => {

  const router = useRouter()
  
  const[user,setUser] = useState({
    name: "",
    email: "",
    password: ""
  });
  const[loading,setLoading] = useState(false);
  const[validation,setValidation] = useState("")
  console.log(validation)
  

  const handleInput = (e:any)=>{
    let name = e.target.name;
    let value = e.target.value;
   
    setUser({
        ...user,
        [name]:value
    });
  }

  const inputSubmit = async(v:any)=>{
    v.preventDefault();
    if(user.name.length < 5 ){
      setValidation(" user name min 5 word")
    }else if(user.email.length === 0){
      setValidation(" fill the email input fill")
    }else if (user.password.length < 4){
      setValidation(" password min 8 word")
    }else{
    try {
      setLoading(true)
      console.log(user)
      // const respone = await axios.post("api/signup",user);
      // console.log(await respone)
     
      // router.push("/login");
     
     
    } catch (error) {

      console.log("Error try again",error)
    }
    }
  }


  return (
    <>
        <section className="bg-gray-50 dark:bg-blue-900">
      
       <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
           <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
               <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
               Flowbite    
           </a>
           <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
               <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                   <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                       Create an account
                   </h1>
                   <h1 className='text-white'>{loading ? "Processing" : "Singup"}</h1>
                   <form className="space-y-4 md:space-y-6" onSubmit={inputSubmit} action="#">
                       <div>
                           <label htmlFor="email"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">FullName</label>
                           <input  type="text" value={user.name} onChange={handleInput} name="name" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full name" />
                       </div>
                       <div>
                           <label htmlFor="email"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                           <input type="email" value={user.email} onChange={handleInput} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" />
                       </div>
                       <div>
                           <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                           <input type="password" value={user.password} onChange={handleInput} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                       </div>
                      
                       <div className="flex items-start">
                           <div className="flex items-center h-5">
                           <button type="submit"  id="password" className="bg-blue-50 border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">Register now</button>
                           <Link href="/login" className='text-white m-6 '>Login </Link>
                           </div>
                       
                       </div>
                     
                   </form>
                
               </div>
           </div>
       </div>
     </section>
    </>
  )
}

export default page
