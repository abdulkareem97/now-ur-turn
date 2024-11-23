import React from "react";

const Dashboard = ({setHeading}) => {
    setHeading("Dashboard")
  const hours = Array.from({ length: 24 }, (_, i) => i+1); 
  const array = ['Active Users', 'New Sign-Up', 'Courses','Contributors Community','Discuss','Challenges','Jobs','Projects','My Profile','Pro Benifits','Notification','Online Interships','Certifications','Wallet','Help Center','Report Issues']

  return (
    <div className="flex gap-[12px]">
    <div >
    <div className="flex w-[75vw] h-[80vh] ">
      {hours.map((hour) => (
        <div
          key={hour}
          className={`flex-1 flex justify-center items-center text-white ${
            hour % 2 === 0 ? "bg-[#000000]" : "bg-[#1c202c]"
          }`}
        >
        </div>
      ))}
    </div>
    <div className="flex w-[75vw] h-[24px]">
      {hours.map((hour) => (
        <div
        key={hour}
        className={`flex-1 flex justify-center items-center text-white font-semibold  p-[12px]`}
      >
      
        <div className="">
        {hour < 10 ? `0${hour}` : hour==24 ? `00`:hour}
        </div>
        </div>
        
      ))}
    </div>
    </div>
    <div className="w-[12vw] h-[80vh]">
        {array.map((data,i)=>(
            <div className=" w-[100%] mb-[6px] px-[12px] font-semibold ">
            <button className={`p-[12px] w-[100%] ${i==0 ? "bg-[white] text-black":"bg-[#1c202c] text-white"} rounded-[8px]`}>{data}</button>
           </div>

        ))}
       
    </div>
    </div>
  );
};

export default Dashboard;
