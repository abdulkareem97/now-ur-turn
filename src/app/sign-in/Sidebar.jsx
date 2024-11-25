'use client'
import { useState } from "react";

const main_sidebar_links = [
    {
      id: 1,
      title: "Active Users",
    //   data: generateChartData(),
    },
    {
      id: 2,
      title: "New Sign-Up",
    //   data: generateChartData(),
    },
    {
      id: 3,
      title: "Courses",
    //   data: generateChartData(),
    },
    {
      id:4,
      title:'Contributors Community'
    },
    {
      id: 5,
      title: "Discuss",
    //   data: generateChartData(),
    },
    {
      id: 6,
      title: "Challenges",
    //   data: generateChartData(),
    },
    {
      id: 7,
      title: "Jobs",
    //   data: generateChartData(),
    },
    {
      id: 8,
      title: "Projects",
    //   data: generateChartData(),
    },
    {
      id: 9,
      title: "My Profile",
    //   data: generateChartData(),
    },
    {
      id: 10,
      title: "Pro Benefits",
    //   data: generateChartData(),
    },
    {
      id: 11,
      title: "Notifications",
    //   data: generateChartData(),
    },
    {
      id: 12,
      title: "Online Internships",
    //   data: generateChartData(),
    },
    {
      id: 13,
      title: "Certifications",
    //   data: generateChartData(),
    },
    {
      id: 14,
      title: "Wallet",
    //   data: generateChartData(),
    },
    {
      id: 15,
      title: "Help Center",
    //   data: generateChartData(),
    },
    {
      id: 16,
      title: "Report Issues",
    //   data: generateChartData(),
    },

  ];


const Sidebar = () => {
  const [selectedSpec, setSelectedSpec] = useState(main_sidebar_links[0]);

  const handleSidebarClick = (spec) => {
    setSelectedSpec(spec);
    // buildChart({ data: spec.data });
  };

  return (
    <aside id="ms" className=" space-y-[8px] overflow-auto font-semibold  ">
      {main_sidebar_links.map((spec) => (
        <button
          key={spec.id}
          onClick={() => handleSidebarClick(spec)}
          className={`bg-[#1C202C] flex active:bg-[#00d8ff] active:text-black  justify-center items-center text-xl rounded-[8px] h-[40px] w-[320px] 
                    border-[2px] border-[#1C202C] hover:border-[#00d8ff] hover:text-[#00d8ff]  ${
            selectedSpec.id === spec.id ? "bg-white text-black" : "bg-gray-800 text-white"
          }`}
        >
          {spec.title}
        </button>
      ))}
    </aside>
  );
};

export default Sidebar;
