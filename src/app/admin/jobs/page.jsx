'use client'
import React, { useState } from 'react'
// import data from '../data'
import Image from 'next/image'
const userData = {
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
        approvalDate: '07 Dec 2022',
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
    },
};


const Home = () => {
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
        approvalDate: 'Approval Date',
        education: 'Educational Qualifications',
        jobExperience: 'Job Experience',
        skills: 'Certified In',
        otherCertification: 'Other Certification',
        expectedSalary: 'Expected Salary',
        languages: 'Languages',
    }

    const subscription = Object.entries(userData.subscription).map(([key, value]) => {
        return { value, label: subTitle[key] };
    });
    const profile = Object.entries(userData.profile).map(([key, value]) => {
        return { value, label: profTitle[key] };
    });
    const resume = Object.entries(userData.resume).map(([key, value]) => {
        return { value, label: resumeTitle[key] };
    });
    const [isOpen, setIsOpen] = useState(false);
    const [com,setCom] = useState(1);
    return (
        <>
            <div className='flex justify-between text-white pb-[12px] '>
                <div>
                    <div className='bg-gray-800 flex hover:bg-[#00d8ff] hover:text-white  justify-center items-center text-xl rounded-md h-[40px] w-[40px] hover:bg'>
                        <span>←</span>
                    </div>

                </div>
                <div>
                    <div className="relative inline-block text-left w-52">
                        {/* Dropdown Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="bg-gray-800 text-white h-[40px] px-[12px] rounded-md flex items-center hover:bg-gray-700 border border-white hover:border-[#00d8ff] focus:outline-none w-[200px] justify-between"
                        >
                            <span>
                                {
                                    com==1 ? 'Resume' : com==2 ? 'Data Access' : 'Chat Conversations'
                                }
                            
                            </span>
                            <svg
                                className={`ml-2 h-5 w-5 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </button>

                        {/* Dropdown Menu */}
                        {isOpen && (
                            <div className="absolute  mt-2 w-[200px] bg-gray-800 text-white rounded-md shadow-lg">
                                <ul className="py-1">
                                    <li className="px-4 py-2 hover:bg-gray-700 hover:text-[#00d8ff] cursor-pointer"
                                    onClick={()=>{setCom(1)
                                        setIsOpen(false)
                                    }}
                                    >Resume</li>
                                    <li className="px-4 py-2 hover:bg-gray-700 hover:text-[#00d8ff] cursor-pointer"
                                     onClick={()=>{setCom(2)
                                        setIsOpen(false)
                                    }}
                                    >Data Access</li>
                                    <li className="px-4 py-2 hover:bg-gray-700 hover:text-[#00d8ff] cursor-pointer"
                                     onClick={()=>{setCom(3)
                                        setIsOpen(false)
                                    }}
                                    >Chat Conversations</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>



            </div>
            <div className='mt-[12px] flex space-x-[40px] text-white text-[20px] h-[73vh]'>
                <div className="bg-[#0F172A] border-2 border-white rounded-[16px] w-[48%] 
                overflow-auto pb-[12px]
                ">
                    <div className='flex p-[12px] space-x-[12px] w-full'>
                        <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
                            <img src={userData.photoUrl}
                                // width={'60px'}
                                // height={'30px'}
                                className=' object-cover h-[150px] w-[150px] '
                                // style={{borderRight:'100%'}}
                            />

                        </div>
                        <div className="flex flex-col space-y-[12px] w-full">
                            {
                                subscription.map((ele) => {
                                    // const status = ele.value=='Active' 

                                    return (
                                        <>
                                            <div className='bg-[#020617] flex px-[12px] h-[40px] items-center rounded-[8px] w-full'>
                                                <span className="text-[#ffe683]  w-[130px]">
                                                    {ele.label}
                                                </span>
                                                <span className='px-4'>
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
                        <div className="flex flex-col space-y-[12px] w-full px-4">
                            {
                                profile.map((ele) => {
                                    // const status = ele.value=='Active' 

                                    return (
                                        <>
                                            <div className='bg-[#020617] flex px-[12px] h-[40px] items-center rounded-[8px] w-full'>
                                                <span className="text-[#ffe683]  w-[130px]">
                                                    {ele.label}
                                                </span>
                                                <span className='px-4'>
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

                <div className="bg-[#0F172A] border-2 overflow-auto border-white rounded-md w-[53%]">
                    {/* <Resume resume={resume} /> */}
                    {
                     com==1 ? <Resume resume={resume} /> : com==2 ?  <ContactTable /> : com==3 ?
                     <ChatConversion />
                     : <></>
                    }
                </div>





            </div>
        </>
    )
}


const Resume = ({ resume }) => {



    return (
        <>
            <div className='w-full p-4'>
                <div className="flex flex-col space-y-[12px] w-full">
                    {
                        resume.map((ele) => {
                            // const status = ele.value=='Active' 
                            // { period: "June 2013 - April 2014", degree: "12th Grade",score:'85%',clg:'Madras School of Higher Secondary - Chennai',board:'Central Board of Higher Education (CBSE)' },
                            if (ele.label == 'Educational Qualifications' || ele.label == 'Job Experience') {
                                return (
                                    <>
                                        <div className=''>
                                            <div className="text-[#ffe683]">
                                                <span className="">{ele.label}</span>
                                            </div>
                                            <div className='space-y-[12px] mt-[6px]'>

                                                {
                                                    ele.value.map((it) => {

                                                        return (
                                                            <>
                                                                <div className='bg-[#020617] flex p-[12px] rounded-2xl w-full  flex-col'>
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
                                            <div className="text-[#ffe683]">
                                                <span className="">{ele.label}</span>
                                            </div>
                                            <div className='space-y-[12px] mt-[6px]'>




                                                <>
                                                    <div className='bg-[#020617] rounded-[6px] h-[40px] w-full flex flex-col justify-center px-[12px]'>
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
                                    <div className='bg-[#020617] flex rounded-[8px] w-full h-[40px] items-center px-[12px]'>
                                        <span className="text-[#ffe683]  w-[130px]">
                                            {ele.label}
                                        </span>
                                        <span className='px-4'>
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
const ChatConversion = () => {
    return (
        <>
            <div className=' w-full h-full flex justify-center items-center'>
                <span className='text-[#5779c5]'>Not yet started</span>

            </div>
        </>
    )
}

const ContactTable = () => {
    return (
        <div className="overflow-auto">
        <table className="min-w-full bg-[#020617] rounded-lg border border-gray-700">
            <thead>
                <tr className="h-[40px]">
                    <th className="px-6 py-3 text-[#ffe683] border-r border-b border-gray-700">Email</th>
                    <th className="px-6 py-3 text-[#ffe683] border-r border-b border-gray-700">Contact</th>
                    <th className="px-6 py-3 text-[#ffe683] border-r border-b border-gray-700">LinkedIn</th>
                    <th className="px-6 py-3 text-[#ffe683] border-r border-b border-gray-700">GitHub</th>
                    <th className="px-6 py-3 text-[#ffe683] border-b border-gray-700">Website</th>
                </tr>
            </thead>
            <tbody>
                {[...Array(24)].map((_, i) => {
                    let color = i % 2 === 0 ? 'bg-[#161923]' : 'bg-[#020617]';
                    return (
                        <tr key={i} className={`${color} h-[40px]`}>
                            <td className="px-6 py-4 border-r border-b border-gray-700"></td>
                            <td className="px-6 py-4 border-r border-b border-gray-700"></td>
                            <td className="px-6 py-4 border-r border-b border-gray-700"></td>
                            <td className="px-6 py-4 border-r border-b border-gray-700"></td>
                            <td className="px-6 py-4 border-b border-gray-700"></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
    
    );
  }
  

export default Home
