'use client'
import React, { useEffect, useState } from 'react'
// import data from '../data'
import Image from 'next/image'
import BackBlack from '../components/BackBlack';
import DropDownSvg from '../components/DropDownSvg';
import axios from 'axios';
const userData1 = {
    subscription: {
        active: 'Active',
        validityTill: '09 Jan 2024',
        acountId: '#A00000369'
    },
    photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
    profile: {
        firstName: "John",
        lastName: 'Cartel',
        userName: 'johncartel',
        email: "johncartel@email.com",
        mobile: "+91 7243172431",
        dob: "12 Oct 2025",
        currentPlace: 'Chennai,TamilNadu, India',
        linkdIn: 'https://www.linkdin.com/in/iamjohncartel',
        github: "https://github.com/johncartel",
        website: "https://johncartel.com",
        MemberSince: '21 Jun 2022',


    },
    resume: {
        status: true,
        createdDate: '21 Jan 2023',
        approvalDate: '07 Dec 2022',
        inActiveFrom: '',
        rejectedDate: '',
        education: [
            { period: "June 2013 - April 2014", degree: "12th Grade", score: '85%', clg: 'Madras School of Higher Secondary - Chennai', board: 'Central Board of Higher Education (CBSE)' },
            { period: "August 2014 - May 2018", degree: "12th Grade", score: '80%', clg: 'Madras Institute of Technology, Chennai', board: 'Bachelor of Engineering (BE)' },
            // { period: "June 2016", degree: "BSc in Computer Science" },
        ],
        jobExperience: [
            {
                period: "July 2018 - August 2022",
                position: "Jave Developer",
                company: "Tata Consultancy Services",
            },
        ],
        skills: ["HTML", "CSS", "JavaScript", "React", 'Java', 'Spring Boot', 'MySql', "MongoDB"],
        otherCertification: ['Associate Android Developer', 'Associate Cloud Engineer'],
        expectedSalary: '1200000 INR/Year',
        languages: ["English", "Tamil"],
        totalAppliedJob: '0',
    },
};
const userData = {
    subscription: {
        active: '-',
        validityTill: '-',
        acountId: '-'
    },
    photoUrl: '-',
    profile: {
        firstName: "-",
        lastName: '-',
        userName: '-',
        email: "-",
        mobile: "-",
        dob: "-",
        currentPlace: '-',
        linkdIn: '-',
        github: "-",
        website: "-",
        MemberSince: '-',


    },
    resume: {
        status: true,
        approvalDate: '-',
        education: [
            // { period: "June 2013 - April 2014", degree: "12th Grade", score: '85%', clg: 'Madras School of Higher Secondary - Chennai', board: 'Central Board of Higher Education (CBSE)' },
            // { period: "August 2014 - May 2018", degree: "12th Grade", score: '80%', clg: 'Madras Institute of Technology, Chennai', board: 'Bachelor of Engineering (BE)' },
            // { period: "June 2016", degree: "BSc in Computer Science" },
        ],
        jobExperience: [
            // {
            //     period: "July 2018 - August 2022",
            //     position: "Jave Developer",
            //     company: "Tata Consultancy Services",
            // },
        ],
        skills: [],
        otherCertification: [],
        expectedSalary: '-',
        languages: [],
    },
};

const appliedJobList = [
    {
        img: 'https://www.investmentmonitor.ai/wp-content/uploads/sites/7/2021/12/microsoft-headquarters-fdi.jpg',
        name: 'Microsoft',
        shortDesc: '#J0000000147 #Java Developer #Full Time #6 - 7 lakh/year #On-site #Minimum 3+ years of experience #Chennai, Tamilnadu, India #Suspended #Applied on 21 Jan 2023 #Waitlist'
    }
]



const ComUserProfile = ({ setRenderComponent, src,page,setHeading }) => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
        setHeading('#A00000369')
    }, []);
    const subTitle = {
        active: 'Pro Subscription',
        validityTill: 'Pro Validity Till',
        acountId: 'Account ID'
    }

    const profTitle = {
        firstName: "First Name",
        lastName: 'Last Name',
        userName: 'Username',
        email: "Email Address",
        mobile: "Mobile Number",
        dob: "Date Of Birth",
        currentPlace: 'Current Place',
        linkdIn: 'LinkdIn',
        github: "GitHub",
        website: "Website",
        MemberSince: 'Member Since',

    }

    const resumeTitle = {
        status: 'Resume Status',
        createdDate: 'Created Date',
        approvalDate: 'Approval Date',
        inActiveFrom: 'Inactive From',
        rejectedDate: 'Rejected Date',
        education: 'Educational Qualifications',
        jobExperience: 'Job Experience',
        skills: 'Certified In',
        otherCertification: 'Other Certification',
        expectedSalary: 'Expected Salary',
        languages: 'Languages',
        totalAppliedJob: 'Total Ap. Jobs',
    }

    const [subscription, setSubsciption] = useState(Object.entries(userData1.subscription).map(([key, value]) => {
        return { value, label: subTitle[key] };
    }));
    const [profile, setProfile] = useState(Object.entries(userData1.profile).map(([key, value]) => {
        return { value, label: profTitle[key] };
    }));
    const [resume, setResume] = useState(Object.entries(userData1.resume).map(([key, value]) => {
        return { value, label: resumeTitle[key] };
    }));

    const fetchData = async () => {
        const data = await axios.get('https://adminapi.nowurturn.com/userInfo?userId=5')

        console.log(data)

        // setSubsciption(Object.entries(userData.subscription).map(([key, value]) => {
        //     return { value, label: subTitle[key] };
        // }))

        // setProfile(Object.entries(userData.profile).map(([key, value]) => {
        //     return { value, label: profTitle[key] };
        // }));

        // setResume(Object.entries(userData.resume).map(([key, value]) => {
        //     return { value, label: resumeTitle[key] };
        // }));


    }


    const [isOpen, setIsOpen] = useState(false);
    const [com, setCom] = useState(1);
    const [approve, setApprove] = useState('Pending')
    const [isAlert, setIsAlert] = useState(false)
    const [data, setData] = useState({ ...userData1 })
    useEffect(() => {
        // fetchData()
        setSubsciption((e) => {
            let d = [...e]
            d['active'] = approve
            return d
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
                        {(approve == 'Pending' && page == 'resume') && <>
                            <div className='bg-[#1C202C] flex active:bg-[#00e262] active:text-black  justify-center items-center text-xl rounded-[8px] h-[40px] w-[200px] 
                    border-[2px] border-[#1C202C] hover:border-[#00e262] hover:text-[#00e262]

                    
                    
                    '
                                onClick={() => setApprove('Active')}
                            >
                                <span className='font-semibold'>
                                    Approve
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
                        {(approve != 'Pending' && page == 'resume') && <>
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
                    <div>
                        <div className="relative inline-block text-left z-20">
                            {/* Dropdown Button */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`bg-[#1C202C] text-white h-[40px] px-[12px] rounded-[8px] flex items-center  hover:border-2 active:bg-[#00d8ff] active:text-black   hover:border-[#00d8ff] focus:outline-none w-[200px] justify-between ${isOpen ? 'border-[#00d8ff] border-2' : ''} group `}
                            >
                                <span>
                                    {
                                        com == 1 ? 'Resume' : com == 2 ? 'Data Access' : com == 3 ? 'Chat Conversations' : com == 4 ? 'Applied Jobs' : ''
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
                                        <li className="px-[12px] py-2  hover:text-[#87ceeb] active:text-[#00d8ff] cursor-pointer "
                                            onClick={() => {
                                                setCom(1)
                                                setIsOpen(false)
                                            }}
                                        >Resume</li>
                                        {page != 'resume' ?
                                            <>
                                                <li className="px-[12px] py-2  hover:text-[#87ceeb] active:text-[#00d8ff] cursor-pointer"
                                                    onClick={() => {
                                                        setCom(2)
                                                        setIsOpen(false)
                                                    }}
                                                >Data Access</li>
                                                <li className="px-[12px] py-2 hover:text-[#87ceeb] active:text-[#00d8ff] cursor-pointer"
                                                    onClick={() => {
                                                        setCom(3)
                                                        setIsOpen(false)
                                                    }}
                                                >Chat Conversations</li>
                                            </>
                                            :
                                            <>
                                                <li className="px-[12px] py-2 hover:text-[#87ceeb] active:text-[#00d8ff] cursor-pointer"
                                                    onClick={() => {
                                                        setCom(4)
                                                        setIsOpen(false)
                                                    }}
                                                >Applied Jobs</li>
                                            </>
                                        }
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>



                </div>
                <div className='mt-[12px] flex space-x-[40px] text-white text-[20px] h-[73vh]'>
                    <div className="bg-[#1C202C] border-2 border-[#FFFFFF] rounded-[16px] w-[50%] 
                overflow-auto pb-[12px]
                ">
                        <div className='flex p-[12px] space-x-[12px] w-full'>
                            <div className="min-w-[144px] h-[144px] rounded-full overflow-hidden">
                                <img src={userData1.photoUrl}
                                    // width={'60px'}
                                    // height={'30px'}
                                    className=' object-cover w-[144px] h-[144px] '
                                // style={{borderRight:'100%'}}
                                />

                            </div>
                            <div className="flex flex-col space-y-[12px] w-full">
                                {
                                    subscription.map((ele) => {
                                        // const status = ele.value=='Active' 

                                        return (
                                            <>
                                                <div className='bg-[#0D0D19] flex px-[12px] h-[40px] items-center rounded-[8px] w-full'>
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
                                                <div className='bg-[#0D0D19] flex px-[12px] h-[40px] items-center rounded-[8px] w-full'>
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

                                                </div>
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
                            com == 1 ? <Resume resume={resume} page={page} /> : com == 2 ? <ContactTable /> : com == 3 ?
                                <ChatConversion /> : com == 4 ? <AppliedJob setRenderComponent={setRenderComponent} />
                                    : <></>
                        }
                    </div>





                </div>
            </div>
        </>
    )
}


const Resume = ({ resume, page }) => {



    return (
        <>
            <div className='w-full p-[12px]'>
                <div className="flex flex-col space-y-[12px] w-full">
                    {
                        resume.map((ele) => {


                            if (page != 'resume' && (ele.label == 'Created Date' || ele.label == 'Inactive From' || ele.label == 'Rejected Date' || ele.label == 'Total Ap. Jobs')) {
                                return <></>
                            }
                            // const status = ele.value=='Active' 
                            // { period: "June 2013 - April 2014", degree: "12th Grade",score:'85%',clg:'Madras School of Higher Secondary - Chennai',board:'Central Board of Higher Education (CBSE)' },
                            if (ele.label == 'Educational Qualifications' || ele.label == 'Job Experience') {
                                return (
                                    <>
                                        <div className=''>
                                            <div className="text-[#FFE683]">
                                                <span className="">{ele.label}</span>
                                            </div>
                                            <div className='space-y-[12px] mt-[6px]'>

                                                {
                                                    ele.value.map((it) => {

                                                        return (
                                                            <>
                                                                <div className='bg-[#0D0D19] flex p-[12px] rounded-[8px] w-full  flex-col'>
                                                                    <span>{it.period}</span>
                                                                    {it.clg && <span>{it.clg}</span>}
                                                                    {it.board && <span>{it.board}</span>}
                                                                    {it.degree && <span>{it.degree}</span>}
                                                                    {it.score && <span> Scored {it.score}</span>}
                                                                    {it.position && <span>{it.position}</span>}
                                                                    {it.company && <span>{it.company}</span>}


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
                            else if (ele.label == 'Certified In' || ele.label == 'Other Certification') {

                                return (
                                    <>
                                        <div className=''>
                                            <div className="text-[#FFE683]">
                                                <span className="">{ele.label}</span>
                                            </div>
                                            <div className='space-y-[12px] mt-[6px]'>




                                                <>
                                                    <div className='bg-[#0D0D19] rounded-[6px] h-[40px] w-full flex flex-col justify-center px-[12px]'>
                                                        <span>{ele.value.join(', ')}</span>


                                                    </div>
                                                </>

                                            </div>
                                        </div>
                                    </>
                                )
                            }

                            return (
                                <>
                                    <div className='bg-[#0D0D19] flex rounded-[8px] w-full h-[40px] items-center px-[12px]'>
                                        <span className="text-[#FFE683]  w-[110px]">
                                            {ele.label}
                                        </span>
                                        <span className='px-[6px]'>
                                            :
                                        </span>
                                        <span className="">
                                            {
                                                ele.value.toString()
                                            }
                                        </span>

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
const IfEmpty = () => {
    return (
        <>
            <div className=' w-full h-full flex justify-center items-center'>
                <span className='text-[#6290C0]'>Not yet started</span>

            </div>
        </>
    )
}


const AppliedJob = ({setRenderComponent,src}) => {
    if(appliedJobList.length==0){
        return(
            <>
            <IfEmpty />
            </>
        )
    }

    return (


        <div className='w-full p-[12px]'>
            <div className="space-y-[12px]">
                {
                    appliedJobList.map((ele) => {

                        {/* let d = { ...ele }

                delete d['photoUrl'] */}
                        return (
                            <>

                                <div className='flex p-[12px] space-x-[12px] w-full bg-[#2a2f41] rounded-[8px] hover:border-[2px] hover:border-[#6290c0] active:border-[#00d8ff] active:border-[2px]

]'
                                    key={ele.name}
                                    onClick={() => setRenderComponent(4)}
                                >
                                    <div className="min-w-[66px] h-[66px] rounded-full overflow-hidden">
                                        <img src={ele.img}
                                            // width={'60px'}
                                            // height={'30px'}
                                            className=' object-cover w-[66px] h-[66px] '
                                        // style={{borderRight:'100%'}}
                                        />

                                    </div>
                                    <div className="flex flex-col  w-full font-semibold">

                                        <span>{ele.name}</span>
                                        <span>{ele.shortDesc}</span>



                                    </div>
                                </div>


                            </>

                        )
                    })
                }
            </div>
        </div>
    )
}


const ChatConversion = () => {
    return (
        <>
            <div className=' w-full h-full flex justify-center items-center'>
                <span className='text-[#6290C0]'>Not yet started</span>

            </div>
        </>
    )
}

const ContactTable = () => {
    return (
        <div className="overflow-auto">
            <table className="table-fixed w-full bg-[#1C202C] rounded-lg border border-[#2A2F41]">
                <thead>
                    <tr className="h-[40px]">
                        <th className="px-[12px]  text-[#FFE683] border-r border-b-[2px] border-[#2A2F41] border-b-[#ffffff] border-r-[#ffffff] ">Email</th>
                        <th className="px-[12px]  text-[#FFE683] border-r border-b-[2px] border-[#2A2F41] border-b-[#ffffff] border-r-[#ffffff] ">Contact</th>
                        <th className="px-[12px]  text-[#FFE683] border-r border-b-[2px] border-[#2A2F41] border-b-[#ffffff] border-r-[#ffffff] ">LinkedIn</th>
                        <th className="px-[12px]  text-[#FFE683] border-r border-b-[2px] border-[#2A2F41] border-b-[#ffffff] border-r-[#ffffff] ">GitHub</th>
                        <th className="px-[12px]  text-[#FFE683] border-b-[2px] border-[#2A2F41] border-b-[#ffffff] border-r-[#ffffff] ">Website</th>
                    </tr>
                </thead>
                <tbody>
                    {[...Array(24)].map((_, i) => {
                        let color = i % 2 === 0 ? 'bg-[#161923]' : 'bg-[#1C202C]';
                        return (
                            <tr key={i} className={`${color} h-[40px]`}>
                                <td className="px-[12px]  border-r border-b border-[#2A2F41] border-r-[#ffffff] "></td>
                                <td className="px-[12px]  border-r border-b border-[#2A2F41] border-r-[#ffffff] "></td>
                                <td className="px-[12px]  border-r border-b border-[#2A2F41] border-r-[#ffffff] "></td>
                                <td className="px-[12px]  border-r border-b border-[#2A2F41] border-r-[#ffffff] "></td>
                                <td className="px-[12px]  border-b border-[#2A2F41]"></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>

    );
}

export {ChatConversion,ContactTable,AppliedJob}






export default ComUserProfile
