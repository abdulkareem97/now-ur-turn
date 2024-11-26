import React, { useState } from 'react'

function ChangePasssword({setHeading,setRenderComponent}) {

  const[disabled,setDisabled]=useState(true)
  const[changeData,setChangeData]=useState({

    currPassword:'',
    newPassword:'',
    newPassword2:''

  })


  setHeading('Change Password')
    
    const profile1 = {
        currentPassword: 'jhdgfsj',
        newPassword: 'Carsfjhsjtel',
        
      };
    
      const profTitle = {
      currentPassword:'Current Password',
      newPassword:'New Password',
      
      };

      const handleChange=(e,key)=>{

        changeData[key]=e.target.value
        let mt=true
        Object.values(changeData).map((ele)=>{
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

      
      const [profile, setProfile] = useState(Object.entries(profile1).map(([key, value]) => {
        return { value, label: profTitle[key] };
    }));
  return (
    <>
<div className="bg-[#1C202C] flex flex-col justify-center items-center w-[700px] mx-auto border-[2px] border-[#2a2f41]  rounded-[8px] p-[12px] ">
        
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
                className=" placeholder:text-[#6290c0] w-full mt-[6px] h-[40px] p-[12px] rounded-[8px] outline-none bg-[#0D0D19] "
              
                onChange={(e)=>handleChange(e,'currPassword')}
               
              />
            </div>

            <div className="w-full  rounded-[8px] py-[12px]">
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
                className=" placeholder:text-[#6290c0] w-full mt-[6px]  h-[40px] p-[12px] rounded-[8px] outline-none bg-[#0D0D19] "
                onChange={(e)=>handleChange(e,'newPassword')}
               
              />
            </div>

            <div className="w-full  rounded-[8px]">
              <input
                type="text"
                name={profTitle.currentPassword}
                id={profTitle.currentPassword}
                placeholder="Type here"
                className=" placeholder:text-[#6290c0] w-full  h-[40px] p-[12px] rounded-[8px] outline-none bg-[#0D0D19] "
                onChange={(e)=>handleChange(e,'newPassword2')}
               
              />
            </div>
          </div>
         
      </div> 
      <div className={disabled?' mx-auto text-center bg-[#6290c0]  rounded-[8px] p-[12px] font-semibold mt-[36px] w-[700px] h-[40px]':'bg-[#1C202C]  mx-auto text-center  p-[12px] mt-[36px]  hover:border-[2px] hover:border-[#00D8FF] hover:text-[#00D8FF] active:bg-[#00d8ff] active:text-black w-[700px] rounded-[8px] font-semibold'}><button disabled={disabled} onClick={()=>setRenderComponent(1)}>Save Password</button></div>

          <div className='mx-auto text-center font-semibold bg-[#1C202C] rounded-[8px] px-[12px] mt-[12px] w-[700px] hover:border-[2px]  border-[#00D8ff] hover:text-[#00d8ff] active:bg-[#00d8ff] active:text-black h-[40px] flex justify-center' ><button onClick={()=>setRenderComponent(1)} className='w-full'>Cancel</button></div>

        <div className='mx-auto text-center bg-[#1C202C] font-semibold rounded-[8px] px-[12px] mt-[36px] w-[700px] hover:border-[2px]  border-[#00D8ff] hover:text-[#00d8ff] h-[40px] flex justify-center'><button onClick={()=>setRenderComponent(7)} className='w-full'>Forget Password</button></div>
      </>
       )
}

export default ChangePasssword