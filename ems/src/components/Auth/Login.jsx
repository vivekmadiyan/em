import React, { useState } from 'react'

function Login() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')



const submitHandler=(e) =>{
e.preventDefault();
console.log("email is",email);  
console.log("password is",password);  
setEmail("");
setPassword("") ;  
}


return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
       <form onSubmit={(e)=>{submitHandler(e)}}
       className='flex flex-col items-center justify-center '>
         <input value={email} onChange={(e)=>{setEmail(e.target.value)}}
          required className='  outline-none ng-transparent border-2 border-emerald-600  text-xl py-3 px-5 rounded-full placeholder:text-gray-400 ' type="email" placeholder='Enter Your Email'/>
         
         <input value={password} required onChange={(e)=>{setPassword(e.target.value)}}

          className='  outline-none bg-transparent border-2 border-emerald-600  text-xl py-3 px-5 rounded-full placeholder:text-gray-400 mt-3' type="password" placeholder='Enter Password' />
         <button className='text-white outline-none border-none bg-emerald-600  text-xl py-3 px-5 rounded-full  mt-5'>Log in</button>
       </form>
        </div>
    
    </div>
  )
}

export default Login
