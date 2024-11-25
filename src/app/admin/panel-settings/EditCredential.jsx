import React, { useState } from "react";

function EditCredential({ setHeading, setRenderComponent, editProfile, profiles, setProfiles, index }) {
  // Set the heading for the page
  setHeading("Edit Credential");

  const[disabled,setDisabled]=useState(true)

  // Titles for mapping labels to keys
  const profTitle = {
    firstName: "First Name",
    lastName: "Last Name",
    loginId: "Login ID",
    emailAddress: "Email Address",
    password: "Password",
  };

  // Initialize the profile state using the `editProfile` prop
  const [profile, setProfile] = useState(
    Object.keys(profTitle).map((key) => {
      const match = editProfile.find((item) => item.label === profTitle[key]);
      return {
        key,
        label: profTitle[key],
        value: match ? match.value : "",
      };
    })
  );

  // Handle input changes and update the profile state
  const handleChange = (key, newValue) => {

    setProfile((prevProfile) =>
      prevProfile.map((field) =>
        field.key === key ? { ...field, value: newValue } : field
      )
    );
    setDisabled(false)

  };

  // Handle save changes
  const handleSaveChanges = () => {
    // Reduce the `profile` state to an object matching the original structure
    const updatedProfile = profile.reduce((acc, field) => {
      acc[field.key] = field.value;
      return acc;
    }, {});

  
    // Map the updated profile to the required format
    const formattedProfile = Object.entries(updatedProfile).map(([key, value]) => ({
      label: profTitle[key],
      value,
    }));
  
    // Update the profiles array with the edited profile
    const updatedProfiles = [...profiles];
    updatedProfiles[index] = formattedProfile;
  
    console.log("Updated Profiles:", updatedProfiles);
  
    // Update the state and navigate back
    setProfiles(updatedProfiles);
    setRenderComponent(1);
  };
  


  return (
    <div>
      <div className="bg-[#1C202C] w-[700px] flex flex-col justify-center items-center pt-[px]  mx-auto border-[2px] border-[#2a2f41] pb-[12px] rounded-[8px] p-[12px] space-y-[12px]">
        {/* Render input fields for each profile attribute */}
        {profile.map((ele) => { 
          if(ele.label=="Password") return
           
          return(
          <div key={ele.key} className="w-full">
            <div className="w-full space-x-[32px] bg-[#0D0D19] rounded-[8px]">
              <label
                htmlFor={ele.key}
                className="text-[#FFE683] w-[144px] inline-block px-[12px]"
              >
                {ele.label}
              </label>
              <span>:</span>
              <input
                type="text"
                name={ele.key}
                id={ele.key}
                placeholder="Type here"
                className="bg-transparent placeholder:text-[#6290c0] w-[300px] h-[40px] outline-none"
                onChange={(e) => handleChange(ele.key, e.target.value)}
                value={ele.value}
              />
            </div>
          </div>
        )})}
      </div>
      {/* Save and Cancel buttons */}
      <div className="w-fit mx-auto mt-[40px]">
        <div className="text-center h-[40px] flex justify-center rounded-[8px] w-[700px]">
          <button disabled={disabled}
            className={ !disabled ? `bg-[#1C202C] hover:border-[2px] hover:border-[#00D8FF] hover:text-[#00D8FF] active:bg-[#00d8ff] active:text-black w-full rounded-[8px] font-semibold`:` bg-[#6290c0] w-full rounded-[8px] font-semibold`}
            onClick={handleSaveChanges}
          >
            Save Changes
          </button>
        </div>
        <div
          className="text-center my-[12px] h-[40px] flex justify-center font-semibold bg-[#1C202C] rounded-[8px] hover:border-[2px] hover:border-[#00D8FF] hover:text-[#00D8FF] active:bg-[#00d8ff] active:text-black"
          onClick={() => setRenderComponent(1)}
        >
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default EditCredential;
