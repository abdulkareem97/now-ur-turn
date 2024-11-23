"use client"
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Signin({setRenderComponent,setHeading}) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  

  return (
    <div className='bg-[#03030c]'>
    <div className="flex items-center justify h-[50vh] w-[80vw] ">
      <div className="mx-auto w-[400px]">
     
        <div className="space-y-[12px]">
          <div className="relative">
            <input
              type="text"
              placeholder="Login ID"
              className="w-full bg-[#03030c] text-white placeholder:text-[#6290c0] rounded-[8px] font-semibold px-[12px] py-[12px] border-[2px] border-[#2a2f41] focus:outline-none focus:ring-2 focus:ring-[#00d8ff]"
            />
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#03030c] text-white placeholder:text-[#6290c0] border-[2px] border-[#2a2f41] rounded-[8px] font-semibold px-[12px] py-[12px] mb-[24px] focus:outline-none focus:ring-2 focus:ring-[#00d8ff]"
            />
            <div
              className="absolute bottom-12 right-[12px] flex items-center cursor-pointer text-[#6290c0]"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash color='white' /> : <FaEye color='white' />}
            </div>
          </div>

          <button
            className={`w-full rounded-[8px]  font-semibold px-[12px] py-[12px] ${password.length>=1 ? "bg-[#1c202c]":"bg-[#6290c0]"} text-white hover:bg-[#03030c] hover:border-[2px] border-[#00d8ff] hover:text-[#00d8ff] active:bg-[#00d8ff] active:text-black `} onClick={()=>setRenderComponent(2)} 
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