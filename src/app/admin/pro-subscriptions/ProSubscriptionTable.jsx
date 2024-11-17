'use client'
import React, { useEffect, useState } from 'react'
// import data from '../data'
import Image from 'next/image'
import BackBlack from '../components/BackBlack';
import DropDownSvg from '../components/DropDownSvg';

const allProSubscription = [
    {
        accountId: '#A0000000959',
        subscriptionStatus:'Active',
        startDate:'21 Jan 2023',
        endDate:'21 Jan 2024',
        paymentType:'Online',
        paymentRecieved:'1499₹'
    },
    {
        accountId: '#A0000000959',
        subscriptionStatus:'Active',
        startDate:'21 Jan 2023',
        endDate:'21 Jan 2024',
        paymentType:'Online',
        paymentRecieved:'1499₹'
    },
    {
        accountId: '#A0000000959',
        subscriptionStatus:'Active',
        startDate:'21 Jan 2023',
        endDate:'21 Jan 2024',
        paymentType:'Online',
        paymentRecieved:'1499₹'
    },

]
const ProSubscriptionTable = ({ setRenderComponent, setHeading, setAppliedJobBack }) => {
    const [data,setData]= useState([...allProSubscription])
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
        // setHeading('Resume')
    }, []);
    const [isOpen, setIsOpen] = useState(false);
    const [com, setCom] = useState(1);
    let dropDownOption = [
        'All Subscriptions',
        'Active Status',
        'Expired Status',
        'Via Online Payment',
        'Via Free Voucher'
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
                <div className='mt-[12px] flex space-x-[40px] text-white text-[14px] h-[73vh]'>
                    <div className="bg-[#1C202C] border-2 overflow-auto border-[#FFFFFF] rounded-[16px] w-full">
                        <SubscriptionTable setRenderComponent={setRenderComponent} setAppliedJobBack={setAppliedJobBack} data={data} />
                    </div>

                </div>
            </div>


        </>
    )
}
const SubscriptionTable = ({ setRenderComponent,setAppliedJobBack,data }) => {
 
    return (
        <div className="overflow-auto">
            <table className="table-fixed w-full bg-[#1C202C] rounded-lg border border-[#2A2F41]">
                <thead>
                    <tr className="h-[40px]">
                        <th className="px-[12px] text-[#FFE683] border-r border-b-[2px] border-[#2A2F41] border-b-[#ffffff] border-r-[#ffffff]">S. No</th>
                        <th className="px-[12px] text-[#FFE683] border-r border-b-[2px] border-[#2A2F41] border-b-[#ffffff] border-r-[#ffffff] w-[600px]">Account ID</th>
                        <th className="px-[12px] text-[#FFE683] border-r border-b-[2px] border-[#2A2F41] border-b-[#ffffff] border-r-[#ffffff]">Subscription Status</th>
                        <th className="px-[12px] text-[#FFE683] border-r border-b-[2px] border-[#2A2F41] border-b-[#ffffff] border-r-[#ffffff]">Start Date</th>
                        <th className="px-[12px] text-[#FFE683] border-r border-b-[2px] border-[#2A2F41] border-b-[#ffffff] border-r-[#ffffff]">End Date</th>
                        <th className="px-[12px] text-[#FFE683] border-r border-b-[2px] border-[#2A2F41] border-b-[#ffffff] border-r-[#ffffff]">Payment Type</th>
                        <th className="px-[12px] text-[#FFE683] border-r border-b-[2px] border-[#2A2F41] border-b-[#ffffff] border-r-[#ffffff]">Payment Received</th>
                      
                    </tr>
                </thead>

                <tbody>
                    {data.map((ele, i) => {
                        let color = i % 2 === 0 ? 'bg-[#161923]' : 'bg-[#1C202C]';
                        return (
                            <tr key={i} className={`${color} h-[40px]`}>
                                <td className="px-[12px] text-center border-r border-b border-[#2A2F41] border-r-[#ffffff]">{i}</td>
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
                                <td className={`px-[12px] text-center border-r border-b border-[#2A2F41] border-r-[#ffffff] ${ele.subscriptionStatus === 'Active' ? 'text-[#00e262]' : 'text-[#ff5757]'}`}>
                                    {ele.subscriptionStatus}
                                </td>
                                <td className="px-[12px] text-center border-r border-b border-[#2A2F41] border-r-[#ffffff]">{ele.startDate}</td>
                                <td className="px-[12px] text-center border-r border-b border-[#2A2F41] border-r-[#ffffff]">{ele.endDate}</td>
                                <td className="px-[12px] text-center border-r border-b border-[#2A2F41] border-r-[#ffffff]">{ele.paymentType}</td>
                                <td className="px-[12px] text-center  border-b border-[#2A2F41] ">{ele.paymentRecieved}</td>
                               
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};



export default ProSubscriptionTable

