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
            <div className='flex justify-between text-white  '>
                <div>
                    <div className='bg-gray-800 flex active:bg-[#00d8ff] active:text-black  justify-center items-center text-xl rounded-md h-[40px] w-[40px] 
                    border-[1px] border-gray-800 hover:border-[#00d8ff] hover:text-[#00d8ff]

                    
                    
                    '>
                        <span className=''>
                            <BackBlack />
                        </span>
                    </div>

                </div>
                <div>
                    <div className="relative inline-block text-left w-52 mr-[40]">
                        {/* Dropdown Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`bg-gray-800 text-white h-[40px] px-[12px] rounded-md flex items-center hover:bg-gray-700 border-2 border-gray-800  hover:border-[#00d8ff] focus:outline-none w-[200px] justify-between ${isOpen ? 'border-[#00d8ff]' : ''}`}
                        >
                            <span>
                                {
                                    com==1 ? 'Resume' : com==2 ? 'Data Access' : 'Chat Conversations'
                                }
                            
                            </span>
                            <span>
                                <DropDownSvg />
                            </span>
                        </button>

                        {/* Dropdown Menu */}
                        {isOpen && (
                            <div className="absolute  mt-2 w-[200px] bg-gray-800 text-white rounded-md shadow-lg border-2 border-gray-700">
                                <ul className="py-1">
                                    <li className="px-4 py-2 hover:bg-gray-700 hover:text-[#00d8ff] cursor-pointer "
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

                <div className="bg-[#0F172A] border-2 overflow-auto border-white rounded-[16px] w-[48%]">
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
            <div className='w-full p-[12px]'>
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
                                                                <div className='bg-[#020617] flex p-[12px] rounded-[8px] w-full  flex-col'>
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
        <table className="min-w-full bg-[#0F172A] rounded-lg border border-gray-700">
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
                    let color = i % 2 === 0 ? 'bg-[#020617]' : 'bg-[#0F172A]';
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

  const BackBlack = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="20"
        height="20"
        viewBox="0 0 150 149.999998"
        preserveAspectRatio="xMidYMid meet"
        zoomAndPan="magnify"
        version="1.0"
           fill="currentColor"
    >
        <defs>
            <clipPath id="f6c41cb16c">
                <path d="M 1 18 L 149.625 18 L 149.625 132.949219 L 1 132.949219 Z M 1 18 " clipRule="nonzero" />
            </clipPath>
        </defs>
        <g clipPath="url(#f6c41cb16c)">
            <path
                // fill="#000000"
                d="M 149.574219 85.664062 C 149.574219 111.738281 128.296875 132.953125 102.144531 132.953125 L 67.960938 132.953125 C 63.480469 132.953125 59.847656 129.328125 59.847656 124.859375 C 59.847656 121.539062 61.855469 118.6875 64.722656 117.441406 C 65.710938 117.011719 66.8125 116.773438 67.960938 116.773438 L 102.144531 116.773438 C 119.347656 116.773438 133.34375 102.816406 133.34375 85.667969 C 133.34375 68.511719 119.347656 54.558594 102.144531 54.558594 L 52.121094 54.558594 L 52.121094 68.789062 C 52.121094 72.273438 49.246094 74.761719 46.121094 74.746094 C 45.136719 74.742188 44.125 74.488281 43.175781 73.941406 L 4.394531 51.617188 C 0.417969 49.328125 0.417969 43.605469 4.394531 41.316406 L 43.175781 18.996094 C 47.148438 16.707031 52.121094 19.570312 52.121094 24.148438 L 52.121094 38.378906 L 102.148438 38.378906 C 128.300781 38.378906 149.574219 59.589844 149.574219 85.664062 Z M 149.574219 85.664062 "
                fillOpacity="1"
                fillRule="nonzero"
            />
        </g>
    </svg>
);

const DropDownSvg = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 150 149.999998"
        preserveAspectRatio="xMidYMid meet"
        zoomAndPan="magnify"
        version="1.0"
           fill="currentColor"
    >
        <defs>
            <clipPath id="ef42b1c745">
                <path d="M 0.371094 30 L 149.621094 30 L 149.621094 119.957031 L 0.371094 119.957031 Z M 0.371094 30 " clipRule="nonzero" />
            </clipPath>
        </defs>
        <g clipPath="url(#ef42b1c745)">
            <path
                // fill="#00d8ff"
                d="M 149.457031 45.734375 L 75.242188 119.945312 L 0.519531 45.21875 L 15.710938 30.023438 L 75.242188 89.554688 L 134.261719 30.539062 L 149.457031 45.734375 "
                fillOpacity="1"
                fillRule="nonzero"
            />
        </g>
    </svg>
);

  

export default Home
