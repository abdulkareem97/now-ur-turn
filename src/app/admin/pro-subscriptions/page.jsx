'use client'
import React, { useState } from 'react'
import ProSubscriptionTable from './ProSubscriptionTable'



const Page = () => {
  const [renderComponent, setRenderComponent] = useState(1)
  const [heading,setHeading] = useState('Pro Subscriptions')
  return (
    <>
     <main className={`w-full py-[40px] bg-[#0D0D19] ${renderComponent==2 ? 'h-[calc(100vh-50px)] overflow-y-auto' : ''}`}>
                      
                   
      <h1 className="text-[#FFE683] text-[16px] text-center font-semibold" style={{ color: "#ffe683" }}>
        {heading}
      </h1>
      <div className="content px-[40px] mt-[60px] ">

       
{
    <ProSubscriptionTable setRenderComponent={setRenderComponent} setHeading={setHeading}/>
}

       
      </div>
      </main>


    </>
  )
}


export default Page
