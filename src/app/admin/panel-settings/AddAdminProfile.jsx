import React, { useState } from 'react';

function AddAdminProfile({ setHeading, profiles, setProfiles,setRenderComponent }) {
  const [newProfile, setNewProfile] = useState({
    firstName: '',
    lastName: '',
    loginId: '',
    emailAddress: '',
    password: ''
  });

  const profTitle = {
    firstName: 'First Name',
    lastName: 'Last Name',
    loginId: 'Login ID',
    emailAddress: 'Email Address',
    password: 'Password'
  };

  // Update the page heading
  React.useEffect(() => {
    setHeading('Add Admin Profile');
  }, [setHeading]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Validation to check if all fields are filled
    const isComplete = Object.values(newProfile).every((field) => field.trim() !== '');
    if (!isComplete) {
      return;
    }
  
    const formattedProfile = Object.entries(newProfile).map(([key, value]) => ({
      key,
      value,
      label: profTitle[key]
    }));
  
    // Add the new formatted profile to the profiles array
    setProfiles((prevProfiles) => [...prevProfiles, formattedProfile]);
  setRenderComponent(1)
    // Clear the form
    setNewProfile({
      firstName: '',
      lastName: '',
      loginId: '',
      emailAddress: '',
      password: ''
    });
  };


  

  const handleCancel = () => {
    // Clear inputs
    setNewProfile({
      firstName: '',
      lastName: '',
      loginId: '',
      emailAddress: '',
      password: ''
    });
    setRenderComponent(1)
  };

  return (
    <>
    <div className="bg-[#1C202C] flex flex-col items-center pt-[12px] mx-auto border-[2px] border-[#2a2f41] pb-[12px] rounded-[8px] p-[12px] space-y-[12px] w-[700px]">

      {Object.entries(profTitle).map(([key, label]) => (
        <div key={key} className="w-full">
          <div className="w-full space-x-[12px] bg-[#0D0D19] rounded-[8px] flex items-center">
            <label
              htmlFor={key}
              className="text-[#FFE683] w-[144px] inline-block px-[12px]"
            >
              {label}
            </label>
            <span>:</span>
            <input
              type="text"
              name={key}
              id={key}
              placeholder={`Enter ${label}`}
              className="bg-transparent placeholder:text-[#6290c0] w-[300px] h-[40px] outline-none"
              onChange={handleChange}
              value={newProfile[key]}
            />
          </div>
        </div>
      ))}

      {/* Action Buttons */}
     
    </div>
    <div className="w-fit mx-auto mt-[40px] space-y-[12px]">
        <div
          className={` ${newProfile.password.length>=1? 'bg-[#1C202C] hover:border-[2px] hover:border-[#00D8FF] hover:text-[#00D8FF] active:bg-[#00d8ff] active:text-black  rounded-[8px] font-semibold ':'bg-[#6290c0]'} text-center h-[40px] font-semibold flex justify-center rounded-[8px] w-[700px] `}
        >
          <button className="w-full" onClick={handleSave} disabled={newProfile.password.length<1}>
            Save
          </button>
        </div>
        <div className="ttext-center my-[12px] h-[40px] flex justify-center font-semibold bg-[#1C202C] rounded-[8px] hover:border-[2px] hover:border-[#00D8FF] hover:text-[#00D8FF] active:bg-[#00d8ff] active:text-black">
          <button onClick={handleCancel} className='w-full'>Cancel</button>
        </div>
      </div>
    </>
  );
}

export default AddAdminProfile;
