import React, { useState } from 'react'

function ForgetPassword({setHeading,setRenderComponent}) {
    setHeading('Forget Password')
    const[newPassword,setNewPassword]=useState({
        nP:'',
        sNP:''

    })

    const handleChange=(e)=>{
        const{name,value}=e.target
        setNewPassword((prev)=>({...prev,[name]:value}))
    }

    const handleClick=()=>{
        setRenderComponent(1)
        setHeading('Panel Setting')

        
    }

   
  return (
    <>
    <div className="flex flex-col justify-center items-center w-fit mx-auto border-[2px] border-gray-800 rounded-[8px] p-[12x] ">
            
               
    
                <div className="w-full  rounded-[8px] p-[12px] ">
                  <label
                    className="text-[#FFE683]  inline-block "
                  >
                    New Password
                  </label>
                  <br />
                  <input
                    type="text"
                    name='nP'
                    value={newPassword.nP}
                    onChange={handleChange}

                    placeholder="Enter your new password"
                    className=" placeholder:text-[#6290c0] w-[400px] mt-[6px]  p-[12px] rounded-[8px] outline-none bg-[#03030c] "
                   
                  />
                </div>
    
                <div className="w-full rounded-[8px] px-[12px] pb-[12px]">
                  <input
                    type="text"
                    name='sNP'
                    value={newPassword.sNP}
                    onChange={handleChange}
                    placeholder="Re-enter your new password"
                    className=" placeholder:text-[#6290c0] w-[400px]  p-[12px] rounded-[8px] outline-none bg-[#03030c] "
                   
                  />
                </div>
             
          </div> 
          <div className={`mx-auto text-centera font-semibold rounded-[8px] p-[12px] mt-[36px] w-[400px] hover:border-[2px]  border-[#00D8ff] hover:text-[#00d8ff] active:bg-[#00d8ff] active:text-black`} onClick={handleClick}><button>Save Password</button></div>

              <div className='mx-auto text-center bg-[#03030c] rounded-[8px] p-[12px] mt-[12px] w-[400px] font-semibold'><button>Cancel</button></div>
    
       
          </>
  )
}

export default ForgetPassword