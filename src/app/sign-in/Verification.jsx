import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const VerificationPage = ({setHeading,setRenderComponent}) => {
  setHeading('Enter Verifcation Code')
  const [otp, setOtp] = useState(["", "", "", "", "",""]);
  const [resendTimer, setResendTimer] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  const inputRefs = useRef([]);

  // Handle input change
  const handleInputChange = (value, index) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value.slice(0, 1); // Ensure single-digit input
    setOtp(updatedOtp);

    // Focus the next input
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "") {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  // Resend Timer Logic
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsResendDisabled(false);
    }
  }, [resendTimer]);




  return (
    <div className="flex items-center justify-center h-[40vh]  text-white">
  <div className="flex flex-col items-centr ">
    <div className="flex gap-[12px] mb-[12px] justify-center ">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          value={digit}
          onChange={(e) => handleInputChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          maxLength="1"
          className="w-[56px] h-[60px]  text-center text-2xl bg-[#1C202C] text-white border-[2px]   border-[#2a2f41] rounded-[8px] focus:outline-none"
        />
      ))}
    </div>

    <button
    disabled={otp[otp.length-1]===""}
    className={`py-[12px] mb-[12px] mt-[40px] w-[700px] bg-[#1C202C] font-bold text-lg rounded-[8px] text-white  ${otp[otp.length-1]!="" ? 'hover:text-[#00d8ff] hover:border-2  border-[#00D8ff] active:bg-[#00d8ff] active:text-black' : ' bg-[#6290c0]' }`}
    >
      {otp[otp.length-1]!="" ? <Link  href='/admin'>Verify</Link>:'Verify'}
      
    </button>

    <button
      className='w-[700px] py-[12px] bg-[#6290c0] text-white  rounded-[8px] font-semibold  
'
    >
      Resend Code
    </button>

    <p className=" text-white mt-[12px]">Resend Code will be available in 59sec</p>
  </div>
</div>

  );
};

export default VerificationPage;
