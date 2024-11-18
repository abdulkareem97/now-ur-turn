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




const NotificationCom = ({ setRenderComponent, src, page, setHeading, AppliedJobBack }) => {
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
    const [unaId,setUnaId] = useState(3)

    // const 
    const [userNotificationArray, setuserNotificationArray] = useState([
        {
            id:1,
            
            at: 'All Users',
            nt: 'Offers',
            tp: 'Pro Benifits',
            v: '2 Days',
            h: 'Limited Time Offer Only For You.',
            nm: 'Now get 50% discount on Pro Membership. Use voucher code "WT@sgj&mvFaeuk69aqiopzNk%tdas". Offer ends in 2 days. Hurry Up!!',
            date:'21-Jan-2023'
        },
        {
            id:2,
            at: 'Individual User #A0000000959',
            nt: 'Announcements',
            tp: 'Jobs',
            v: '1 Days',
            h: 'Did you know?',
            nm: 'Over 20 New Job Vacancies Created in the Last 24 Hours.',
            date:'21-Jan-2023'
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
        'Target page option': notificationType == 'Announcements' ? dropDownOptionTargetPageIfUser : notificationType == 'Offers' ? dropDownOptionTargetPage:dropDownOptionTargetPageWarning,
        'Validity option': dropDownOptionValidity,
        'Headline option': '',
        'Notification message option': '',
    }






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
        userNotificationArray.filter((ele)=>ele.at.includes('All Users')),
      [],
      userNotificationArray.filter((ele)=>!ele.at.includes('All Users')),
    []
    ]

    const sendNotification = () => {
        let obj = {
            id:unaId,
            at: audienceType,
            nt: notificationType,
            tp: targetPage,
            v: validity,
            h: data.Headline,
            nm: data['Notification message'],
            date:'21-Jan-2023'
        }
        setuserNotificationArray((ele)=>{
            return [...ele,obj]
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
        setUnaId((ele)=>ele+1)
    }
    const deleteNotification = (index) => {
        setuserNotificationArray((ele)=>{
            let arr = ele.filter((e)=>e.id!=index)
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
    }, [notificationType, targetPage, validity,audienceType])

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


                    </div>
                    <div>
                        <div className="relative inline-block text-left z-20">
                            {/* Dropdown Button */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`bg-[#1C202C] text-white h-[40px] px-[12px] rounded-[8px] flex items-center  hover:border-2 active:bg-[#00d8ff] active:text-black   hover:border-[#00d8ff] focus:outline-none w-[200px] justify-between ${(isOpen && showOption == '') ? 'border-[#00d8ff] border-2' : ''} group `}
                            >
                                <span>
                                    {
                                        // com == 1 ? 'All Jobs' : com == 2 ? 'Data Access' : 'Chat Conversations'
                                        dropDownOption[com]
                                    }

                                </span>
                                <span className={`${(isOpen && showOption == '') ? 'text-[#00d8ff]' : ''} group-hover:text-[#00d8ff]`}>
                                    <DropDownSvg />
                                </span>
                            </button>

                            {/* Dropdown Menu */}
                            {(isOpen && showOption == '') && (
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



                </div>
                <div className='mt-[12px] flex space-x-[40px] text-white text-[20px] h-[73vh]'>
                    <div className="bg-[#1C202C] border-2 border-[#FFFFFF] rounded-[16px] w-[50%] 
                overflow-auto pb-[12px]
                ">
                        <div className='p-[12px] pb-0 space-y-[12px]'>

                            {
                                Object.entries(data).map(([key, value], ind) => {

                                    return (
                                        <>


                                            <div className=''>

                                                {


                                                    (key == 'Notification type' || key == 'Target page' || key == 'Validity') ? <>

                                                        <div className='w-full'>
                                                            <div className={`relative inline-block text-left ${showOption == key ? 'z-20' : ''} w-full`}>
                                                                {/* Dropdown Button */}
                                                                <button
                                                                    onClick={() => {
                                                                        setShowOption(key)
                                                                        setIsOpen(true);
                                                                    }
                                                                    }
                                                                    className={`bg-[#0D0D19] text-white h-[40px] w-full px-[12px] rounded-[8px] flex items-center  hover:border-2 active:bg-[#00d8ff] active:text-black   hover:border-[#00d8ff] focus:outline-none  justify-between ${showOption == key ? 'border-[#00d8ff] border-2' : ''} group `}
                                                                >
                                                                    <span 
                                                                    className={`${(key==getOptionValue[key]) ?'text-[#6290C0]':''}`}
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
                                                    </>
                                                        :

                                                        (key == 'Headline') ?
                                                            <textarea
                                                                className="bg-[#0D0D19] rounded-[8px] w-full px-[12px] text-white resize-none overflow-hidden h-auto min-h-[40px] py-[10px] placeholder:text-[#6290c0] placeholder:opacity-90"
                                                                rows="3"
                                                                value={data.Headline}
                                                                // onInput={(e) => {
                                                                //     e.target.style.height = "auto";
                                                                //     e.target.style.height = `${e.target.scrollHeight}px`;
                                                                // }}
                                                                onChange={(e) => handleInputChange(e, key)}
                                                                placeholder="Headline"
                                                            />



                                                            :
                                                            (key == 'Notification message') ?
                                                                <textarea
                                                                    className="bg-[#0D0D19] rounded-[8px] w-full px-[12px] text-white resize-none overflow-hidden h-auto min-h-[40px] py-[10px] placeholder:text-[#6290c0] placeholder:opacity-90"
                                                                    rows="8"
                                                                    value={data['Notification message']}
                                                                    // onInput={(e) => {
                                                                    //     e.target.style.height = "auto";
                                                                    //     e.target.style.height = `${e.target.scrollHeight}px`;
                                                                    // }}
                                                                    onChange={(e) => handleInputChange(e, key)}
                                                                    placeholder="Notification message"
                                                                />
                                                                :
                                                                <>
                                                                    <div className='w-full'>
                                                                        <div className={`relative inline-block text-left ${showOption == key ? 'z-20' : ''} w-full`}>
                                                                            {/* Dropdown Button */}
                                                                            <button
                                                                                onClick={() => {
                                                                                    setShowOption(key)
                                                                                    setIsOpen(true);
                                                                                }
                                                                                }
                                                                                className={`bg-[#0D0D19] text-white h-[40px] w-full px-[12px] rounded-[8px] flex items-center  hover:border-2 active:bg-[#00d8ff] active:text-black   hover:border-[#00d8ff] focus:outline-none  justify-between ${showOption == key ? 'border-[#00d8ff] border-2' : ''} group `}
                                                                            >
                                                                                <span
                                                                                  className={`${(key==getOptionValue[key]) ?'text-[#6290C0]':''}`}
                                                                                
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
                                                                                    <div className="flex p-[12px]">
                                                                                        {/* Left Section: All Users */}
                                                                                        <div className="w-1/2 p-6 flex flex-col items-center justify-between border-r border-gray-700">
                                                                                            <h2 className="text-lg  mb-[12px]">All Users</h2>
                                                                                            <div className='bg-[#2a2f41] flex active:bg-[#00d8ff] active:text-black  justify-center items-center text-xl rounded-[8px] h-[40px] w-[200px] 
                    border-[2px] border-[#1C202C] hover:border-[#00d8ff] hover:text-[#00d8ff]

                    
                    
                    '
                                                                                                // onClick={() => setApprove('Pending')}
                                                                                                onClick={() => {
                                                                                                    setAudienceType('All Users')
                                                                                                    setIsOpen(false)
                                                                                                    setShowOption('')
                                                                                                }}

                                                                                            >
                                                                                                <span className='font-semibold'>
                                                                                                    Select
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>

                                                                                        {/* Right Section: Individual User */}
                                                                                        <div className="w-1/2 p-6 flex flex-col items-center justify-between">
                                                                                            <h2 className="text-lg  mb-[12px]">Individual User</h2>
                                                                                            <textarea
                                                                                                className="bg-[#0D0D19] rounded-[8px] w-[200px] px-[12px] text-white resize-none overflow-hidden h-auto min-h-[40px] py-[10px] placeholder:text-[#6290c0] placeholder:opacity-90 mb-[12px] placeholder:text-center"
                                                                                                rows="1"
                                                                                                // onInput={(e) => {
                                                                                                //     e.target.style.height = "auto";
                                                                                                //     e.target.style.height = `${e.target.scrollHeight}px`;
                                                                                                // }}
                                                                                                onChange={(e) => setUSerId(e.target.value)}
                                                                                                placeholder="Enter Account Id"
                                                                                            />
                                                                                            <button className={` bg-[#2a2f41]  justify-center items-center text-xl rounded-[8px] h-[40px] w-[200px] border-[2px] border-[#1C202C]  ${userId ? ' flex  active:bg-[#00d8ff] active:text-black hover:border-[#00d8ff] hover:text-[#00d8ff]' : 'bg-[#6290c0]'} `}
                                                                                                onClick={() => {
                                                                                                    if (userId) {

                                                                                                        // setRenderComponent(src);
                                                                                                        setAudienceType(`Individual User - ${userId}`)
                                                                                                        setIsOpen(false)
                                                                                                        setShowOption('')
                                                                                                        setUSerId('')
                                                                                                    }


                                                                                                }}>
                                                                                                <span className='font-bold'>
                                                                                                    Select
                                                                                                </span>
                                                                                            </button>

                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    </div>




                                                                </>




                                                }


                                            </div>

                                        </>
                                    )
                                })
                            }

                        </div>
                        <div className=' p-[12px] mt-0
'>

                            <div className=' text-white  text-[14px] w-full'>
                                <div>
                                    <button className={` bg-[#2a2f41]  justify-center items-center text-xl rounded-[8px] h-[40px] w-full border-[2px] border-[#1C202C]  ${postFilled ? ' flex  active:bg-[#00d8ff] active:text-black hover:border-[#00d8ff] hover:text-[#00d8ff]' : 'bg-[#6290c0]'} `}
                                        onClick={() => {
                                            if (postFilled) {

                                               sendNotification()
                                            }


                                        }}>
                                        <span className='font-bold'>
                                            Send
                                        </span>
                                    </button>

                                </div>
                            </div>



                        </div>






                    </div>

                    <div className="bg-[#1C202C] border-2 overflow-auto border-[#FFFFFF] rounded-[16px] w-[50%]">

                        <NotificationMessages com={com} dataArr={dropDownArray[com]} deleteId={deleteNotification} />

                    </div>
                </div>
            </div>
        </>
    )
}


const NotificationMessages = ({com, dataArr,deleteId}) => {

    // {
    //     at:'All Users',
    //     nt:'Offers',
    //     tp:'Pro Benifits',
    //     v:'2 Days',
    //     h:'Limited Time Offer Only For You.',
    //     nm:'Now get 50% discount on Pro Membership. Use voucher code "WT@sgj&mvFaeuk69aqiopzNk%tdas". Offer ends in 2 days. Hurry Up!!'
    // }
    if(dataArr.length==0){
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







export default NotificationCom

