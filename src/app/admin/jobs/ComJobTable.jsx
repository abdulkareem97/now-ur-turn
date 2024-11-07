'use client'
import React, { useEffect, useState } from 'react'
// import data from '../data'
import Image from 'next/image'
import BackBlack from '../components/BackBlack';
import DropDownSvg from '../components/DropDownSvg';

const alljobs = [
    {
        jobId: '#J0000000152',
        jobType: 'Full Time',
        workplaceType: 'On-site',
        createdDate: '21 Jan 2023',
        ApprovalDate: '21 Jan 2023',
        deletedDate: '-',
        rejectedDate: '-',
        jobStatus: 'Active'
    },
    {
        jobId: '#J0000000153',
        jobType: 'Full Time',
        workplaceType: 'On-site',
        createdDate: '21 Jan 2023',
        ApprovalDate: '21 Jan 2023',
        deletedDate: '-',
        rejectedDate: '-',
        jobStatus: 'Suspended'
    }
]
const ComJobTable = ({setRenderComponent}) => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }, []);
    const [isOpen, setIsOpen] = useState(false);
    const [com, setCom] = useState(1);
    let dropDownOption = [
        'All Jobs',
        'Full Time Jobs',
        'Part Time Jobs',
        'Internships',
        'Apprenticeships',
        'Contracts',
        'On-site Jobs',
        'Hybrid Jobs',
        'Remote Jobs',
        'Pending Status',
        'Active Status',
        'Rejected Status',
        'Deleted Status',
        'Suspended Status',
        'Manual Job Posts'
    ]
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-60 z-10" onClick={() => { setIsOpen(false) }}></div>
            )}

            <div className="relative">
                <div className='flex justify-between text-white  text-[14px]'>
                    <div>
                        <div className='bg-[#1C202C] flex active:bg-[#00d8ff] active:text-black  justify-center items-center text-xl rounded-[8px] h-[40px] w-[200px] 
                    border-[2px] border-[#1C202C] hover:border-[#00d8ff] hover:text-[#00d8ff]

                    
                    
                    '
                    onClick={()=>setRenderComponent(2)}
                    >
                            <span className='cursor-pointer'>
                                Create New Job Post
                            </span>
                        </div>

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
                                                    < li className="px-[12px] py-2  hover:text-[#87ceeb] active:text-[#00d8ff] cursor-pointer "
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
                    <JobTable setRenderComponent={setRenderComponent}/>
                </div>

            </div>
        </div>


        </>
    )
}

const JobTable = ({setRenderComponent}) => {
    return (
        <div className="overflow-auto">
            <table className="min-w-full bg-[#1C202C] rounded-lg border border-[#2A2F41]">
                <thead>
                    <tr className="h-[40px]">
                        <th className="px-[12px]  text-[#FFE683] border-r border-b-[2px] border-[#2A2F41]">S. No</th>
                        <th className="px-[12px]  text-[#FFE683] border-r border-b-[2px] border-[#2A2F41]">Job ID</th>
                        <th className="px-[12px]  text-[#FFE683] border-r border-b-[2px] border-[#2A2F41]">Job Type</th>
                        <th className="px-[12px]  text-[#FFE683] border-r border-b-[2px] border-[#2A2F41]">Workplace Type</th>
                        <th className="px-[12px]  text-[#FFE683] border-r border-b-[2px] border-[#2A2F41]">Created Date</th>
                        <th className="px-[12px]  text-[#FFE683] border-r border-b-[2px] border-[#2A2F41]">Approval Date</th>
                        <th className="px-[12px]  text-[#FFE683] border-r border-b-[2px] border-[#2A2F41]">Deleted Date</th>
                        <th className="px-[12px]  text-[#FFE683] border-r border-b-[2px] border-[#2A2F41]">Rejected Date</th>

                        <th className="px-[12px]  text-[#FFE683] border-b-[2px] border-[#2A2F41]">Job Status</th>
                    </tr>
                </thead>

                <tbody>
                    {alljobs.map((ele, i) => {
                        let color = i % 2 === 0 ? 'bg-[#020617]' : 'bg-[#1C202C]';
                        return (
                            <tr key={i} className={`${color} h-[40px]`}>
                                <td className="px-[12px] text-center  border-r border-b border-[#2A2F41]">{i}</td>
                                <td className="px-[12px] text-center  border-r border-b border-[#2A2F41] hover:text-[#87ceeb] active:text-[#00d8ff] cursor-pointer"
                                onClick={()=>setRenderComponent(3)}
                                
                                >{ele.jobId}</td>
                                <td className="px-[12px] text-center border-r border-b border-[#2A2F41]">{ele.jobType}</td>
                                <td className="px-[12px] text-center border-r border-b border-[#2A2F41]">{ele.workplaceType}</td>
                                <td className="px-[12px] text-center border-r border-b border-[#2A2F41]">{ele.createdDate}</td>
                                <td className="px-[12px] text-center border-r border-b border-[#2A2F41]">{ele.ApprovalDate}</td>
                                <td className="px-[12px] text-center border-r border-b border-[#2A2F41]">{ele.deletedDate}</td>
                                <td className="px-[12px] text-center  border-r border-b border-[#2A2F41]">{ele.rejectedDate}</td>
                                <td className={`px-[12px] text-center border-b border-[#2A2F41]  ${ele.jobStatus == 'Active' ? 'text-[#00e262]' : 'text-[#ff5757]'}`}>{ele.jobStatus}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>

    );
}

export default ComJobTable
