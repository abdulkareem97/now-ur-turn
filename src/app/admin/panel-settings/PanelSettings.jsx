'use client'
import React, { useEffect, useState } from 'react'
// import data from '../data'
import Image from 'next/image'
import BackBlack from '../components/BackBlack';
import DropDownSvg from '../components/DropDownSvg';
import axios from 'axios';


let formData = {
    'Audience type': '',
    'Notification type': '',
    'Target page': '',
    'Validity': '',
    'Headline': '',
    'Notification message': ''
}








const PanelSettings = ({ setRenderComponent, src, page, setHeading, AppliedJobBack, setVerify, profiles, setProfiles,setEditProfile,setSelectedProfileIndex }) => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
        // setHeading('#A00000369')
    }, []);
    const [showOption, setShowOption] = useState('')
    const [audienceType, setAudienceType] = useState('Audience type')
    const [notificationType, setNotificationType] = useState('Notification type')
    const [targetPage, setTargetPage] = useState('Target page')
    const [validity, setValidity] = useState('Validity')
    const [headLine, setHEadLine] = useState('Headline')
    const [isAll, setIsAll] = useState(true)
    const [unaId, setUnaId] = useState(3)

    // const 
    const [userNotificationArray, setuserNotificationArray] = useState([
        {
            id: 1,

            at: 'All Users',
            nt: 'Offers',
            tp: 'Pro Benifits',
            v: '2 Days',
            h: 'Limited Time Offer Only For You.',
            nm: 'Now get 50% discount on Pro Membership. Use voucher code "WT@sgj&mvFaeuk69aqiopzNk%tdas". Offer ends in 2 days. Hurry Up!!',
            date: '21-Jan-2023'
        },
        {
            id: 2,
            at: 'Individual User #A0000000959',
            nt: 'Announcements',
            tp: 'Jobs',
            v: '1 Days',
            h: 'Did you know?',
            nm: 'Over 20 New Job Vacancies Created in the Last 24 Hours.',
            date: '21-Jan-2023'
        }
    ])
    // const [individualUserArray, setIndividualUserArray] = useState([
    //     {
    //         at: 'Individual User #A0000000959',
    //         nt: 'Announcements',
    //         tp: 'Jobs',
    //         v: '1 Days',
    //         h: 'Did you know?',
    //         nm: 'Over 20 New Job Vacancies Created in the Last 24 Hours.',
    //         date:'21-Jan-2023'
    //     }
    // ])



    const dropDownOptionNotification = [
        'Offers',
        'Announcements',
        'Warnings'
    ]
    const dropDownOptionTargetPage = [
        'Pro Benefits',
        'Wallet'
    ]
    const dropDownOptionTargetPageWarning = [
        'None'
    ]

    const dropDownOptionTargetPageIfUser = [
        'Front-end Development',
        'Back-end Development',
        'App Development',
        'DevOps & Deployment',
        'AI/Machine Learning',
        'Data Scientist',
        'Salesforce',
        'UI/UX Designer',
        'Personal Development',
        'Discuss',
        'Challenges',
        'Jobs',
        'Projects',
        'Pro Benefits',
        'Online Internships',
        'Certifications',
        'Wallet',
        'Help Center',
        'Support',
        'None'
    ]
    const dropDownOptionValidity = [
        '1 Day',
        '2 Days',
        '7 Days',
        '15 Days',
        '30 Days',
        'Forever'


    ]

    let getOptionValue = {
        'Audience type': audienceType,
        'Notification type': notificationType,
        'Target page': targetPage,
        'Validity': validity,
        'Headline': headLine,
        'Notification message': '',
        'Audience type set': '',
        'Notification type set': setNotificationType,
        'Target page set': setTargetPage,
        'Validity set': setValidity,
        'Headline set': setHEadLine,
        'Notification message set': '',
        'Audience type option': '',
        'Notification type option': dropDownOptionNotification,
        'Target page option': notificationType == 'Announcements' ? dropDownOptionTargetPageIfUser : notificationType == 'Offers' ? dropDownOptionTargetPage : dropDownOptionTargetPageWarning,
        'Validity option': dropDownOptionValidity,
        'Headline option': '',
        'Notification message option': '',
    }


    // const profile1 = {
    //     firstName: 'John',
    //     lastName: 'Cartel',
    //     loginId: 'ejhfseghefsgjfhdj',
    //     emailAddress: 'johncartel@email.com',
    //     password: 'sdhfgjshj'
    //   };

    //   const profTitle = {
    //     firstName: 'First Name',
    //     lastName: 'Last Name',
    //     loginId: 'Login ID',
    //     emailAddress: 'Email Address',
    //     password: 'Password'
    //   };


    //   const [profile, setProfile] = useState(Object.entries(profile1).map(([key, value]) => {
    //     return { value, label: profTitle[key] };
    // }));





    // console.log(AppliedJobBack);


    const [isOpen, setIsOpen] = useState(false);
    const [com, setCom] = useState(AppliedJobBack || 0);
    const [approve, setApprove] = useState('Pending')
    const [isAlert, setIsAlert] = useState(false)
    const [data, setData] = useState(formData)
    const [postFilled, setPostFilled] = useState(false)
    const [userId, setUSerId] = useState('')
    let dropDownOption = [
        'All Users - Active',
        'All Users - Expired',
        'Individual User - Active',
        'Individual User - Expired'
    ]
    // let dropDownArray = {
    //     'All Users - Active':alluserArray,
    //     'All Users - Expired':[],
    //     'Individual User - Active':individualUserArray,
    //     'Individual User - Expired':[]
    // }
    let dropDownArray = [
        userNotificationArray.filter((ele) => ele.at.includes('All Users')),
        [],
        userNotificationArray.filter((ele) => !ele.at.includes('All Users')),
        []
    ]

    const sendNotification = () => {
        let obj = {
            id: unaId,
            at: audienceType,
            nt: notificationType,
            tp: targetPage,
            v: validity,
            h: data.Headline,
            nm: data['Notification message'],
            date: '21-Jan-2023'
        }
        setuserNotificationArray((ele) => {
            return [...ele, obj]
        })
        setAudienceType('Audience Type')
        setNotificationType('Notification type')
        setTargetPage('Target page')
        setValidity('Validity')
        // setHEadLine('Headline')
        setData({
            'Audience type': '',
            'Notification type': '',
            'Target page': '',
            'Validity': '',
            'Headline': '',
            'Notification message': ''
        })
        setUnaId((ele) => ele + 1)
    }
    const deleteNotification = (index) => {
        setuserNotificationArray((ele) => {
            let arr = ele.filter((e) => e.id != index)
            return arr
        })

    }

    useEffect(() => {
        setData((e) => {


            return {
                ...e,
                'Audience type': audienceType,
                'Notification type': notificationType,
                'Target page': targetPage,
                'Validity': validity,

            }
        })
    }, [notificationType, targetPage, validity, audienceType])

    const handleInputChange = (e, key) => {
        let value = e.target.value

        setData((ele) => {

            return {
                ...ele,
                [key]: value

            }
        })

    }


    useEffect(() => {
        console.log(data, hasEmptyValue(data))
        if (hasEmptyValue(data)) {
            setPostFilled(false)
        }
        else {
            setPostFilled(true)
        }


    }, [data])

    function hasEmptyValue(d) {
        for (const key in d) {
            const value = d[key];
            if (key)

                // Check if value is an empty string
                if (value === '' || (typeof value == 'string' && value.toLowerCase().includes('select'))) {
                    return true;
                }

            // Check if value is an array and contains an empty string
            if (Array.isArray(value) && value.some(item => item === '')) {
                return true;
            }

            // Check if value is an object and has any empty values recursively
            if (typeof value === 'object' && !Array.isArray(value)) {
                if (hasEmptyValue(value)) {
                    return true;
                }
            }
        }
        return false;
    }




    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-60 z-10" onClick={() => { setIsOpen(false); setShowOption('') }}></div>
            )}
            {isAlert && (
                <>
                    <div className="fixed inset-0 bg-black bg-opacity-60 z-[70] flex justify-center items-center " onClick={() => { setIsOpen(false) }}>
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
            <div className="relative h-[70vh] overflow-y-auto ">
                <div className='flex justify-between text-white  text-[14px]'>
                    <div className='flex space-x-[12px]'>




                    </div>
                    <div>
                        <div className='flex justify-between text-white  text-[14px]'>
                            <div>
                                <div className='bg-[#1C202C] flex active:bg-[#00d8ff] active:text-black  justify-center items-center text-xl rounded-[8px] h-[40px] w-[200px] 
                    border-[2px] border-[#1C202C] hover:border-[#00d8ff] hover:text-[#00d8ff]

                    
                    
                    '
                                    onClick={() => {
                                        setRenderComponent(3);

                                    }}
                                >
                                    <span className='cursor-pointer font-semibold'>
                                        Add Admin Profile
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>





                </div>
                <div className='flex flex-wrap justify-evenly gap-[12px]'>
                    {profiles.map((profile, index) => (
                        <div key={index} className="bg-[#1C202C] border-2 border-gray-700 rounded-[16px] overflow-auto pb-[12px] mt-[20px]">
                            <div className="flex flex-col space-y-[12px] w-full px-[12px]">
                                {Array.isArray(profile) && profile.map((ele, i) => (
                                    <div key={i} className='bg-[#0D0D19] flex px-[12px] h-[40px] items-center rounded-[8px] w-full mt-[12px]'>
                                        <span className="text-[#FFE683]  w-[110px]">
                                            {ele.label}
                                        </span>
                                        <span className='px-[6px]'>:</span>
                                        <span>{ele.value}</span>
                                    </div>
                                ))}
                                {/* Buttons for Edit/Delete */}
                                <div className='flex'>
                                    {/* Delete Profile */}
                                    <div className='flex justify-between text-white text-[14px]'>
                                        <div>
                                            <div className='bg-[#161923] flex active:bg-[#00d8ff] active:text-black justify-center items-center text-xl rounded-[8px] h-[40px] w-[200px] border-[2px] border-[#1C202C] hover:border-[#00d8ff] hover:text-[#00d8ff]'
                                                onClick={() => {
                                                    const updatedProfiles = [...profiles];
                                                    updatedProfiles.splice(index, 1);
                                                    setProfiles(updatedProfiles);
                                                    setRenderComponent(7);
                                                    setVerify(1)
                                                }}
                                            >
                                                <span className='cursor-pointer font-semibold'>
                                                    Delete Admin Profile
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Edit Profile */}
                                    <div className='flex justify-between text-white text-[14px]'>
                                        <div>
                                            <div className='bg-[#161923] mx-[12px] flex active:bg-[#00d8ff] active:text-black justify-center items-center text-xl rounded-[8px] h-[40px] w-[200px] border-[2px] border-[#1C202C] hover:border-[#00d8ff] hover:text-[#00d8ff]'
                                                onClick={() => {
                                                    console.log(`Edit credentials for profile: ${index}`)
                                                    setRenderComponent(5);
                                                    setEditProfile(profile)
                                                    setSelectedProfileIndex(index)
                                                }
                                                }
                                            >
                                                <span className='cursor-pointer font-semibold'>
                                                    Edit Credential
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-between text-white text-[14px]'>
                                        <div>
                                            <div className='bg-[#161923] mx-[12px] flex active:bg-[#00d8ff] active:text-black justify-center items-center text-xl rounded-[8px] h-[40px] w-[200px] border-[2px] border-[#1C202C] hover:border-[#00d8ff] hover:text-[#00d8ff]'
                                                onClick={() => {
                                                    console.log(`Edit credentials for profile: ${index}`)
                                                    setRenderComponent(4);
                                                    setVerify(0)
                                                }}
                                            >
                                                <span className='cursor-pointer font-semibold'>
                                                    Change Password
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </>
    )
}


const NotificationMessages = ({ com, dataArr, deleteId }) => {

    // {
    //     at:'All Users',
    //     nt:'Offers',
    //     tp:'Pro Benifits',
    //     v:'2 Days',
    //     h:'Limited Time Offer Only For You.',
    //     nm:'Now get 50% discount on Pro Membership. Use voucher code "WT@sgj&mvFaeuk69aqiopzNk%tdas". Offer ends in 2 days. Hurry Up!!'
    // }
    if (dataArr.length == 0) {
        return (
            <>
                <IfEmpty />
            </>
        )
    }

    return (

        <div className='w-full p-[12px]'>
            <div className="space-y-[12px]">
                {
                    dataArr.map((ele, ind) => {
                        // let vari = {
                        //     at:
                        // }
                        let str = `${ele.at.replaceAll(' ', '-')}/${ele.nt.replaceAll(' ', '-')}/${ele.tp.replaceAll(' ', '-')}/${ele.v.replaceAll(' ', '-')}/${ele.date.replaceAll(' ', '-')}`

                        return (
                            <>

                                <div className='flex flex-col p-[12px] space-y-[12px] w-full bg-[#0D0D19]  rounded-[8px]'
                                    key={ele.h}

                                >
                                    <div className="font-semibold">
                                        {ele.h}
                                    </div>
                                    <div className='text-[#a6a6a6]'>
                                        {ele.nm}
                                    </div>
                                    <div className='text-[#6290c0]'>
                                        {str}
                                    </div>



                                    {/* start */}

                                    <div className='  mt-0
'>

                                        <div className=' text-white  text-[14px] w-full'>
                                            <div>
                                                <button className={` bg-[#2a2f41]  justify-center items-center text-xl rounded-[8px] h-[40px] w-full border-[2px] border-[#1C202C]  ${' flex  active:bg-[#00d8ff] active:text-black hover:border-[#00d8ff] hover:text-[#00d8ff]'} `}
                                                    onClick={() => {
                                                        deleteId(ele.id)


                                                    }}>
                                                    <span className='font-bold'>
                                                        Delete
                                                    </span>
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                    {/* end */}



                                </div>


                            </>

                        )
                    })
                }
            </div>
        </div>
    )

}


const IfEmpty = () => {
    return (
        <>
            <div className=' w-full h-full flex justify-center items-center'>
                <span className='text-[#6290C0]'>No Notifications</span>

            </div>
        </>
    )
}







export default PanelSettings
