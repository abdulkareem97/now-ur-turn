'use client'
import React, { useState } from "react";
import DropDownSvg from "../components/DropDownSvg";
import { TfiReload } from "react-icons/tfi";


const dataOption = {
  'Year': '',
  'Month': '',
  'Date': '',
}


const Dashboard = ({ setHeading }) => {
  setHeading("Dashboard")
  const hours = Array.from({ length: 24 }, (_, i) => i + 1);
  const array = ['Active Users', 'New Sign-Up', 'Courses', 'Contributors Community', 'Discuss', 'Challenges', 'Jobs', 'Projects', 'My Profile', 'Pro Benifits', 'Notification', 'Online Interships', 'Certifications', 'Wallet', 'Help Center', 'Report Issues']

  const [data1, setData1] = useState(dataOption)
  const dropdownYear = [
    '2025',
    '2026'
  ]
  const dropdownMonth = [
    'June',
    'July'
  ]
  const dropdownDate = [
    '2',
    '3'
  ]
  const [year, setYear] = useState('Year')
  const [month, setMonth] = useState('Month')
  const [date, setDate] = useState('Date')
  let getOptionValue = {
    'Year': year,
    'Month': month,
    'Date': date,
    'Year set': setYear,
    'Month set': setMonth,
    'Date set': setDate,
    'Year option': dropdownYear,
    'Month option': dropdownMonth,
    'Date option': dropdownDate,

  }
  const [showOption, setShowOption] = useState('')
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
      setIsLoading(true);
      // Simulate a process (e.g., API call)
      setTimeout(() => {
          setIsLoading(false);
      }, 3000); // Spinner will stop after 3 seconds
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-10" onClick={() => { setIsOpen(false); setShowOption('') }}></div>
      )}

      <div className="relative mb-[12px]">
        <div className='flex space-x-[12px] text-white  text-[14px]'>
        <div
                            className={`bg-[#1C202C] flex justify-center items-center text-xl rounded-[8px] h-[40px] w-[40px] 
                  border-[2px] border-[#1C202C] hover:border-[#00d8ff] hover:text-[#00d8ff]
                  active:bg-[#00d8ff] active:text-black
                 }
                 `}
                            onClick={() => {
                                handleClick();
                                // Set the component to render here (replace src with your logic)
                                console.log("Component clicked!");
                            }}
                        >
                            <span className={`${isLoading ? "animate-spin" : ""}`}>
                                <TfiReload />
                            </span>
                        </div>
          {
            Object.entries(data1).map(([key, value], ind) => {


              return (

                <div className='w-[100px]' key={key}>
                  <div className={`relative inline-block text-left ${showOption == key ? 'z-20' : ''} w-full`}>
                    {/* Dropdown Button */}
                    <button
                      onClick={() => {
                        setShowOption(key)
                        setIsOpen(true);
                      }
                      }
                      className={`bg-[#1C202C] text-white h-[40px] w-full px-[12px] rounded-[8px] flex items-center  hover:border-2 active:bg-[#00d8ff] active:text-black   hover:border-[#00d8ff] focus:outline-none  justify-between ${showOption == key ? 'border-[#00d8ff] border-2' : ''} group `}
                    >
                      <span
                        className={`${(key == getOptionValue[key]) ? 'text-[#6290C0]' : ''}`}
                      >

                        {
                          // com == 1 ? 'All Jobs' : com == 2 ? 'Data Access' : 'Chat Conversations'

                          getOptionValue[key]
                          // getOptionValue[key + ' option'].toString()
                          // getOptionValue['Workplace option'][1]
                        }

                      </span>
                      <span className={`h-[15px] w-[15px]  ${showOption == key ? 'text-[#00d8ff]' : ''} group-hover:text-[#00d8ff]`}>
                        <DropDownSvg />
                      </span>
                    </button>

                    {/* Dropdown Menu */}
                    {showOption == key && (
                      <div className="absolute z-30 mt-[12px] w-full bg-[#1C202C] text-white rounded-[8px] shadow-lg border-2 border-gray-700">
                        <ul className="py-1">
                          {

                            getOptionValue[key + ' option'].map((ele, ind) => {
                              return (
                                <li key={key} className="px-[12px] py-2  hover:text-[#87ceeb] active:text-[#00d8ff] cursor-pointer "
                                  onClick={() => {
                                    getOptionValue[key + ' set'](ele)
                                    setIsOpen(false)
                                    setShowOption('')
                                  }}
                                >{ele}</li>
                              )
                            })
                          }

                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )
            }
            )}
        </div>
      </div>
      <div className="flex gap-[12px]">
        <div >
          <div className="flex w-[68vw] h-[80vh] ">
            {hours.map((hour) => (
              <div
                key={hour}
                className={`flex-1 flex justify-center items-center text-white ${hour % 2 === 0 ? "bg-[#03030c]" : "bg-[#1c202c]"
                  }`}
              >
              </div>
            ))}
          </div>
          <div className="flex w-[68vw] h-[24px]">
            {hours.map((hour) => (
              <div
                key={hour}
                className={`flex-1 flex justify-center items-center text-white font-semibold  p-[12px]`}
              >

                <div className="">
                  {hour < 10 ? `0${hour}` : hour == 24 ? `00` : hour}
                </div>
              </div>

            ))}
          </div>
        </div>
        <div className="w-[300px] h-[80vh] overflow-y-auto">
          {array.map((data, i) => (
            <div className=" w-full mb-[6px] px-[12px] font-semibold " key={i}>
              <button className={`p-[12px] w-full ${i == 0 ? "bg-[white] text-black" : "bg-[#1c202c] text-white"} rounded-[8px]`}>{data}</button>
            </div>

          ))}

        </div>
      </div>

    </>
  );
};

export default Dashboard;
