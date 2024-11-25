"use client"
import Link from "next/link";
import { useState } from "react";
import Dashboard from "../sign-in/Dashboard";

export default function Home() {
  // const { profile, resume } = userData;
  const [heading, setHeading] = useState("Dashboard");


  return (
  

<main className={`w-full py-[40px] bg-[#0D0D19]`}>
                      
                   
                      <h1 className="text-[#FFE683] text-[16px] text-center font-semibold" style={{ color: "#ffe683" }}>
                        {heading}
                      </h1>
                      <div className="content px-[40px] mt-[60px] ">
                      <Dashboard setHeading={setHeading} />
                       
                
                       
                      </div>
                      </main>
   
  );
}
