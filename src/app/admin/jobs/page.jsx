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
      <h1 className="text-[#FFE683] text-[16px] text-center font-semibold" style={{ color: "#ffe683" }}>
        {heading}
      </h1>
      <div className="content px-[40px] mt-[60px] ">
        {
          renderComponent == 1 ? <ComJobTable setRenderComponent={setRenderComponent} setHeading={setHeading} /> : renderComponent == 2 ? <ComAddJob setRenderComponent={setRenderComponent} setHeading={setHeading} /> : renderComponent == 3 ? <ComGetJob setRenderComponent={setRenderComponent}setHeading={setHeading} /> : renderComponent == 4 ? <ComUserProfile setRenderComponent={setRenderComponent}setHeading={setHeading} /> : <></>
        }
      </div>


    </>
  )
}

export default Page
