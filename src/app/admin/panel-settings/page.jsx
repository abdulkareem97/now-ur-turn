"use client";
import React, { useState } from "react";
import PanelSettings from "./PanelSettings";
import AddAdminProfile from "./AddAdminProfile";
import EditCredential from "./EditCredential";
import ChangePasssword from "./ChangePasssword";
import VerificationPage from "./Verification";
import ForgetPassword from "./ForgetPassword";

function Page() {
  const [renderComponent, setRenderComponent] = useState(1);
  const [heading, setHeading] = useState("Panel Settings");
  const [verify, setVerify] = useState(0);
  const [selectedProfileIndex, setSelectedProfileIndex] = useState(null);
  const [editProfile, setEditProfile] = useState(null);

  const profilesData = [
    {
      firstName: "John",
      lastName: "Cartel",
      loginId: "ejhfseghefsgjfhdj",
      emailAddress: "johncartel@email.com",
      password: "sdhfgjshj",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      loginId: "jd123456",
      emailAddress: "janedoe@email.com",
      password: "janepass123",
    },

  ];

  const profTitle = {
    firstName: "First Name",
    lastName: "Last Name",
    loginId: "Login ID",
    emailAddress: "Email Address",
    password: "Password",
  };

  const [profiles, setProfiles] = useState(
    profilesData.map((profile) =>
      Object.entries(profile).map(([key, value]) => ({
        value,
        label: profTitle[key],
      }))
    )
  );

  const renderCurrentComponent = () => {
    switch (renderComponent) {
      case 1:
        return (
          <PanelSettings
            setRenderComponent={setRenderComponent}
            setHeading={setHeading}
            setVerify={setVerify}
            profiles={profiles}
            setProfiles={setProfiles}
            setEditProfile={setEditProfile}
            setSelectedProfileIndex={setSelectedProfileIndex}
          />
        );
      case 3:
        return (
          <AddAdminProfile
            setHeading={setHeading}
            profiles={profiles}
            setProfiles={setProfiles}
            setRenderComponent={setRenderComponent}
          />
        );
      case 5:
        return (
          <EditCredential
            setHeading={setHeading}
            setRenderComponent={setRenderComponent}
            editProfile={editProfile}
            profiles={profiles}
            setProfiles={setProfiles}
            index={selectedProfileIndex}
          />
        );
      case 4:
        return (
          <ChangePasssword
            setHeading={setHeading}
            setRenderComponent={setRenderComponent}
          />
        );
      case 7:
        return (
          <VerificationPage
            setHeading={setHeading}
            setRenderComponent={setRenderComponent}
            verify={verify}
          />
        );
      case 8:
        return (
          <ForgetPassword
            setHeading={setHeading}
            setRenderComponent={setRenderComponent}
            setVerify={setVerify}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <main
        className={`w-full py-[40px] bg-[#0D0D19] ${
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
      </main>
    </>
  );
}

export default Page;
