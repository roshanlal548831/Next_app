"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Image from 'next/image';
console.log("this is image",)

function Page () {
    const router = useRouter()

    const[user,setUser] = useState({
        name:"",
        email:"",
        password:""
    });
    const[loader,setLoader] = useState(false)

    const handleInput = (e:any)=>{        
            const value = e.target.value;
            const name = e.target.name;
            setUser({
                ...user,[name]:value
            })
     }

    const inputSubmit = async(e:any)=>{
             e.preventDefault()
           try {
            if(user.name.length < 3){
              toast.warning(" name: more then 3 letter")
            } else if(user.email.length < 1){
                toast.warning("Email is  required")
            }else if(user.password.length < 6){
                toast.warning("Password more then 6 leter")
            }else{
                setLoader(true)
                const data = await axios.post("/api/register",user)
                console.log(data)
               toast.success(data.data.message)
               if(data.data.message){
                router.push("/")
               }
            }
           
           
           } catch (error:any) {
            toast.error(error.response.data.message)
           
           }
    }
  return (
    <>
      <section className="bg-gray-50 dark:bg-blue-900">
  <div className="md:w-1/2 flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <Image className="w-10 h-10 rounded-lg mr-2" width={"900"} height={"600"} src="https://www.shutterstock.com/shutterstock/photos/346194287/display_1500/stock-vector-connection-icon-346194287.jpg" alt="logo"/>
         User
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                 {loader?"Processing....":"Register Now"}
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={inputSubmit} action="#">
                 
                  <div>
                      <label htmlFor="email"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your name</label>
                      <input type="text" value={user.name} onChange={handleInput} name="name" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name..." />
                  </div>

                  <div>
                      <label htmlFor="email"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" value={user.email} onChange={handleInput} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email..." />
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" value={user.password} onChange={handleInput} name="password" id="password" placeholder="Enter your password..." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                  <button type="submit"
                        className="inline-flex w-full items-center justify-center rounded-lg border bg-grey p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400">
                        Continue
                    </button>
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                     
                      <Link href="/login" className='text-blue-600 m-6 '>Login User</Link>
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

export default Page
