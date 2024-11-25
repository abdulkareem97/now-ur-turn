"use client";
import React, { useState } from "react";
import Signin from "./signin";
import VerificationPage from "./Verification";
import Dashboard from "./Dashboard";
import Image from "next/image";


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
     <nav className="flex  bg-[#1C202C] text-white justify-start items-center h-[50px] w-screen px-[24px] z-10  ">
                    <div className="h-10 w-10 overflow-hidden">
                        <Image
                            src="/static/assets/logo.png"
                            alt="logo"
                            className="block object-cover size-full"
                            width={40}
                            height={40}
                        />
                    </div>
                    <h1 className="font-semibold text-[20px] px-[6px]">
                        Now<span className="text-pink-500 text-[20px]">Ur</span>Turn
                    </h1>
                </nav>
       <main className={`w-full py-[40px] bg-[#0D0D19] ${renderComponent==2 ? 'h-[calc(100vh-50px)] overflow-y-auto' : ''}`}>
                      
                   
                      <h1 className="text-[#FFE683]  text-[16px] text-center font-semibold" style={{ color: "#ffe683" }}>
                        {heading}
                      </h1>
                      <div className="content px-[40px] mt-[60px] h-[calc(84vh-50px)]">
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
