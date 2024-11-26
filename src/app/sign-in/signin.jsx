"use client"
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Signin({setRenderComponent,setHeading}) {
  const [password, setPassword] = useState({
    loginId:'',
    passowrd:''

  });
  const [showPassword, setShowPassword] = useState(false);
  const[disabled,setDisabled]=useState(true)


  const handleChange=(e)=>{
    const{name,value}=e.target
    setPassword((prev)=>({...prev,[name]:value}))
    password[name]=value

    let mt=true
    Object.values(password).map((ele)=>{
      if(ele.length===0){
        mt=false
      }
    })

    if(mt){
      setDisabled(false)


    }else{
      setDisabled(true)
    }
}
  

  
  

  return (
    <div className='h-[200px] flex items-center justify-center text-[14px]'>
      
    <div className="  ">
      <div className="mx-auto w-[700px]">
     
        <div className="space-y-[12px]">
          <div className="relative">
            <input
              type="text"
              placeholder="Login ID"
              name="loginId"
              value={password.loginId}
              onChange={handleChange}
              className="w-full h-[40px] bg-[#1C202C] text-white placeholder:text-[#6290c0] rounded-[8px]  px-[12px] py-[12px] border-[2px] border-[#2a2f41] focus:outline-none focus:ring-2 focus:ring-[#00d8ff]"
            />
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="passowrd"

              value={password.passowrd}
              onChange={handleChange}
              className="w-full bg-[#1C202C] h-[40px] text-white placeholder:text-[#6290c0] border-[2px] border-[#2a2f41] rounded-[8px]  px-[12px] py-[12px] mb-[12px] focus:outline-none focus:ring-2 focus:ring-[#00d8ff]"
            />
            <div
              className="absolute bottom-6 right-[12px] flex items-center cursor-pointer text-[#6290c0]"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash color='white'  /> : <FaEye color='white' />}
            </div>
          </div>

          <button
          disabled={disabled}
          className={disabled?'h-[40px] mx-auto text-center bg-[#6290c0] text-white  rounded-[8px] px-[12px] font-semibold mt-[36px] w-[700px] ':'h-[40px] bg-[#1C202C] text-white   mx-auto text-center  px-[12px] mt-[36px]  hover:border-[2px] hover:border-[#00D8FF] hover:text-[#00D8FF] active:bg-[#00d8ff] active:text-black w-[700px] rounded-[8px] font-semibold'} onClick={()=>setRenderComponent(2)} 
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Signin