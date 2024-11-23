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
  };

  return (
    <>
    <div className="flex flex-col items-center pt-[12px] w-fit mx-auto border-[2px] border-[#2a2f41] pb-[12px] rounded-[8px] p-[12px] space-y-[12px]">

      {Object.entries(profTitle).map(([key, label]) => (
        <div key={key} className="w-full">
          <div className="w-full space-x-[12px] bg-[#03030c] rounded-[8px] flex items-center">
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
          className={` ${newProfile.password.length>=1? 'bg-[#03030c]':'bg-[#6290c0]'} text-center h-[35px] font-semibold flex justify-center rounded-[8px] w-[480px] hover:border-[2px] border-[#00d8ff] hover:text-[#00d8ff] active:bg-[#00d8ff] active:text-black`}
        >
          <button className="w-full" onClick={handleSave}>
            Save
          </button>
        </div>
        <div className="text-center font-semibold my-[12px] h-[35px] flex justify-center bg-[#03030c] rounded-[8px] hover:bg-[#6290c0]">
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </>
  );
}

export default AddAdminProfile;