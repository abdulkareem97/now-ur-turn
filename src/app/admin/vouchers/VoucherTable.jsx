'use client'
import React, { useEffect, useState } from 'react'
// import data from '../data'
import Image from 'next/image'
import BackBlack from '../components/BackBlack';
import DropDownSvg from '../components/DropDownSvg';
import { IoReloadCircleSharp } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";
import { FaSearch } from 'react-icons/fa';

const allVoucher = [
    {
        voucherCode: 'MnHsibOBakl2oakInb@pshbdmlqlms',
        disPerc: 'Discount Percentage',
        usabiltityType: 'One-time Usable',
        createdDate: '21 Jan 2023',
        expiryDate: '21 Feb 2023',
        voucherStatus: 'Active',


    },



]

const dataOption = {
    'Discount Percentage': '',
    'Usability Type': '',
    'Validity': '',
}


const VoucherTable = ({ setRenderComponent, setHeading, setAppliedJobBack }) => {
    const [data, setData] = useState([...allVoucher])
    const [data1, setData1] = useState(dataOption)
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
        // setHeading('Resume')
    }, []);
    const [isOpen, setIsOpen] = useState(false);
    const [com, setCom] = useState(1);
    const dropDownOptionDisPerc = [
        // 'Discount Percentage',
        '10% Discount',
        '20% Discount',
        '30% Discount',
        '40% Discount',
        '50% Discount',
        '60% Discount',
        '70% Discount',
        '80% Discount',
        '90% Discount',
        '100% Discount',

    ]
    const dropDownOptionUsabilityType = [
        // 'Usability Type',
        'One-time Usable',
        'Reusable'
    ]
    const dropDownOptionValidity = [
        // 'Validity',
        '1 Month',
        '2 Month',
        '3 Month',
        '4 Month',
        '5 Month',
        '6 Month',
    ]



    const [isLoading, setIsLoading] = useState(false);
    const [disPer, setDisPer] = useState('Discount Percentage')
    const [usaType, setUsaType] = useState('Usability Type')
    const [val, setVal] = useState('Validity')

    let getOptionValue = {
        'Discount Percentage': disPer,
        'Usability Type': usaType,
        'Validity': val,
        'Discount Percentage set': setDisPer,
        'Usability Type set': setUsaType,
        'Validity set': setVal,
        'Discount Percentage option': dropDownOptionDisPerc,
        'Usability Type option': dropDownOptionUsabilityType,
        'Validity option': dropDownOptionValidity,

    }

    const [isPost,setIsPost]=useState(true)
    
    useEffect(()=>{
if (disPer=='Discount Percentage' || usaType=='Usability Type' || val=='Validity') {
    setIsPost(false)
}else{
    setIsPost(true)
}
    },[disPer,usaType,val])

    const [showOption, setShowOption] = useState('')
    const generateCode = () => {
        setData((ele)=>{
            return [    {
                voucherCode: 'MnHsibOBakl2oakInb@pshbdmlqlms',
                disPerc:disPer,
                usabiltityType: usaType,
                createdDate: '21 Jan 2023',
                expiryDate: '21 Feb 2023',
                voucherStatus: 'Active',
        
        
            }
                ,...ele
            ]
        })
       setDisPer('Discount Percentage')
       setUsaType('Usability Type')
      setVal('Validity')
    
    }
 
    const handleClick = () => {
        setIsLoading(true);
        // Simulate a process (e.g., API call)
        setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Spinner will stop after 3 seconds
    };

    const onDelete = (ind) =>{
        setDId(ind)
        setIsAlert(true)
    }

    const [isAlert,setIsAlert] = useState(false)
    const [did,setDId] = useState(0)
    const deleteThis = () =>{
        setData((ele)=>{
            let d = [...ele]
            // d.splice(did,1)
            d[did] = {
                ...d[did],
                voucherStatus:'Deleted'
            }
            return [...d]
        })
        
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
                            <div className="text-center font-semibold">Are you sure want to delete the Voucher?</div>
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
                                        // setApprove('Pending');
                                        setIsAlert(false)
                                        deleteThis()

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

            <div className="relative">
                <div className='flex justify-between text-white  text-[14px]'>
                    <div className='bg-[#1C202C] flex p-[40px] w-full space-x-[40px] rounded-[16px] border-[#2a2f41] border-[2px]'>


                        {/*  */}
                        {
                            Object.entries(data1).map(([key, value], ind) => {


                                return (

                                    <div className='w-full' key={key}>
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
                                                    className={`${(key == getOptionValue[key]) ? 'text-[#6290C0]' : ''}`}
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
                                )
                            }
                            )}



                        {/*  */}
                     
                                <div className='w-full'> 
                                    <button className={` bg-[#2a2f41]  justify-center items-center text-xl rounded-[8px] h-[40px] w-full border-[2px] border-[#1C202C]  ${isPost ? ' flex  active:bg-[#00d8ff] active:text-black hover:border-[#00d8ff] hover:text-[#00d8ff]' : 'bg-[#6290c0]'} `}
                                        onClick={() => {
                                            if (isPost) {

                                            //    sendNotification()
                                            generateCode()
                                            }


                                        }}>
                                        <span className='font-bold'>
                                        Generate Code
                                        </span>
                                    </button>

                                </div>
                         


                    </div>



                </div >
                <div className='mt-[12px] flex space-x-[40px] text-white text-[14px] h-[73vh]'>
                    <div className="bg-[#1C202C] border-2 overflow-auto border-[#FFFFFF] rounded-[16px] w-full">
                        <VoucherHtable setRenderComponent={setRenderComponent} setAppliedJobBack={setAppliedJobBack} data={data} onDelete={onDelete} />
                    </div>

                </div>
            </div >


        </>
    )
}
const VoucherHtable = ({ setRenderComponent, setAppliedJobBack, data,onDelete }) => {

    return (
        <div className="overflow-auto">
            <table className=" w-full bg-[#1C202C] rounded-lg border border-[#2A2F41] table-fixed">
                <thead>
                    <tr className="h-[40px]">


                        <th className="px-[12px] text-[#FFE683] border-r border-b-[2px] border-[#2A2F41] border-b-[#ffffff] border-r-[#ffffff] ">S.No</th>
                        <th className="px-[12px] text-[#FFE683] border-r border-b-[2px] border-[#2A2F41] border-b-[#ffffff] border-r-[#ffffff] w-[300px]">Voucher Code</th>
                        <th className="px-[12px] text-[#FFE683] border-r border-b-[2px] border-[#2A2F41] border-b-[#ffffff] border-r-[#ffffff] ">Discount Percentage</th>
                        <th className="px-[12px] text-[#FFE683] border-r border-b-[2px] border-[#2A2F41] border-b-[#ffffff] border-r-[#ffffff] ">Usability Type</th>
                        <th className="px-[12px] text-[#FFE683] border-r border-b-[2px] border-[#2A2F41] border-b-[#ffffff] border-r-[#ffffff] ">Created Date</th>
                        <th className="px-[12px] text-[#FFE683] border-r border-b-[2px] border-[#2A2F41] border-b-[#ffffff] border-r-[#ffffff] ">Expiry Date</th>
                        <th className="px-[12px] text-[#FFE683] border-r border-b-[2px] border-[#2A2F41] border-b-[#ffffff] border-r-[#ffffff] ">Voucher Status</th>
                        <th className="px-[12px] text-[#FFE683] border-r border-b-[2px] border-[#2A2F41] border-b-[#ffffff] border-r-[#ffffff] ">Copy Code</th>


                        <th className="px-[12px] text-[#FFE683] border-r border-b-[2px] border-[#2A2F41] border-b-[#ffffff] border-r-[#ffffff]">Action</th>

                    </tr>
                </thead>

                <tbody>
                    {data.map((ele, i) => {
                        let color = i % 2 === 0 ? 'bg-[#161923]' : 'bg-[#1C202C]';
                        return (
                            <tr key={i} className={`${color} h-[40px]`}>
                                <td className="px-[12px] text-center border-r border-b border-[#2A2F41] border-r-[#ffffff]">{(i + 1)}</td>
                                <td className="px-[12px] text-center border-r border-b border-[#2A2F41] border-r-[#ffffff]">{ele.voucherCode}</td>
                                <td className="px-[12px] text-center border-r border-b border-[#2A2F41] border-r-[#ffffff]">{ele.disPerc}</td>
                                <td className="px-[12px] text-center border-r border-b border-[#2A2F41] border-r-[#ffffff]">{ele.usabiltityType}</td>
                                <td className="px-[12px] text-center border-r border-b border-[#2A2F41] border-r-[#ffffff]">{ele.createdDate}</td>
                                <td className="px-[12px] text-center border-r border-b border-[#2A2F41] border-r-[#ffffff]">{ele.expiryDate}</td>
                                <td className={`px-[12px] text-center border-r border-b border-[#2A2F41] border-r-[#ffffff] ${ele.voucherStatus === 'Active' ? 'text-[#00e262]' : 'text-[#ff5757]'}`}>{ele.voucherStatus}</td>
                                <td className={`px-[12px] text-center border-r border-b border-[#2A2F41] border-r-[#ffffff] ${ele.voucherStatus === 'Active' ? 'underline cursor-pointer' : ''}`}
                                onClick={
                                    ()=>{
                                        navigator.clipboard.writeText(ele.voucherCode).then(() => {
                                            // alert("Link copied to clipboard!");
                                            console.log('copied')
                                        });
                                    }
                                }
                                >{ele.voucherStatus == 'Active' ? 'Copy' : '-'}</td>





                                <td className={`px-[12px] text-center  border-b border-[#2A2F41] ${ele.voucherStatus === 'Active' ? 'underline cursor-pointer' : ''}`}
                                onClick={()=>onDelete(i)}
                                >{ele.voucherStatus == 'Active' ? 'Delete' : '-'}</td>

                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};





export default VoucherTable

