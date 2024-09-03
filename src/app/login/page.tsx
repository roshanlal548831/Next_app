"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useSession, signIn, signOut } from "next-auth/react"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Image from 'next/image';

function Page () {
    const router = useRouter();
    const {data: session} = useSession();

   
    const[loader,setLoader] = useState(false)

    const[user,setUser] = useState({
        email:"",
        password:""
    });

    if(session?.user?.email){
        router.push("/service")
    }

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
            
            if(user.email.length < 1 || user.password.length < 1){
                toast.warning("fill the input")
                console.log("helo")
            }else{
                 setLoader(true)
                 const data = await axios.post("/api/login",user);
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
  <div className="md:w-1/2 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <Image width={"900"} height={"600"} className=" w-10 h-10 mr-2 rounded-lg" src="https://www.shutterstock.com/shutterstock/photos/346194287/display_1500/stock-vector-connection-icon-346194287.jpg" alt="logo"/>
          User  
      </a>
      <div className="md:w-1/2 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                 {loader?"Processing....":"Login User"}
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={inputSubmit} action="#">
                 
                  <div>
                      <label htmlFor="email"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" value={user.email} onChange={handleInput} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Email..." />
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" value={user.password} onChange={handleInput} name="password" id="password" placeholder="Enter your password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div>
                    <button type="submit"
                        className="inline-flex w-full items-center justify-center rounded-lg border bg-grey p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400">
                        Continue
                    </button>
                    </div>
                          
                            <div className='flex items-center h-5'>

                              <Link href="/register"  className=' w-full text-blue-600 underline-offset-1'> create new Account</Link>
                            </div>
             
                            <div className="flex items-start">
                           
                   
                  </div>
                
              </form>
                               <button onClick={()=>signIn("google")} className="group rounded-2xl h-12 px-8 w-full border-2    border-gray-300  transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                <div className="relative flex items-center space-x-4 justify-center">
                                    <Image src="https://www.svgrepo.com/show/475656/google-color.svg"
                                        className="absolute left-0 w-5" alt="google logo" width={"900"} height={"600"}/>
                                    <span
                                        className="block w-max font-semibold tracking-wide text-gray-700 dark:text-white text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue
                                        with Google
                                    </span>
                                </div>
                            </button>  
          </div>
      </div>
  </div>
</section>
    </>
  )
}

export default Page
