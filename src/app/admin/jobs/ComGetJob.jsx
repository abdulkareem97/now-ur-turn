'use client'
import React, { useEffect, useState } from 'react'
// import data from '../data'
import Image from 'next/image'
import BackBlack from '../components/BackBlack';
import DropDownSvg from '../components/DropDownSvg';
import { FaSearch } from 'react-icons/fa';
const JobData = {
    status: {
        jobStatus: 'Pending',
        totalResume: '09 Jan 2024',
        TotalHire: '#A00000369'
    },
    photoUrl: 'https://www.investmentmonitor.ai/wp-content/uploads/sites/7/2021/12/microsoft-headquarters-fdi.jpg',
    profile: {
        companyName: "Microsoft",
        recruiterId: 'Manual Jobs',
        createdDate: '21 Jan 2023',
        ApprovalDate: "21 Jan 2023",
        deletedDate: "-",
        rejectedDate: "-",
        jobTitle: 'Senior Java Developer',
        jobType: 'Full Time',
        workplaceType: 'On-site',
        jobLocation: "Bengaluru Urban, Karnataka, India",
        minWorkExp: "5+ years",
        currency: 'Indian Rupee (INR)',
        salary: '8 - 9 Lakh / Year',
        about: 'We are seeking a highly skilled Senior Java Developer to join our dynamic team. In this role, yoll design, develop, and optimize robust Java applications, driving the success of our tech solutions. As a key contributor, youll collaborate with cross-functional teams to ensure code quality, functionality, and scalability, while providing mentorship to junior developers',
        eligibility: 'Bachelors or Masters in Computer Science or related field',


    },
    applicants: [{
        name: 'John Cartel',
        id: '#A00000369',
        appliedAt: '21 Jun 2024',
        status: 'WaitList',
        photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'
    }],

};


const ComGetJob = ({ setRenderComponent }) => {

    const [applicants, setApplicants] = useState([...JobData.applicants])
    const [data, setData] = useState({ ...JobData })
    // const [searchText,setSearchText] = useState('')
    // console.log(a)



    const subTitle = {
        jobStatus: 'Job Status',
        totalResume: 'Total Resume',
        TotalHire: 'Total Hire'
    }

    const profTitle = {
        companyName: "Company Name",
        recruiterId: 'Recruiter ID',
        createdDate: 'Created Date',
        ApprovalDate: "Approval Date",
        deletedDate: "Deleted Date",
        rejectedDate: "Rejected Date",
        jobTitle: 'Job Title',
        jobType: 'Job Type',
        workplaceType: 'Workplace Type',
        jobLocation: "Job Location",
        minWorkExp: "Min Work Exp",
        currency: 'Currency',
        salary: 'Salary',
        about: 'About Job',
        eligibility: 'Eligibility to Apply',

    }


    const status = Object.entries(data.status).map(([key, value]) => {
        return { value, label: subTitle[key] };
    });
    const profile = Object.entries(data.profile).map(([key, value]) => {
        return { value, label: profTitle[key] };
    });

    const [isOpen, setIsOpen] = useState(false);
    const [com, setCom] = useState(1);
    const searchTextMethod = (value) => {
        setApplicants([...data.applicants].filter((e) => (e.name.toLowerCase().includes(value.toLowerCase()) || e.id.toLowerCase().includes(value.toLowerCase()))))
    }
    const [approve, setApprove] = useState('Pending')
    const [isAlert, setIsAlert] = useState(false)
    useEffect(() => {

        setData((ele) => {
            return {
                ...ele,
                status: {
                    ...ele.status,
                    'jobStatus': approve
                }
            }
        })


    }, [approve])
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-60 z-10" onClick={() => { setIsOpen(false) }}></div>
            )}
            {isAlert && (
                <>
                    <div className="fixed inset-0 bg-black bg-opacity-60 z-[70] flex justify-center items-center" onClick={() => { setIsOpen(false) }}>
                    </div>
                    <div className="fixed inset-0  z-[80] flex justify-center items-center">
                        <div className="bg-[#1C202C] p-[12px] space-y-[12px] text-white rounded-[8px]">
                            <div className="text-center">Are you sure want to revoke the current status of this Job?</div>
                            <div className="flex space-x-[12px] mt-[40px]">
                                <div className='bg-[#2a2f41] flex active:bg-[#00d8ff] active:text-black  justify-center items-center text-xl rounded-[8px] h-[40px] w-[200px] 
                    border-[2px] border-[#2a2f41] hover:border-[#00d8ff] hover:text-[#00d8ff]
                    '
                                // onClick={() => setRenderComponent(1)}
                                onClick={() => setIsAlert(false)}
                                >
                                    <span className=''>
                                        No
                                    </span>
                                </div>
                                <div className='bg-[#2a2f41] flex active:bg-[#00d8ff] active:text-black  justify-center items-center text-xl rounded-[8px] h-[40px] w-[200px] 
                    border-[2px] border-[#2a2f41] hover:border-[#00d8ff] hover:text-[#00d8ff]
                    '
                                // onClick={() => setRenderComponent(1)}
                                onClick={() => {
                                    setApprove('Pending');
                                    setIsAlert(false)
                                
                                }}
                                >
                                    <span className=''>
                                        Yes
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </>
            )}
            <div className="relative ">
                <div className='flex justify-between text-white  text-[14px]'>
                    <div className='flex space-x-[12px]'>
                        <div className='bg-[#1C202C] flex active:bg-[#00d8ff] active:text-black  justify-center items-center text-xl rounded-[8px] h-[40px] w-[40px] 
                    border-[2px] border-[#1C202C] hover:border-[#00d8ff] hover:text-[#00d8ff]

                    
                    
                    '  onClick={() => setRenderComponent(1)}
                        >
                            <span className=''>
                                <BackBlack />
                            </span>
                        </div>
                        {approve == 'Pending' && <>
                            <div className='bg-[#1C202C] flex active:bg-[#00e262] active:text-black  justify-center items-center text-xl rounded-[8px] h-[40px] w-[200px] 
                    border-[2px] border-[#1C202C] hover:border-[#00e262] hover:text-[#00e262]

                    
                    
                    '
                                onClick={() => setApprove('Active')}
                            >
                                <span className=''>
                                    Approve
                                </span>
                            </div>
                            <div className='bg-[#1C202C] flex active:bg-[#ff5757] active:text-black  justify-center items-center text-xl rounded-[8px] h-[40px] w-[200px] 
                    border-[2px] border-[#1C202C] hover:border-[#ff5757] hover:text-[#ff5757]

                    
                    
                    '
                                onClick={() => setApprove('Rejected')}
                            >
                                <span className=''>
                                    Reject
                                </span>
                            </div>

                        </>}
                        {approve != 'Pending' && <>
                            <div className='bg-[#1C202C] flex active:bg-[#00d8ff] active:text-black  justify-center items-center text-xl rounded-[8px] h-[40px] w-[200px] 
                    border-[2px] border-[#1C202C] hover:border-[#00d8ff] hover:text-[#00d8ff]

                    
                    
                    '
                                // onClick={() => setApprove('Pending')}
                                onClick={() => setIsAlert(true)}
                                
                            >
                                <span className=''>
                                    Revoke Status
                                </span>
                            </div>


                        </>}

                    </div>
                    <div>
                        <div className="relative">
                            <input
                                className="bg-[#1C202C] rounded-[8px]  px-[12px] text-white resize-none overflow-hidden h-auto min-h-[40px] placeholder:text-[#6290c0] placeholder:opacity-90  w-[350px]"
                                onChange={(e) => searchTextMethod(e.target.value)}
                                placeholder="Type here"
                            />
                            <FaSearch className="absolute right-[24px] top-1/2 transform -translate-y-1/2 text-[#6290c0]" />
                        </div>
                    </div>



                </div>
                <div className='mt-[12px] flex space-x-[40px] text-white text-[20px] h-[73vh]'>
                    <div className="bg-[#1C202C] border-2 border-[#FFFFFF] rounded-[16px] w-[50%] 
                overflow-auto pb-[12px]
                ">
                        <div className='flex p-[12px] space-x-[12px] w-full'>
                            <div className="min-w-[144px] h-[144px] rounded-[16px] overflow-hidden">
                                <img src={data.photoUrl}
                                    // width={'60px'}
                                    // height={'30px'}
                                    className=' object-cover w-[144px] h-[144px] '
                                // style={{borderRight:'100%'}}
                                />

                            </div>
                            <div className="flex flex-col space-y-[12px] w-full">
                                {
                                    status.map((ele) => {
                                        // const status = ele.value=='Active' 
                                        const color = (ele.label == 'Job Status' && ele.value == 'Active') ? 'text-[#00e262]' : (ele.label == 'Job Status' && ele.value == 'Rejected') ? 'text-[#ff5757]' : 'text-white'

                                        return (
                                            <>
                                                <div className='bg-[#0D0D19] flex px-[12px] h-[40px] items-center rounded-[8px] w-full'>
                                                    <span className="text-[#FFE683]  w-[110px]">
                                                        {ele.label}
                                                    </span>
                                                    <span className='px-[6px]'>
                                                        :
                                                    </span>
                                                    <span className={`${color}`}>
                                                        {
                                                            ele.value
                                                        }
                                                    </span>

                                                </div>
                                            </>
                                        )
                                    })
                                }


                            </div>
                        </div>
                        <div className='w-full'>
                            <div className="flex flex-col space-y-[12px] w-full px-[12px]">
                                {
                                    profile.map((ele) => {
                                        // const status = ele.value=='Active' 


                                        return (
                                            <>
                                                {(ele.label == 'About Job' || ele.label == 'Eligibility to Apply') ?
                                                    <>

                                                        <div className=''>
                                                            <div className="text-[#FFE683]">
                                                                <span className="">{ele.label}</span>
                                                            </div>
                                                            <div className='space-y-[12px] mt-[6px]'>


                                                                <>
                                                                    <div className='bg-[#0D0D19] flex p-[12px] rounded-[8px] w-full  flex-col'>
                                                                        <span>{ele.value}</span>


                                                                    </div>
                                                                </>



                                                            </div>
                                                        </div>
                                                    </>




                                                    : <div className='bg-[#0D0D19] flex px-[12px] h-[40px] items-center rounded-[8px] w-full'>
                                                        <span className="text-[#FFE683]  w-[110px]">
                                                            {ele.label}
                                                        </span>
                                                        <span className='px-[6px]'>
                                                            :
                                                        </span>
                                                        <span className="">
                                                            {
                                                                ele.value
                                                            }
                                                        </span>

                                                    </div>}
                                            </>
                                        )
                                    })
                                }


                            </div>

                        </div>
                    </div>

                    <div className="bg-[#1C202C] border-2 overflow-auto border-[#FFFFFF] rounded-[16px] w-[50%]">
                        {/* <Resume resume={resume} /> */}
                        {
                            (applicants && applicants.length > 0) ?
                                <>
                                    <ApplicantTable applicants={applicants} setRenderComponent={setRenderComponent} />
                                </>


                                : <NoApplicants />
                        }
                    </div>





                </div>
            </div>
        </>
    )
}


const ApplicantTable = ({ applicants, setRenderComponent }) => {



    return (
        <>
            <div className='w-full p-[12px]'>
                <div className="space-y-[12px]">
                    {
                        applicants.map((ele) => {

                            let d = { ...ele }

                            delete d['photoUrl']
                            return (
                                <>

                                    <div className='flex p-[12px] space-x-[12px] w-full bg-[#2a2f41] rounded-[8px] hover:border hover:border-[#00d8ff]'
                                        onClick={() => setRenderComponent(4)}
                                    >
                                        <div className="min-w-[88px] h-[88px] rounded-full overflow-hidden">
                                            <img src={ele.photoUrl}
                                                // width={'60px'}
                                                // height={'30px'}
                                                className=' object-cover w-[88px] h-[88px] '
                                            // style={{borderRight:'100%'}}
                                            />

                                        </div>
                                        <div className="flex flex-col  w-full">
                                            {
                                                Object.entries(d).map(([key, value]) => {
                                                    // const status = ele.value=='Active' 

                                                    return (
                                                        <>
                                                            <span className="">{value}</span>
                                                        </>
                                                    )
                                                })
                                            }


                                        </div>
                                    </div>


                                </>

                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
const NoApplicants = () => {
    return (
        <>
            <div className=' w-full h-full flex justify-center items-center'>
                <span className='text-[#6290C0]'>No Applicants</span>

            </div>
        </>
    )
}








export default ComGetJob
