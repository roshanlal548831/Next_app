import React from 'react'


const page = () => {
 
 
  return (
   <>
    <div>
        <div className=" grid-cols-2 bg-blue-600 h-dvh w-dvw text-center p-6 flex  justify-center align-items-center">
         <div className=' text-center m-20'>
           <h1 className=" text-2xl font-bold"> login whith Google and go to the product page</h1>
            <div className='mt-5'>
               <p>
               To log in with Google and access the product page, simply click on the "Sign in with Google" button, which will direct you to a Google login screen. After successfully authenticating your credentials, you'll be redirected to the product page where you can explore and purchase items seamlessly.
               </p>
            </div>
            
         </div>
         <div>
            <img className=' rounded-2xl' src="https://img.freepik.com/premium-vector/secure-login-sign-up-concept-illustration-user-use-secure-login-password-protection-website-social-media-account-vector-flat-style_7737-2270.jpg?w=900" alt="image" />
         </div>
      </div>
    </div>
   </>
  )
} 


export default page
