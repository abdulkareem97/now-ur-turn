'use client'
import React, { useEffect, useState } from 'react'
// import data from '../data'
import Image from 'next/image'
import BackBlack from '../components/BackBlack';
import DropDownSvg from '../components/DropDownSvg';
import { IoReloadCircleSharp } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";
import { FaSearch } from 'react-icons/fa';

const allLogs = [
    {
        accountId: '#A0000000959',
        date:'21 Jan 2023',
        time:'16:44',
        events:'/home',
      
    },
    {
        accountId: '#A0000000959',
        date:'21 Jan 2023',
        time:'16:44',
        events:'/home',
      
    },
    {
        accountId: '#A0000000959',
        date:'21 Jan 2023',
        time:'16:44',
        events:'/home',
      
    },
    

]
const LogHistoryTable = ({ setRenderComponent, setHeading, setAppliedJobBack }) => {
    const [data,setData]= useState([...allLogs])
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
        // setHeading('Resume')
    }, []);
    const [isOpen, setIsOpen] = useState(false);
    const [com, setCom] = useState(1);
    let dropDownOption = [
      'Today',
      'Past 2 days',
      'Past 7 days',
      'Past 15 days',
      'Past 30 days',
      'Past 60 days',
      'Past 90 days',
      'Past 180 days',
      'Past 365 days',
      'Past 730 days',
      'All time'

    ]
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-60 z-10" onClick={() => { setIsOpen(false) }}></div>
            )}

            <div className="relative">
                <div className='flex justify-between text-white  text-[14px]'>
                    <div className='flex space-x-[12px]'>

                    <div className='bg-[#1C202C] flex active:bg-[#00d8ff] active:text-black  justify-center items-center text-xl rounded-[8px] h-[40px] w-[40px] 
                    border-[2px] border-[#1C202C] hover:border-[#00d8ff] hover:text-[#00d8ff]

                    
                    
                    '  onClick={() => setRenderComponent(src)}
                        >
                            <span className=''>
                            <TfiReload />
                            </span>
                        </div>
                    <div className="relative inline-block text-left z-20">
                            {/* Dropdown Button */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`bg-[#1C202C] text-white h-[40px] px-[12px] rounded-[8px] flex items-center  hover:border-2 active:bg-[#00d8ff] active:text-black   hover:border-[#00d8ff] focus:outline-none w-[200px] justify-between ${isOpen ? 'border-[#00d8ff] border-2' : ''} group `}
                            >
                                <span>
                                    {
                                        // com == 1 ? 'All Jobs' : com == 2 ? 'Data Access' : 'Chat Conversations'
                                        dropDownOption[com]
                                    }

                                </span>
                                <span className={`${isOpen ? 'text-[#00d8ff]' : ''} group-hover:text-[#00d8ff]`}>
                                    <DropDownSvg />
                                </span>
                            </button>

                            {/* Dropdown Menu */}
                            {isOpen && (
                                <div className="absolute z-30 mt-[12px] w-[200px] bg-[#1C202C] text-white rounded-[8px] shadow-lg border-2 border-gray-700">
                                    <ul className="py-1">
                                        {

                                            dropDownOption.map((ele, ind) => {
                                                return (
                                                    <li className="px-[12px] py-2  hover:text-[#87ceeb] active:text-[#00d8ff] cursor-pointer "
                                                        key={ind}
                                                        onClick={() => {
                                                            setCom(ind)
                                                            setIsOpen(false)
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
                    <div>
                    <div className="relative">
                            <input
                                className="bg-[#1C202C] rounded-[8px]  px-[12px] text-white resize-none overflow-hidden h-auto min-h-[40px] placeholder:text-[#6290c0] placeholder:opacity-90  w-[350px]"
                                // onChange={(e) => searchTextMethod(e.target.value)}
                                placeholder="Search"
                            />
                            <FaSearch className="absolute right-[12px] top-1/2 transform -translate-y-1/2 text-[#6290c0]" />
                        </div>
                     
                    </div>



                </div>
                <div className='mt-[12px] flex space-x-[40px] text-white text-[14px] h-[73vh]'>
                    <div className="bg-[#1C202C] border-2 overflow-auto border-[#FFFFFF] rounded-[16px] w-full">
                        <LogHTable setRenderComponent={setRenderComponent} setAppliedJobBack={setAppliedJobBack} data={data} />
                    </div>

                </div>
            </div>


        </>
    )
}
const LogHTable = ({ setRenderComponent,setAppliedJobBack,data }) => {
 
    return (
        <div className="overflow-auto">
            <table className=" w-full bg-[#1C202C] rounded-lg border border-[#2A2F41]">
                <thead>
                    <tr className="h-[40px]">
                      
                      
                        <th className="px-[12px] text-[#FFE683] border-r border-b-[2px] border-[#2A2F41] border-b-[#ffffff] border-r-[#ffffff] w-[200px]">Date</th>
                        <th className="px-[12px] text-[#FFE683] border-r border-b-[2px] border-[#2A2F41] border-b-[#ffffff] border-r-[#ffffff] w-[200px]">Time</th>
                        <th className="px-[12px] text-[#FFE683] border-r border-b-[2px] border-[#2A2F41] border-b-[#ffffff] border-r-[#ffffff] w-[200px]">Account ID</th>
                      
                        <th className="px-[12px] text-[#FFE683] border-r border-b-[2px] border-[#2A2F41] border-b-[#ffffff] border-r-[#ffffff]">Events</th>
                      
                    </tr>
                </thead>

                <tbody>
                    {data.map((ele, i) => {
                        let color = i % 2 === 0 ? 'bg-[#161923]' : 'bg-[#1C202C]';
                        return (
                            <tr key={i} className={`${color} h-[40px]`}>
                            <td className="px-[12px] text-center border-r border-b border-[#2A2F41] border-r-[#ffffff]">{ele.date}</td>
                            <td className="px-[12px] text-center border-r border-b border-[#2A2F41] border-r-[#ffffff]">{ele.time}</td>
                            
                                <td
                                className="px-[12px] text-center border-r border-b border-[#2A2F41] border-r-[#ffffff]"
                                    // className="px-[12px] text-center border-r border-b border-[#2A2F41] hover:text-[#87ceeb] active:text-[#00d8ff] cursor-pointer border-r-[#ffffff]"
                                    // onClick={() => {
                                    //     if (setAppliedJobBack) {


                                    //         setAppliedJobBack(0)
                                    //     }
                                    //     setRenderComponent(3)

                                    // }}
                                >
                                    {ele.accountId}
                                </td>
                              
                            
                                <td className="px-[12px] text-center  border-b border-[#2A2F41] ">{ele.events}</td>
                               
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};





export default LogHistoryTable
