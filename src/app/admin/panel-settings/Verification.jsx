import React, { useState, useEffect, useRef } from "react";

const VerificationPage = ({setHeading,setRenderComponent,renderComponent,verify}) => {
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

  // Handle backspace key to move focus
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

  // Handle Resend Code
  const handleResend = () => {
    setResendTimer(30);
    setIsResendDisabled(true);
    // Add resend logic here
    console.log("Resend code!");
  };

  // Verify Code
  const handleVerify = () => {
    console.log("Entered OTP:", otp.join(""));
    console.log(renderComponent,verify)
    if(verify==1){
      setRenderComponent(1)
      setHeading('Panel Setting')

      return

    }else{
    setRenderComponent(8)
    }
    // Add verify logic here
  };

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
          className="w-[56px] h-[60px]  text-center text-2xl bg-[#03030c] text-white border-[2px]   border-[#2a2f41] rounded-[8px] focus:outline-none"
        />
      ))}
    </div>

    <button
      onClick={handleVerify}
      className={`py-[12px] mb-[12px] mt-[40px] w-[500px] bg-[#03030c] font-bold text-lg rounded-[8px] hover:border-2  border-[#00D8ff] ${otp[otp.length-1]!="" || verify==1 ? 'text-white' : 'text-[#00d8ff] ' }  hover:text-[#00d8ff]  active:bg-[#00d8ff] active:text-black`}
    >
      Verifya
    </button>

    <button
      onClick={handleResend}
      className='w-[500px] py-[12px] bg-[#6290c0] text-white  rounded-[8px] font-semibold  
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
