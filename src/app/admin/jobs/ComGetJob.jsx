'use client'
import React, { useEffect, useState } from 'react'
// import data from '../data'
import Image from 'next/image'
import BackBlack from '../components/BackBlack';
import DropDownSvg from '../components/DropDownSvg';
import { FaSearch } from 'react-icons/fa';
import { AppliedJob, ChatConversion, ContactTable } from './ComUserProfile';
const JobData = {
    status: {
        jobStatus: 'Pending',
        totalResume: '09 Jan 2024',
        TotalHire: '#A00000369',

    },
    statusRecruiter: {
        recurStatus: 'Pending',
        totalJobPost: '0',
        totalResume: '0'
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
    profileRecru: {
        companyName: "Microsoft",
        recruiterId: 'Manual Jobs',
        createdDate: '21 Jan 2023',
        ApprovalDate: "21 Jan 2023",
        deletedDate: "-",
        rejectedDate: "-",
        VerificationDocument: 'Aadhar.pdf',
        AboutCompany: 'Google is a multinational technology company that specializes in internet-related services and products. It is best known for its search engine, which allows users to search for information on the internet. Google also offers a variety of other products and services such as email, cloud storage, maps, advertising, and more. The company was founded in 1998 by Larry Page and Sergey Brin and has since become one of the largest and most influential companies in the world.',
        officeLocations: 'https://maps.app.goo.gl/wNGqZzfuHEWcoXiC'


    },
    applicants: [
        {
            name: 'John Cartel',
            id: '#A00000369',
            appliedAt: '21 Jun 2024',
            status: 'WaitList',
            photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            name: 'John Cartel',
            id: '#A00000369',
            appliedAt: '21 Jun 2024',
            status: 'WaitList',
            photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            name: 'John Cartel',
            id: '#A00000369',
            appliedAt: '21 Jun 2024',
            status: 'WaitList',
            photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            name: 'John Cartel',
            id: '#A00000369',
            appliedAt: '21 Jun 2024',
            status: 'WaitList',
            photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            name: 'John Cartel',
            id: '#A00000369',
            appliedAt: '21 Jun 2024',
            status: 'WaitList',
            photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            name: 'John Cartel',
            id: '#A00000369',
            appliedAt: '21 Jun 2024',
            status: 'WaitList',
            photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            name: 'John Cartel',
            id: '#A00000369',
            appliedAt: '21 Jun 2024',
            status: 'WaitList',
            photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            name: 'John Cartel',
            id: '#A00000369',
            appliedAt: '21 Jun 2024',
            status: 'WaitList',
            photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            name: 'John Cartel',
            id: '#A00000369',
            appliedAt: '21 Jun 2024',
            status: 'WaitList',
            photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            name: 'John Cartel',
            id: '#A00000369',
            appliedAt: '21 Jun 2024',
            status: 'WaitList',
            photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            name: 'John Cartel',
            id: '#A00000369',
            appliedAt: '21 Jun 2024',
            status: 'WaitList',
            photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'
        },


    ],

};

const recrutors = [
    {
        name: 'Jasmin',
        id: '#A0000000739',
        appliedAt: '#Joined 11 Dec 2022',
        status: '#HR Assistant',
        photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'
    }
]

const ComGetJob = ({ setRenderComponent, src, src1, src2, setHeading, page,hide }) => {

    const [applicants, setApplicants] = useState([...JobData.applicants])
    const [data, setData] = useState({ ...JobData })
    const [embedLink,setEmbedLink] = useState('')
    // const [searchText,setSearchText] = useState('')
    // console.log(a)
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
        setHeading('#A00000369')
    }, []);



    let subTitle = {
        jobStatus: 'Job Status',
        totalResume: 'Total Resume',
        TotalHire: 'Total Hire',
        recurStatus: 'Recruiter Status',
        totalJobPost: 'Total Job Posts',
        totalResume: 'Total Resume'
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


        VerificationDocument: 'Verification Document',
        AboutCompany: 'About Company',
        officeLocations: 'Office Locations'

    }


    const status = page == 'recru' ? Object.entries(data.statusRecruiter).map(([key, value]) => {

        return { value, label: subTitle[key] };
    }) : Object.entries(data.status).map(([key, value]) => {

        return { value, label: subTitle[key] };
    });

    const profile = page == 'recru' ?

        Object.entries(data.profileRecru).map(([key, value]) => {
            return { value, label: profTitle[key] };
        })
        : Object.entries(data.profile).map(([key, value]) => {
            return { value, label: profTitle[key] };
        });

    const [isOpen, setIsOpen] = useState(false);
    const [com, setCom] = useState(0);
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

    const dropDownOption = page == 'recru' ?
        [
            'Account Managers',
            'Job Posts'
        ]

        :
        [
            'Data Access',
            'Chat Conversations',
        ]


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
                            <div className="text-center font-semibold">Are you sure want to revoke the current status of this Job?</div>
                            <div className="flex space-x-[12px] mt-[40px]">
                                <div className='bg-[#2a2f41] flex active:bg-[#00d8ff] active:text-black  justify-center items-center text-xl rounded-[8px] h-[40px] w-[200px] 
                    border-[2px] border-[#2a2f41] hover:border-[#00d8ff] hover:text-[#00d8ff]
                    '
                                    // onClick={() => setRenderComponent(1)}
                                    onClick={() => setIsAlert(false)}
                                >
                                    <span className='font-semibold'>
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
                                    <span className='font-semibold'>
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

                
                    
                    '  onClick={() => setRenderComponent(src)}
                        >
                            <span className=''>
                                <BackBlack />
                            </span>
                        </div>
                        {(page != 'resume' && approve == 'Pending' && !hide) && <>
                            <div className={`bg-[#1C202C] flex  justify-center items-center text-xl rounded-[8px] h-[40px] w-[200px] 
                    border-[2px] border-[#1C202C] 
                                    ${(embedLink!='' || page=='jobs' ) ? 'hover:border-[#00e262] hover:text-[#00e262] active:bg-[#00e262] active:text-black  ' :''  

                                    }
                                    ${(embedLink=='' && page=='recru')  ? 'bg-[#6290c0]' : ''}
                    
                    
                    `}
                                onClick={() => setApprove('Active')}
                            >
                                <span className='font-semibold'>
                                    {page == 'recru' ? 'Save & ' : ''} Approve
                                </span>
                            </div>
                            <div className='bg-[#1C202C] flex active:bg-[#ff5757] active:text-black  justify-center items-center text-xl rounded-[8px] h-[40px] w-[200px] 
                    border-[2px] border-[#1C202C] hover:border-[#ff5757] hover:text-[#ff5757]

                    
                    
                    '
                                onClick={() => setApprove('Rejected')}
                            >
                                <span className='font-semibold'>
                                    Reject
                                </span>
                            </div>

                        </>}
                        {(approve != 'Pending' && page != 'resume' && !hide) && <>
                            <div className='bg-[#1C202C] flex active:bg-[#00d8ff] active:text-black  justify-center items-center text-xl rounded-[8px] h-[40px] w-[200px] 
                    border-[2px] border-[#1C202C] hover:border-[#00d8ff] hover:text-[#00d8ff]

                    
                    
                    '
                                // onClick={() => setApprove('Pending')}
                                onClick={() => setIsAlert(true)}

                            >
                                <span className='font-semibold'>
                                    Revoke Status
                                </span>
                            </div>


                        </>}

                    </div>
                    {(page == 'jobs') ? <div>
                        <div className="relative">
                            <input
                                className="bg-[#1C202C] rounded-[8px]  px-[12px] text-white resize-none overflow-hidden h-auto min-h-[40px] placeholder:text-[#6290c0] placeholder:opacity-90  w-[350px]"
                                onChange={(e) => searchTextMethod(e.target.value)}
                                placeholder="Type here"
                            />
                            <FaSearch className="absolute right-[12px] top-1/2 transform -translate-y-1/2 text-[#6290c0]" />
                        </div>
                    </div>
                        :

                        (page == 'resume' || page == 'recru')
                            ?
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
                            : <></>

                    }



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
                                                {
                                                    ele.label == 'Office Locations' ?
                                                        <>
                                                            <OfficeLocation label={ele.label} value={ele.value} embedLink={embedLink} setEmbedLink={setEmbedLink} />
                                                        </>

                                                        :

                                                        (ele.label == 'About Job' || ele.label == 'Eligibility to Apply' || ele.label == 'Verification Document' || ele.label == 'About Company') ?
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
                            page == 'resume' ?
                                <>
                                    {
                                        com == 1 ?
                                            <ChatConversion />

                                            : com == 0 ? <>

                                                <ContactTable />
                                            </> : <></>
                                    }
                                </> :
                                page == 'recru' ?
                                    <>
                                        {
                                            com == 0 ?
                                                <ApplicantTable applicants={recrutors} setRenderComponent={setRenderComponent} src={6} src1={6} />

                                                : com == 1 ? <>

                                                    <AppliedJob setRenderComponent={setRenderComponent} src={src2} />
                                                </> : <></>
                                        }
                                    </> :

                                    ((applicants && applicants.length > 0) ?
                                        <>
                                            <ApplicantTable applicants={applicants} setRenderComponent={setRenderComponent} src={src} src1={src1} />
                                        </>


                                        : <NoApplicants />
                                    )

                        }
                    </div>





                </div>
            </div>
        </>
    )
}

const OfficeLocation = ({ label, value ,embedLink,setEmbedLink}) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(value).then(() => {
            // alert("Link copied to clipboard!");
            console.log('copied')
        });
    };

    return (

        <>

            <div className=''>
                <div className="text-[#FFE683]">
                    <span className="">{label}</span>
                </div>
                <div className='space-y-[12px] mt-[6px]'>


                    {/* <>
                                                                            <div className='bg-[#0D0D19] flex p-[12px] rounded-[8px] w-full  flex-col'>
                                                                                <span>{value}</span>


                                                                            </div>
                                                                        </> */}

                    <>
                        <div className='bg-[#0D0D19] flex p-[12px] rounded-[8px] w-full  flex-col'>
                            <div className="flex space-x-[12px]">
                                <div className="bg-[#1C202C] p-[12px] w-full rounded-[8px]">
                                    {value}
                                </div>
                                <button onClick={handleCopy} className="bg-[#1C202C] flex active:bg-[#00d8ff] active:text-black  justify-center items-center text-xl rounded-[8px] h-[40px] w-[40px] 
                    border-[2px] border-[#1C202C] hover:border-[#00d8ff] hover:text-[#00d8ff]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 cursor-pointer"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M7 2a3 3 0 00-3 3v10a3 3 0 003 3h6a3 3 0 003-3V9a1 1 0 10-2 0v6a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1h6a1 1 0 001-1V3a1 1 0 00-1-1H7z" />
                                        <path d="M9 9a1 1 0 011-1h6a1 1 0 011 1v7a3 3 0 01-3 3h-6a1 1 0 01-1-1V9z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-[12px] flex items-center">
                                <textarea
                                    className="bg-[#0D0D19] rounded-[8px] w-full px-[12px] text-white resize-none overflow-hidden h-auto min-h-[40px] py-[10px] border-2 border-[#1C202C] placeholder:text-[#6290c0] placeholder:opacity-90"
                                    rows="1"
                                    onInput={(e) => {
                                        e.target.style.height = "auto";
                                        e.target.style.height = `${e.target.scrollHeight}px`;
                                    }}
                                    // onChange={(e) => handleInputChange(e, key)}
                                    placeholder="Embed link"
                                    value={embedLink}
                                    onChange={(e)=>setEmbedLink(e.target.value)}
                                />

                            </div>


                        </div>
                    </>



                </div>
            </div>
        </>


        // <div className="space-y-2 mt-4">
        //     <div className="text-[#FFE683]">
        //         <span>{label}</span>
        //     </div>
        //     <div className="bg-[#0D0D19] flex items-center justify-between p-3 rounded-lg w-full">
        //         <span className="text-white break-all">{value}</span>
        //         <button onClick={handleCopy} className="ml-4">
        //             <svg
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 className="h-5 w-5 text-white hover:text-white cursor-pointer"
        //                 viewBox="0 0 20 20"
        //                 fill="currentColor"
        //             >
        //                 <path d="M7 2a3 3 0 00-3 3v10a3 3 0 003 3h6a3 3 0 003-3V9a1 1 0 10-2 0v6a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1h6a1 1 0 001-1V3a1 1 0 00-1-1H7z" />
        //                 <path d="M9 9a1 1 0 011-1h6a1 1 0 011 1v7a3 3 0 01-3 3h-6a1 1 0 01-1-1V9z" />
        //             </svg>
        //         </button>
        //     </div>
        //     <div className="text-blue-500 cursor-pointer hover:underline mt-2">
        //         Embed link
        //     </div>
        // </div>
    );
};


const ApplicantTable = ({ applicants, setRenderComponent, src, src1 }) => {



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

                                    <div className='flex p-[12px] space-x-[12px] w-full bg-[#2a2f41] rounded-[8px] hover:border-[2px] hover:border-[#6290c0] active:border-[#00d8ff] active:border-[2px]

]'
                                        onClick={() => setRenderComponent(src1)}
                                    >
                                        <div className="min-w-[100px] h-[100px] rounded-full overflow-hidden">
                                            <img src={ele.photoUrl}
                                                // width={'60px'}
                                                // height={'30px'}
                                                className=' object-cover w-[100px] h-[100px] '
                                            // style={{borderRight:'100%'}}
                                            />

                                        </div>
                                        <div className="flex flex-col  w-full">
                                            {
                                                Object.entries(d).map(([key, value]) => {
                                                    // const status = ele.value=='Active' 
                                                    // const name = ele.key=='name'
                                                    // console.log('name',ele.key)

                                                    return (
                                                        <>
                                                            <span className={`${'name' == key ? 'font-semibold pb-[12px]' : ''}`}>{value}</span>
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


export { ApplicantTable }







export default ComGetJob
