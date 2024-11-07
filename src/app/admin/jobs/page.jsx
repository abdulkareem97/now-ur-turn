'use client'
import React, { useState } from 'react'
import ComUserProfile from './ComUserProfile'
import ComJobTable from './ComJobTable'
import ComAddJob from './ComAddJob'
import ComGetJob from './ComGetJob'

const page = () => {
    const [renderComponent,setRenderComponent] = useState(3)
  return (
    <div>
        {
            renderComponent==1 ? <ComJobTable setRenderComponent={setRenderComponent} /> : renderComponent==2 ? <ComAddJob setRenderComponent={setRenderComponent} /> : renderComponent==3 ? <ComGetJob setRenderComponent={setRenderComponent} />:  renderComponent==4 ? <ComUserProfile setRenderComponent={setRenderComponent} />:<></>
        }
      
    </div>
  )
}

export default page
