'use client'
import React, { useState } from 'react'
import ComUserProfile from './ComUserProfile'
import ComJobTable from './ComJobTable'
import ComAddJob from './ComAddJob'
import ComGetJob from './ComGetJob'

const Page = () => {
  const [renderComponent, setRenderComponent] = useState(1)
  const [heading,setHeading] = useState('Jobs')
  return (
    <>
     <main className={`w-full py-[40px] bg-[#0D0D19] ${renderComponent==2 ? 'h-[calc(100vh-50px)] overflow-y-auto' : ''}`}>
                      
                   
      <h1 className="text-[#FFE683] text-[16px] text-center font-semibold" style={{ color: "#ffe683" }}>
        {heading}
      </h1>
      <div className="content px-[40px] mt-[60px] ">
        {
          renderComponent == 1 ? <ComJobTable setRenderComponent={setRenderComponent} setHeading={setHeading} src={2} src1={3} /> : renderComponent == 2 ? <ComAddJob setRenderComponent={setRenderComponent} setHeading={setHeading} src={1} /> : renderComponent == 3 ? <ComGetJob page={'jobs'} setRenderComponent={setRenderComponent} setHeading={setHeading} src={1} src1={4}/> : renderComponent == 4 ? <ComUserProfile setRenderComponent={setRenderComponent} setHeading={setHeading} src={3}  /> : <></>
        }
      </div>
      </main>


    </>
  )
}

// "next": "15.0.1",
// "react": "19.0.0-rc-69d4b800-20241021",
// "react-country-state-city": "^1.1.6",
// "react-dom": "19.0.0-rc-69d4b800-20241021",
// "react-icons": "^5.3.0"

export default Page
