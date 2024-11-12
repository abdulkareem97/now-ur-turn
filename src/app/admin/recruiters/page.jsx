'use client'
import React, { useState } from 'react'
import ComRecruitersTable from './ComRecruitersTable'
import ComUserProfile from '../jobs/ComUserProfile'
import ComGetJob from '../jobs/ComGetJob'


const Page = () => {
  const [renderComponent, setRenderComponent] = useState(1)
  const [heading,setHeading] = useState('Recruiters')
  return (
    <>
     <main className={`w-full py-[40px] bg-[#0D0D19] ${renderComponent==2 ? 'h-[calc(100vh-50px)] overflow-y-auto' : ''}`}>
                      
                   
      <h1 className="text-[#FFE683] text-[16px] text-center font-semibold" style={{ color: "#ffe683" }}>
        {heading}
      </h1>
      <div className="content px-[40px] mt-[60px] ">

        { 
          renderComponent == 1 ? <ComRecruitersTable setRenderComponent={setRenderComponent} setHeading={setHeading} src={3} /> :  renderComponent == 3 ? <ComGetJob setRenderComponent={setRenderComponent} setHeading={setHeading} page='recru' src={1} src2={4}/> :   renderComponent == 4 ? <ComGetJob setRenderComponent={setRenderComponent} setHeading={setHeading} page='jobs' src={3} src1={5} /> : renderComponent == 5 ? <ComUserProfile setRenderComponent={setRenderComponent} setHeading={setHeading}  src={4}/> : <></>
        }


       
      </div>
      </main>


    </>
  )
}


export default Page
