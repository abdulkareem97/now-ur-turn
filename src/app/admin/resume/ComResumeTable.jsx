'use client'
import React, { useEffect, useState } from 'react'
// import data from '../data'
import Image from 'next/image'
import BackBlack from '../components/BackBlack';
import DropDownSvg from '../components/DropDownSvg';

const allResume = [
    {
        accountId: '#A0000000959',
        totalAppliedJobs: '0',
        memberSince: '19 Jan 2023',
        CreatedDate: '21 Jan 2023',
        ApprovalDate: '21 Jan 2023',
        inAcctiveForm: '-',
        rejectedDate: '-',
        resumeStatus: 'Active'
    },
 
]
const ComResumeTable = ({setRenderComponent,setHeading}) => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
        setHeading('Resume')
      }, []);
    const [isOpen, setIsOpen] = useState(false);
    const [com, setCom] = useState(1);
    let dropDownOption = [
        'All Resume',
        'Active Status',
        'Rejected Status',
        'Inactive Status',
        'Suspended Status'
    ]
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-60 z-10" onClick={() => { setIsOpen(false) }}></div>
            )}

            <div className="relative">
                <div className='flex justify-between text-white  text-[14px]'>
                    <div>
                       

                    </div>
                    <div>
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

                                            dropDownOption.map((ele,ind)=>{
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



            </div>
            <div className='mt-[12px] flex space-x-[40px] text-white text-[14px] h-[73vh]'>
                <div className="bg-[#1C202C] border-2 overflow-auto border-[#FFFFFF] rounded-[16px] w-full">
                    <ResumeTable setRenderComponent={setRenderComponent}/>
                </div>

            </div>
        </div>


        </>
    )
}
const ResumeTable = ({ setRenderComponent }) => {
    return (
        <div className="overflow-auto">
            <table className="table-fixed w-full bg-[#1C202C] rounded-lg border border-[#2A2F41]">
                <thead>
                    <tr className="h-[40px]">
                        <th className="px-[12px] text-[#FFE683] border-r border-b-[2px] border-[#2A2F41] border-b-[#ffffff] border-r-[#ffffff]">S. No</th>
                        <th className="px-[12px] text-[#FFE683] border-r border-b-[2px] border-[#2A2F41] border-b-[#ffffff] border-r-[#ffffff] min-w-[100px]">Account ID</th>
                        <th className="px-[12px] text-[#FFE683] border-r border-b-[2px] border-[#2A2F41] border-b-[#ffffff] border-r-[#ffffff]">Total Applied Jobs</th>
                        <th className="px-[12px] text-[#FFE683] border-r border-b-[2px] border-[#2A2F41] border-b-[#ffffff] border-r-[#ffffff]">Member Since</th>
                        <th className="px-[12px] text-[#FFE683] border-r border-b-[2px] border-[#2A2F41] border-b-[#ffffff] border-r-[#ffffff]">Created Date</th>
                        <th className="px-[12px] text-[#FFE683] border-r border-b-[2px] border-[#2A2F41] border-b-[#ffffff] border-r-[#ffffff]">Approval Date</th>
                        <th className="px-[12px] text-[#FFE683] border-r border-b-[2px] border-[#2A2F41] border-b-[#ffffff] border-r-[#ffffff]">Inactive From</th>
                        <th className="px-[12px] text-[#FFE683] border-r border-b-[2px] border-[#2A2F41] border-b-[#ffffff] border-r-[#ffffff]">Rejected Date</th>
                        <th className="px-[12px] text-[#FFE683] border-b-[2px] border-[#2A2F41] border-b-[#ffffff]">Resume Status</th>
                    </tr>
                </thead>

                <tbody>
                    {allResume.map((ele, i) => {
                        let color = i % 2 === 0 ? 'bg-[#161923]' : 'bg-[#1C202C]';
                        return (
                            <tr key={i} className={`${color} h-[40px]`}>
                                <td className="px-[12px] text-center border-r border-b border-[#2A2F41] border-r-[#ffffff]">{i}</td>
                                <td
                                    className="px-[12px] text-center border-r border-b border-[#2A2F41] hover:text-[#87ceeb] active:text-[#00d8ff] cursor-pointer border-r-[#ffffff]"
                                    onClick={() => setRenderComponent(3)}
                                >
                                    {ele.accountId}
                                </td>
                                <td className="px-[12px] text-center border-r border-b border-[#2A2F41] border-r-[#ffffff]">{ele.totalAppliedJobs}</td>
                                <td className="px-[12px] text-center border-r border-b border-[#2A2F41] border-r-[#ffffff]">{ele.memberSince}</td>
                                <td className="px-[12px] text-center border-r border-b border-[#2A2F41] border-r-[#ffffff]">{ele.CreatedDate}</td>
                                <td className="px-[12px] text-center border-r border-b border-[#2A2F41] border-r-[#ffffff]">{ele.ApprovalDate}</td>
                                <td className="px-[12px] text-center border-r border-b border-[#2A2F41] border-r-[#ffffff]">{ele.inAcctiveForm}</td>
                                <td className="px-[12px] text-center border-r border-b border-[#2A2F41] border-r-[#ffffff]">{ele.rejectedDate}</td>
                                <td className={`px-[12px] text-center border-b border-[#2A2F41] ${ele.resumeStatus === 'Active' ? 'text-[#00e262]' : 'text-[#ff5757]'}`}>
                                    {ele.resumeStatus}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};



export default ComResumeTable

