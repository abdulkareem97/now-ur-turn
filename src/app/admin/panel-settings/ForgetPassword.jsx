import React, { useState } from 'react'

function ForgetPassword({setHeading,setRenderComponent}) {
    setHeading('Forget Password')
    const[newPassword,setNewPassword]=useState({
        nP:'',
        sNP:''

    })
    const[disabled,setDisabled]=useState(true)


    const handleChange=(e)=>{
        const{name,value}=e.target
        setNewPassword((prev)=>({...prev,[name]:value}))
        newPassword[name]=value

        let mt=true
        Object.values(newPassword).map((ele)=>{
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

    const handleClick=()=>{
        setRenderComponent(1)
        setHeading('Panel Setting')

        
    }

   
  return (
    <>
    <div className="flex flex-col justify-center items-center w-[700px] mx-auto border-[2px] border-gray-800 rounded-[16px] p-[12x] bg-[#1C202C] ">
            
               
    
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
                    className=" placeholder:text-[#6290c0] w-full mt-[6px]  h-[40px] px-[12px] rounded-[8px] outline-none bg-[#0D0D19]  "
                   
                  />
                </div>
    
                <div className="w-full rounded-[8px] px-[12px] pb-[12px]">
                  <input
                    type="text"
                    name='sNP'
                    value={newPassword.sNP}
                    onChange={handleChange}
                    placeholder="Re-enter your new password"
                    className=" placeholder:text-[#6290c0] w-full h-[40px] px-[12px] rounded-[8px] outline-none bg-[#0D0D19] "
                   
                  />
                </div>
             
          </div> 
          <div className=' flex justify-center'><button disabled={disabled} className={disabled?' mx-auto text-center bg-[#6290c0]  rounded-[8px] px-[12px] h-[40px] font-semibold mt-[36px] w-[700px] ':'h-[40px] bg-[#1C202C]  mx-auto text-center  px-[12px] mt-[36px]  hover:border-[2px] hover:border-[#00D8FF] hover:text-[#00D8FF] active:bg-[#00d8ff] active:text-black w-[700px] rounded-[8px] font-semibold'} onClick={handleClick}>Save Password</button></div>

              <div className='mx-auto text-center bg-[#1C202C] rounded-[8px] px-[12px] h-[40px] flex justify-center mt-[12px] w-[700px] font-semibold hover:border-[2px]  border-[#00D8ff] hover:text-[#00d8ff] active:bg-[#00d8ff] active:text-black' onClick={()=>setRenderComponent(4)}><button>Cancel</button></div>
    
       
          </>
  )
}

export default ForgetPassword