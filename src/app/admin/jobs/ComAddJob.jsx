'use client'
import React, { useEffect, useState } from 'react'
import BackBlack from '../components/BackBlack'
import DropDownSvg from '../components/DropDownSvg'
import { countries, currencies, districts, states } from './locationdata'
import { FaSearch } from 'react-icons/fa';

let formData = {
    'Company Name': '',
    'About Company': '',
    'Office Locations': ['', ''],
    'Job Title': '',
    'Job Type': '',
    'Workplace Type': '',
    'Job Location': { 'country': '', 'state': '', 'district': '' },
    'Min Work Experience': '',
    'Currency': '',
    'Minimum Salary': '',
    'Maximum Salary': '',
    'About Job': '',
    'Eligibility to Apply': '',
    'Apply Now URL': ''
}

const ComAddJob = ({setRenderComponent}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [image, setImage] = useState(null);
    const [data, setData] = useState(formData)
    const [showOption, setShowOption] = useState('')

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }, []);

    const [jobTypeCom, setJobTypeCom] = useState('');
    const [workspaceTypeCom, setworkspaceTypeCom] = useState('');
    const [workExperienceCom, setWorkExperienceCom] = useState('');
    const [minimumSalary, setMinimumSalary] = useState('');
    const [maximumSalary, setMaximumSalary] = useState('');
    const [currency, setCurrency] = useState('');
    // const [minimumSalary, setMinimumSalary] = useState('');
    const [country, setcountry] = useState('Select Country');
    const [state, setstate] = useState('Select State');
    const [district, setdistrict] = useState('Select District');

    let dropDownOptionJobType = [
        'All Jobs',
        'Full Time Jobs',
        'Part Time Jobs',
        'Internships',
        'Apprenticeships',
        'Contracts',
        'others'
    ]
    let dropDownOptionJWorkspaceType = [
        'on site',
        'of site',
        'hybrid',
        'remote'
    ]
    let dropdownWorkExperience = [
        '1+',
        '2+',
        '3+',
    ]
    let dropdownMinimumSalary = [
        '1lakh',
        '2lakh',
        '3lakh',
        '4lakh',
        '5lakh',
        '6lakh',
        '7lakh',
    ]
    let dropdownMaxSalary = [
        '1lakh',
        '2lakh',
        '3lakh',
        '4lakh',
        '5lakh',
        '6lakh',
        '7lakh',
    ]



    const [csearch, setCSearch] = useState([...countries].slice(0, 5))
    const [ssearch, setSSearch] = useState([...states].slice(0, 5))
    const [dsearch, setDSearch] = useState([...districts].slice(0, 5))
    const [cusearch, setcuSearch] = useState([...currencies].slice(0, 5))
    const [msSearch, setMsSearch] = useState([...dropdownMinimumSalary].slice(0, 5))
    const [maxSearch, setMaxSearch] = useState([...dropdownMaxSalary].slice(0, 5))
    const [searchText, setSearchText] = useState('')

    let getOptionValue = {
        'Job Type': jobTypeCom,
        'Workplace Type': workspaceTypeCom,
        'Min Work Experience': workExperienceCom,
        'Currency': currency,
        'Minimum Salary': minimumSalary,
        'Maximum Salary': maximumSalary,
        'Job Type set': setJobTypeCom,
        'Workplace Type set': setworkspaceTypeCom,
        'Min Work Experience set': setWorkExperienceCom,
        'Minimum Salary set': setWorkExperienceCom,
        'Currency set': setCurrency,
        'Minimum Salary set': setMinimumSalary,
        'Maximum Salary set': setMaximumSalary,
        'Job Type option': dropDownOptionJobType,
        'Workplace Type option': dropDownOptionJWorkspaceType,
        'Min Work Experience option': dropdownWorkExperience,
        'Minimum Salary option': dropdownWorkExperience,
        'Currency option': cusearch,
        'Minimum Salary option': msSearch,
        'Maximum Salary option': maxSearch,
    }

    const searchTextMethod = (type, value) => {
        if (type == 'countries') {
            setCSearch(countries.filter((e) => e.toLowerCase().startsWith(value.toLowerCase())).filter((ele, ind) => ind <= 5))
        }
        else if (type == 'states') {
            setSSearch(states.filter((e) => e.toLowerCase().startsWith(value.toLowerCase())).filter((ele, ind) => ind <= 5))
        }
        else if (type == 'districts') {
            setDSearch(districts.filter((e) => e.toLowerCase().startsWith(value.toLowerCase())).filter((ele, ind) => ind <= 5))
        }
        else if (type == 'Currency') {
            setcuSearch(currencies.filter((e) => e.toLowerCase().startsWith(value.toLowerCase())).filter((ele, ind) => ind <= 5))
        }
        else if (type == 'Minimum Salary') {
            setMsSearch(dropdownMinimumSalary.filter((e) => e.toLowerCase().startsWith(value.toLowerCase())).filter((ele, ind) => ind <= 5))
        }
        else if (type == 'Maximum Salary') {
            setMaxSearch(dropdownMaxSalary.filter((e) => e.toLowerCase().startsWith(value.toLowerCase())).filter((ele, ind) => ind <= 5))
        }

    }

    const addMore = ()=>{
        setData((ele)=>{
            console.log(ele)
            return {
                ...ele,
                'Office Locations':[...ele['Office Locations'],'']

            }
        })
    }



    // console.log(getOptionValue['Job Type option'][1])
    return (
        <>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-60 z-10" onClick={() => { setIsOpen(false); setShowOption('') }}></div>
            )}

            <div className='flex justify-center  overflow-auto'>
                <div className="relative w-[50%]   ">
                    <div className='flex justify-between text-white  text-[14px]'>
                        <div>
                            <div className='bg-[#1C202C] flex active:bg-[#00d8ff] active:text-black  justify-center items-center text-xl rounded-[8px] h-[40px] w-[40px] 
                    border-[2px] border-[#1C202C] hover:border-[#00d8ff] hover:text-[#00d8ff]

                    
                    
                    '
                    onClick={()=>setRenderComponent(1)}
                    
                    >
                                <span className=''>
                                    <BackBlack />
                                </span>
                            </div>

                        </div>

                    </div>

                    {/* container */}

                    <div className='mt-[12px] flex space-x-[40px] text-white text-[20px] '>
                        <div className="bg-[#1C202C] border-2 border-[#FFFFFF] rounded-[16px]  w-full
                py-[12px] space-y-[12px] px-[12px]
                ">

                            {/* image input */}
                            <div className="flex flex-col items-center">
                                <label className="cursor-pointer">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden"
                                    />
                                    {image ? (
                                        <img
                                            src={image}
                                            alt="Uploaded"
                                            className="w-[144px] rounder-container h-[144px] object-cover rounded"
                                        />
                                    ) : (
                                        <div className="w-[144px] rounder-container h-[144px] input-container flex items-center justify-center text-white text-center underline">
                                            Upload Logo
                                        </div>
                                    )}
                                </label>
                            </div>

                            {
                                Object.entries(data).map(([key, value], ind) => {

                                    return (
                                        <>
                                            <div className=''>
                                                <div className="text-[#FFE683] cursor-pointer">
                                                    <span className="">{key}</span>
                                                </div>
                                                <div className='space-y-[6px] mt-[6px]'>

                                                    {
                                                        key == 'Office Locations' ?
                                                            <>
                                                                {
                                                                    value.map((ele) => {
                                                                        console.log('testing',ele)
                                                                        return (
                                                                            <>

                                                                                <textarea
                                                                                    className="bg-[#0D0D19] rounded-[8px] w-full px-[12px] text-white resize-none overflow-hidden h-auto min-h-[40px] py-[10px] placeholder:text-[#6290c0] placeholder:opacity-90"
                                                                                    rows="1"
                                                                                    onInput={(e) => {
                                                                                        e.target.style.height = "auto";
                                                                                        e.target.style.height = `${e.target.scrollHeight}px`;
                                                                                    }}
                                                                                    placeholder="Type here"
                                                                                />


                                                                            </>
                                                                        )
                                                                    })}
                                                                < div className=' text-white  text-[14px] w-full'>
                                                                    <div>
                                                                        <button className='bg-[#1C202C] flex bg-[#2a2f41] active:bg-[#00d8ff] active:text-black  justify-center items-center text-xl rounded-[8px] h-[40px] w-full
    border-[2px] border-[#1C202C] hover:border-[#00d8ff] hover:text-[#00d8ff]

    
    
    '
    onClick={addMore}
    >
                                                                            <span className='font-bold'>
                                                                                Add More
                                                                            </span>
                                                                        </button>

                                                                    </div>

                                                                </div>
                                                            </>




                                                            :

                                                            (key == 'Job Type' || key == 'Workplace Type' || key == 'Min Work Experience') ? <>

                                                                <div className='w-full'>
                                                                    <div className={`relative inline-block text-left ${showOption == key ? 'z-20' : ''} w-full`}>
                                                                        {/* Dropdown Button */}
                                                                        <button
                                                                            onClick={() => {
                                                                                setShowOption(key)
                                                                                setIsOpen(true);
                                                                            }
                                                                            }
                                                                            className={`bg-[#2a2f41] text-white h-[40px] w-full px-[12px] rounded-[8px] flex items-center  hover:border-2 active:bg-[#00d8ff] active:text-black   hover:border-[#00d8ff] focus:outline-none  justify-between ${showOption == key ? 'border-[#00d8ff] border-2' : ''} group `}
                                                                        >
                                                                            <span>
                                                                                {
                                                                                    // com == 1 ? 'All Jobs' : com == 2 ? 'Data Access' : 'Chat Conversations'
                                                                                    getOptionValue[key]
                                                                                    // getOptionValue[key + ' option'].toString()
                                                                                    // getOptionValue['Workplace option'][1]
                                                                                }

                                                                            </span>
                                                                            <span className={`${showOption == key ? 'text-[#00d8ff]' : ''} group-hover:text-[#00d8ff]`}>
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
                                                            </> :

                                                                (key == 'Job Location') ? <>

                                                                    <div className='w-full'>
                                                                        <div className={`relative inline-block text-left ${showOption == key ? 'z-20' : ''} w-full`}>
                                                                            {/* Dropdown Button */}
                                                                            <button
                                                                                onClick={() => {
                                                                                    setShowOption('countries')
                                                                                    setIsOpen(true);
                                                                                }
                                                                                }
                                                                                className={`bg-[#2a2f41] text-white h-[40px] w-full px-[12px] rounded-[8px] flex items-center  hover:border-2 active:bg-[#00d8ff] active:text-black   hover:border-[#00d8ff] focus:outline-none  justify-between ${showOption == 'countries' ? 'border-[#00d8ff] border-2' : ''} group `}
                                                                            >
                                                                                <span>
                                                                                    {
                                                                                        // com == 1 ? 'All Jobs' : com == 2 ? 'Data Access' : 'Chat Conversations'
                                                                                        // getOptionValue[key + ' option'][getOptionValue[key]]
                                                                                        // getOptionValue[key + ' option'].toString()
                                                                                        // getOptionValue['Workplace option'][1]
                                                                                        country
                                                                                    }

                                                                                </span>
                                                                                <span className={`${showOption == 'countries' ? 'text-[#00d8ff]' : ''} group-hover:text-[#00d8ff]`}>
                                                                                    <DropDownSvg />
                                                                                </span>
                                                                            </button>

                                                                            {/* Dropdown Menu */}
                                                                            {showOption == 'countries' && (
                                                                                <div className="absolute z-30 mt-[12px] w-full bg-[#1C202C] text-white rounded-[8px] shadow-lg border-2 border-gray-700">
                                                                                    <div className="relative">
                                                                                        <input
                                                                                            className="bg-[#0D0D19] rounded-[8px] input-search-width px-[12px] text-white resize-none overflow-hidden h-auto min-h-[40px] py-[10px] placeholder:text-[#6290c0] placeholder:opacity-90 m-[12px] pr-[30px]"
                                                                                            onChange={(e) => searchTextMethod('countries', e.target.value)}
                                                                                            placeholder="Type here"
                                                                                        />
                                                                                        <FaSearch className="absolute right-[24px] top-1/2 transform -translate-y-1/2 text-[#6290c0]" />
                                                                                    </div>

                                                                                    <ul className="py-1">
                                                                                        {

                                                                                            csearch.map((ele, ind) => {
                                                                                                return (
                                                                                                    <li key={key} className="px-[12px] py-2  hover:text-[#87ceeb] active:text-[#00d8ff] cursor-pointer "
                                                                                                        onClick={() => {
                                                                                                            setcountry(ele)
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
                                                                    <div className='w-full'>
                                                                        <div className={`relative inline-block text-left ${showOption == key ? 'z-20' : ''} w-full`}>
                                                                            {/* Dropdown Button */}
                                                                            <button
                                                                                onClick={() => {
                                                                                    setShowOption('states')
                                                                                    setIsOpen(true);
                                                                                }
                                                                                }
                                                                                className={`bg-[#2a2f41] text-white h-[40px] w-full px-[12px] rounded-[8px] flex items-center  hover:border-2 active:bg-[#00d8ff] active:text-black   hover:border-[#00d8ff] focus:outline-none  justify-between ${showOption == 'states' ? 'border-[#00d8ff] border-2' : ''} group `}
                                                                            >
                                                                                <span>
                                                                                    {
                                                                                        // com == 1 ? 'All Jobs' : com == 2 ? 'Data Access' : 'Chat Conversations'
                                                                                        // getOptionValue[key + ' option'][getOptionValue[key]]
                                                                                        // getOptionValue[key + ' option'].toString()
                                                                                        // getOptionValue['Workplace option'][1]
                                                                                        state
                                                                                    }

                                                                                </span>
                                                                                <span className={`${showOption == 'states' ? 'text-[#00d8ff]' : ''} group-hover:text-[#00d8ff]`}>
                                                                                    <DropDownSvg />
                                                                                </span>
                                                                            </button>

                                                                            {/* Dropdown Menu */}
                                                                            {showOption == 'states' && (
                                                                                <div className="absolute z-30 mt-[12px] w-full bg-[#1C202C] text-white rounded-[8px] shadow-lg border-2 border-gray-700">
                                                                                    <div className="relative">
                                                                                        <input
                                                                                            className="bg-[#0D0D19] rounded-[8px] input-search-width px-[12px] text-white resize-none overflow-hidden h-auto min-h-[40px] py-[10px] placeholder:text-[#6290c0] placeholder:opacity-90 m-[12px] pr-[30px]"
                                                                                            onChange={(e) => searchTextMethod('states', e.target.value)}
                                                                                            placeholder="Type here"
                                                                                        />
                                                                                        <FaSearch className="absolute right-[24px] top-1/2 transform -translate-y-1/2 text-[#6290c0]" />
                                                                                    </div>
                                                                                    <ul className="py-1">
                                                                                        {

                                                                                            ssearch.map((ele, ind) => {
                                                                                                return (
                                                                                                    <li key={ind} className="px-[12px] py-2  hover:text-[#87ceeb] active:text-[#00d8ff] cursor-pointer "
                                                                                                        onClick={() => {
                                                                                                            setstate(ele)
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
                                                                    <div className='w-full'>
                                                                        <div className={`relative inline-block text-left ${showOption == key ? 'z-20' : ''} w-full`}>
                                                                            {/* Dropdown Button */}
                                                                            <button
                                                                                onClick={() => {
                                                                                    setShowOption('districts')
                                                                                    setIsOpen(true);
                                                                                }
                                                                                }
                                                                                className={`bg-[#2a2f41] text-white h-[40px] w-full px-[12px] rounded-[8px] flex items-center  hover:border-2 active:bg-[#00d8ff] active:text-black   hover:border-[#00d8ff] focus:outline-none  justify-between ${showOption == 'districts' ? 'border-[#00d8ff] border-2' : ''} group `}
                                                                            >
                                                                                <span>
                                                                                    {
                                                                                        // com == 1 ? 'All Jobs' : com == 2 ? 'Data Access' : 'Chat Conversations'
                                                                                        // getOptionValue[key + ' option'][getOptionValue[key]]
                                                                                        // getOptionValue[key + ' option'].toString()
                                                                                        // getOptionValue['Workplace option'][1]
                                                                                        district
                                                                                    }

                                                                                </span>
                                                                                <span className={`${showOption == 'districts' ? 'text-[#00d8ff]' : ''} group-hover:text-[#00d8ff]`}>
                                                                                    <DropDownSvg />
                                                                                </span>
                                                                            </button>

                                                                            {/* Dropdown Menu */}
                                                                            {showOption == 'districts' && (
                                                                                <div className="absolute z-30 mt-[12px] w-full bg-[#1C202C] text-white rounded-[8px] shadow-lg border-2 border-gray-700">
                                                                                    <div className="relative">
                                                                                        <input
                                                                                            className="bg-[#0D0D19] rounded-[8px] input-search-width px-[12px] text-white resize-none overflow-hidden h-auto min-h-[40px] py-[10px] placeholder:text-[#6290c0] placeholder:opacity-90 m-[12px] pr-[30px]"
                                                                                            onChange={(e) => searchTextMethod('districts', e.target.value)}
                                                                                            placeholder="Type here"
                                                                                        />
                                                                                        <FaSearch className="absolute right-[24px] top-1/2 transform -translate-y-1/2 text-[#6290c0]" />
                                                                                    </div>
                                                                                    <ul className="py-1">
                                                                                        {

                                                                                            dsearch.map((ele, ind) => {
                                                                                                return (
                                                                                                    <li key={ind} className="px-[12px] py-2  hover:text-[#87ceeb] active:text-[#00d8ff] cursor-pointer "
                                                                                                        onClick={() => {
                                                                                                            setdistrict(ele)
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
                                                                </> :

                                                                    (key == 'Currency' || key == 'Minimum Salary' || key == 'Maximum Salary') ? <>

                                                                        <div className='w-full'>
                                                                            <div className={`relative inline-block text-left ${showOption == key ? 'z-20' : ''} w-full`}>
                                                                                {/* Dropdown Button */}
                                                                                <button
                                                                                    onClick={() => {
                                                                                        setShowOption(key)
                                                                                        setIsOpen(true);
                                                                                    }
                                                                                    }
                                                                                    className={`bg-[#2a2f41] text-white h-[40px] w-full px-[12px] rounded-[8px] flex items-center  hover:border-2 active:bg-[#00d8ff] active:text-black   hover:border-[#00d8ff] focus:outline-none  justify-between ${showOption == key ? 'border-[#00d8ff] border-2' : ''} group `}
                                                                                >
                                                                                    <span>
                                                                                        {
                                                                                            getOptionValue[key]
                                                                                        }

                                                                                    </span>
                                                                                    <span className={`${showOption == key ? 'text-[#00d8ff]' : ''} group-hover:text-[#00d8ff]`}>
                                                                                        <DropDownSvg />
                                                                                    </span>
                                                                                </button>

                                                                                {/* Dropdown Menu */}
                                                                                {showOption == key && (
                                                                                    <div className="absolute z-30 mt-[12px] w-full bg-[#1C202C] text-white rounded-[8px] shadow-lg border-2 border-gray-700">
                                                                                        <div className="relative">
                                                                                            <input
                                                                                                className="bg-[#0D0D19] rounded-[8px] input-search-width px-[12px] text-white resize-none overflow-hidden h-auto min-h-[40px] py-[10px] placeholder:text-[#6290c0] placeholder:opacity-90 m-[12px] pr-[30px]"
                                                                                                onChange={(e) => searchTextMethod(key, e.target.value)}
                                                                                                placeholder="Type here"
                                                                                            />
                                                                                            <FaSearch className="absolute right-[24px] top-1/2 transform -translate-y-1/2 text-[#6290c0]" />
                                                                                        </div>

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







                                                                        <textarea
                                                                            className="bg-[#0D0D19] rounded-[8px] w-full px-[12px] text-white resize-none overflow-hidden h-auto min-h-[40px] py-[10px] placeholder:text-[#6290c0] placeholder:opacity-90"
                                                                            rows="1"
                                                                            onInput={(e) => {
                                                                                e.target.style.height = "auto";
                                                                                e.target.style.height = `${e.target.scrollHeight}px`;
                                                                            }}
                                                                            placeholder="Type here"
                                                                        />}

                                                    {/* {
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
                                                    } */}
                                                </div>
                                            </div >
                                        </>
                                    )
                                })
                            }





                        </div >
                    </div>


                    {/* buttons */}
                    <div className='mt-[12px] space-y-[12px]'>

                        < div className=' text-white  text-[14px] w-full'>
                            <div>
                                <button className=' bg-[#6290c0] hover:bg-[#1C202C] flex  active:bg-[#00d8ff] active:text-black  justify-center items-center text-xl rounded-[8px] h-[40px] w-full border-[2px] border-[#1C202C] hover:border-[#00d8ff] hover:text-[#00d8ff]  ' 
                                  onClick={()=>setRenderComponent(1)}>
                                    <span className='font-bold'>
                                        Post
                                    </span>
                                </button>

                            </div>

                        </div>
                        < div className=' text-white  text-[14px] w-full'>
                            <div>
                                <button className='  bg-[#1C202C] flex  active:bg-[#00d8ff] active:text-black  justify-center items-center text-xl rounded-[8px] h-[40px] w-full border-[2px] border-[#1C202C] hover:border-[#00d8ff] hover:text-[#00d8ff]  '>
                                    <span className='font-bold'>
                                    Preview
                                    </span>
                                </button>

                            </div>

                        </div>
                        < div className=' text-white  text-[14px] w-full'>
                            <div>
                                <button className='  bg-[#1C202C] flex  active:bg-[#00d8ff] active:text-black  justify-center items-center text-xl rounded-[8px] h-[40px] w-full border-[2px] border-[#1C202C] hover:border-[#00d8ff] hover:text-[#00d8ff]  '>
                                    <span className='font-bold'>
                                    Cancel
                                    </span>
                                </button>

                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ComAddJob
