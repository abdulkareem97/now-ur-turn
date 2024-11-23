"use client";
import React, { useState } from "react";
import Signin from "./signin";
import VerificationPage from "./Verification";
import Dashboard from "./Dashboard";


function Page() {
  const [renderComponent, setRenderComponent] = useState(1);
  const [heading, setHeading] = useState("Sign In");



  const renderCurrentComponent = () => {
    switch (renderComponent) {
      case 1:
        return (
          <Signin
            setRenderComponent={setRenderComponent}
            setHeading={setHeading}
        
          />
        );
        case 2:
            return(
                <VerificationPage setHeading={setHeading} setRenderComponent={setRenderComponent}/>
            )

        case 3:
            return(<Dashboard setHeading={setHeading} />)
  
      default:
        return null;
    }
  };

  return (
    <>
       <main className={`w-full py-[40px] bg-[#0D0D19] ${renderComponent==2 ? 'h-[calc(100vh-50px)] overflow-y-auto' : ''}`}>
                      
                   
                      <h1 className="text-[#FFE683] text-[16px] text-center font-semibold" style={{ color: "#ffe683" }}>
                        {heading}
                      </h1>
                      <div className="content px-[40px] mt-[60px] ">
                      {
                        renderCurrentComponent()
                      }
                
                       
                
                       
                      </div>
                      </main>
      {/* <main
        className={`w-full py-[40px]  ${
          renderComponent === 2 ? "h-[calc(100vh-50px)] overflow-y-auto" : ""
        }`}
      >
        <h1
          className="text-[#FFE683] text-[16px] text-center font-semibold"
          style={{ color: "#ffe683" }}
        >
          {heading}
        </h1>

        <div className="content px-[40px] mt-[60px]">{renderCurrentComponent()}</div>
      </main> */}
    </>
  );
}

export default Page;
