import React, { useState } from 'react'

function ChangePasssword({setHeading,setRenderComponent}) {

  setHeading('Change Password')
    
    const profile1 = {
        currentPassword: 'jhdgfsj',
        newPassword: 'Carsfjhsjtel',
        
      };
    
      const profTitle = {
      currentPassword:'Current Password',
      newPassword:'New Password',
      
      };

      
      const [profile, setProfile] = useState(Object.entries(profile1).map(([key, value]) => {
        return { value, label: profTitle[key] };
    }));
  return (
    <>
<div className="flex flex-col justify-center items-center w-fit mx-auto border-[2px] border-[#2a2f41]  rounded-[8px] p-[12px] ">
        
          <div  className="w-full">
            <div className="w-full  rounded-[8px]">
              <label
                htmlFor={profTitle.currentPassword}
                className="text-[#FFE683]  inline-block  "
              >
                
                {profTitle.currentPassword}
              </label>
              <br  />
              <input
                type="text"
                name={profTitle.currentPassword}
                id={profTitle.currentPassword}
                placeholder="Type here"
                className=" placeholder:text-[#6290c0] w-[400px] mt-[6px] h-[30px] p-[12px] rounded-[8px] outline-none bg-[#03030c] "
               
              />
            </div>

            <div className="w-full  rounded-[8px] py-[24px]">
              <label
                htmlFor={profTitle.newPassword}
                className="text-[#FFE683]  inline-block "
              >
                
                {profTitle.newPassword}
              </label>
              <br />
              <input
                type="text"
                name={profTitle.newPassword}
                id={profTitle.newPassword}
                placeholder="Type here"
                className=" placeholder:text-[#6290c0] w-[400px] mt-[6px]  h-[30px] p-[12px] rounded-[8px] outline-none bg-[#03030c] "
               
              />
            </div>

            <div className="w-full  rounded-[8px]">
              <input
                type="text"
                name={profTitle.currentPassword}
                id={profTitle.currentPassword}
                placeholder="Type here"
                className=" placeholder:text-[#6290c0] w-[400px]  h-[30px] p-[12px] rounded-[8px] outline-none bg-[#03030c] "
               
              />
            </div>
          </div>
         
      </div> 
      <div className='mx-auto text-center bg-[#03030c] rounded-[8px] p-[12px] font-semibold mt-[36px] w-[400px] hover:border-[2px]  border-[#00D8ff] hover:text-[#00d8ff] active:bg-[#00d8ff] active:text-black'><button>Save Password</button></div>
          <div className='mx-auto text-center font-semibold bg-[#03030c] rounded-[8px] p-[12px] mt-[12px] w-[400px] hover:border-[2px]  border-[#00D8ff] hover:text-[#00d8ff] active:bg-[#00d8ff] active:text-black'><button>Cancel</button></div>

        <div className='mx-auto text-center bg-[#03030c] font-semibold rounded-[8px] p-[12px] mt-[36px] w-[400px] hover:border-[2px]  border-[#00D8ff] hover:text-[#00d8ff] '><button onClick={()=>setRenderComponent(7)}>Forget Password</button></div>
      </>
       )
}

export default ChangePasssword