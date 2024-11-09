'use client'
import React, { useEffect, useState } from 'react'
import BackBlack from '../components/BackBlack'
import DropDownSvg from '../components/DropDownSvg'
// import { countries, currencies, districts, states } from './locationdata'
import { countries, currencies, districts, states } from './locationdata'
import { FaSearch } from 'react-icons/fa';
import {
    // GetCountries,
    GetCountries,
    GetState,
    GetCity,
    GetLanguages,
    GetRegions,
    GetPhonecodes //async functions
  } from "react-country-state-city"

let formData = {
    'Company Name': '',
    'About Company': '',
    'Office Locations': [''],
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

const ComAddJob = ({ setRenderComponent, setHeading }) => {

    const [countryid, setCountryid] = useState(0);
    const [stateid, setStateid] = useState(0);
    const [cityid, setCityid] = useState(0);


    const [con,setCon] = useState([])
    const [sta,setSta]= useState([])
    const [dis,setDis] = useState([])
    const [csearch, setCSearch] = useState([])
    const [ssearch, setSSearch] = useState([])
    const [dsearch, setDSearch] = useState([])
    // const [csearch, setCSearch] = useState([...countries])
    // const [ssearch, setSSearch] = useState([...states])
    // const [dsearch, setDSearch] = useState([...districts])
    const fetchData = async () => {
        try {
          const countryResult = await GetCountries();
        //   console.log(countryResult,'\n\n\n\n\nhere')
          setCon(countryResult);
          setCSearch(countryResult)
        } catch (error) {
          console.error('Error fetching countries:', error);
          // Handle error for countries (e.g., set an error state or display a message)
        }
      
        try {
          const stateResult = await GetState(countryid);
          setSta(stateResult);
          setSSearch(stateResult)
        } catch (error) {
          console.error('Error fetching states:', error);
          // Handle error for states (e.g., set an error state or display a message)
        }
      
        try {
          const cityResult = await GetCity(countryid, stateid);
          setDis(cityResult);
          setDSearch(cityResult)
        } catch (error) {
          console.error('Error fetching cities:', error);
          // Handle error for cities (e.g., set an error state or display a message)
        }
      };
    useEffect(() => {
        fetchData()
       
        // GetCountries().then((result) => {
      
    
      }, [countryid, stateid]);


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
        setHeading('Create New Job Post')
    }, []);

    const [jobTypeCom, setJobTypeCom] = useState('Select type');
    const [workspaceTypeCom, setworkspaceTypeCom] = useState('Select type');
    const [workExperienceCom, setWorkExperienceCom] = useState('Select years');
    const [minimumSalary, setMinimumSalary] = useState('Select amount');
    const [maximumSalary, setMaximumSalary] = useState('Select amount');
    const [currency, setCurrency] = useState('Select currency');
    // const [minimumSalary, setMinimumSalary] = useState('');
    const [country, setcountry] = useState('Select Country');
    const [state, setstate] = useState('Select State');
    const [district, setdistrict] = useState('Select District');

    let dropDownOptionJobType = [
        'Full Time',
        'Part Time',
        'Contract',
        'Temporary',
        'Apprenticeship',
        'Internship',
        'Other'
    ]
    let dropDownOptionJWorkspaceType = [
        'On-site',
        'Off-site',
        'Remote',
        'Hybrid'
    ]
    let dropdownWorkExperience = [
       'No experiance needed to apply',
       '1+ years',
       '2+ years',
       '3+ years',
       '4+ years',
       '5+ years',
       '6+ years',
       '7+ years',
       '8+ years',
       '9+ years',
       '10+ years',
       '11+ years',
       '12+ years',
    ]
    const start = 100000;
    const end = 10000000;
    const step = 50000;
    let dropdownMinimumSalary = Array.from(
        { length: Math.floor((end - start) / step) + 1 },
        (_, i) => (start + i * step).toString()
    );
    let dropdownMaxSalary = Array.from(
        { length: Math.floor((end - start) / step) + 1 },
        (_, i) => (start + i * step).toString()
    );





    const [cusearch, setcuSearch] = useState([...currencies])
    const [msSearch, setMsSearch] = useState([...dropdownMinimumSalary])
    const [maxSearch, setMaxSearch] = useState([...dropdownMaxSalary])
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
            // setCSearch(countries.filter((e) => e.toLowerCase().startsWith(value.toLowerCase())))
            setCSearch(con.filter((e) => e.name.toLowerCase().startsWith(value.toLowerCase())))
        }
        else if (type == 'states') {
            // setSSearch(states.filter((e) => e.toLowerCase().startsWith(value.toLowerCase())))
            setSSearch(sta.filter((e) => e.name.toLowerCase().startsWith(value.toLowerCase())))
        }
        else if (type == 'districts') {
            // setDSearch(districts.filter((e) => e.toLowerCase().startsWith(value.toLowerCase())))
            setDSearch(dis.filter((e) => e.name.toLowerCase().startsWith(value.toLowerCase())))
        }
        else if (type == 'Currency') {
            setcuSearch(currencies.filter((e) => e.toLowerCase().startsWith(value.toLowerCase())))
        }
        else if (type == 'Minimum Salary') {
            setMsSearch(dropdownMinimumSalary.filter((e) => e.toLowerCase().startsWith(value.toLowerCase())))
        }
        else if (type == 'Maximum Salary') {
            setMaxSearch(dropdownMaxSalary.filter((e) => e.toLowerCase().startsWith(value.toLowerCase())))
        }

    }

    const addMore = () => {
        if (data['Office Locations'].some((ele) => ele == '')) {
            console.log('some')
            return

        }

        setData((ele) => {
            console.log(ele)
            return {
                ...ele,
                'Office Locations': [...ele['Office Locations'], '']

            }
        })
        setLocationFilled(false)
    }
    const [locationFilled, setLocationFilled] = useState(false)
    const [postFilled,setPostFilled] = useState(false)

    const handleOfficeLocation = (e, ind) => {
        const newValue = e.target.value;
        // setText(newValue);
        // console.log("Text changed:", newValue,ind);
        let d = [...data['Office Locations']]
        d[ind] = newValue
        // console.log(d)
        if (d.some((ele) => ele == '')) {


        } else {
            setLocationFilled(true)
        }
        setData((ele) => {

            return {
                ...ele,
                'Office Locations': [...d]

            }
        })

    };

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
        setData((e) => {


            return {
                ...e,
                'Job Type': jobTypeCom,
                'Workplace Type': workspaceTypeCom,
                'Job Location': { 'country': country, 'state': state, 'district': district },
                'Min Work Experience': workExperienceCom,
                'Currency': currency,
                'Minimum Salary': minimumSalary,
                'Maximum Salary': maximumSalary,
            }
        })
    }, [jobTypeCom, workspaceTypeCom, workExperienceCom, minimumSalary, maximumSalary, country, state, district, currency])


    useEffect(() => {
        console.log(data,hasEmptyValue(data))
        if(hasEmptyValue(data)){
            setPostFilled(false)
        }
        else{
            setPostFilled(true)
        }
        

    }, [data])

    function hasEmptyValue(d) {
        for (const key in d) {
            const value = d[key];
            if(key)

            // Check if value is an empty string
            if (value === '' || (typeof value=='string' && value.toLowerCase().includes('select'))) {
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
                                onClick={() => setRenderComponent(1)}

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
                                <label className="cursor-pointer hover:text-[#00d8ff]  text-white">
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
                                        <div className="w-[144px] rounder-container h-[144px] input-container flex items-center justify-center text-center underline">
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
                                                                    value.map((ele, ind) => {
                                                                        {/* console.log('testing',ele) */ }
                                                                        return (
                                                                            <>

                                                                                <textarea
                                                                                    className="bg-[#0D0D19] rounded-[8px] w-full px-[12px] text-white resize-none overflow-hidden h-auto min-h-[40px] py-[10px] placeholder:text-[#6290c0] placeholder:opacity-90"
                                                                                    rows="1"
                                                                                    onInput={(e) => {
                                                                                        e.target.style.height = "auto";
                                                                                        e.target.style.height = `${e.target.scrollHeight}px`;
                                                                                    }}
                                                                                    onChange={(e) => handleOfficeLocation(e, ind)}
                                                                                    placeholder="Type here"
                                                                                />


                                                                            </>
                                                                        )
                                                                    })}
                                                                <div className=' text-white  text-[14px] w-full'>
                                                                    <div>
                                                                        <button className={`bg-[#1C202C] flex bg-[#2a2f41]   justify-center items-center text-xl rounded-[8px] h-[40px] w-full
    border-[2px] border-[#1C202C]  ${locationFilled ? 'hover:border-[#00d8ff] hover:text-[#00d8ff] active:bg-[#00d8ff] active:text-black ' : 'bg-[#6290c0]'}

    
    
    `}
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
                                                            </> :

                                                                (key == 'Job Location') ? <>

                                                                    <div className='w-full'>
                                                                        <div className={`relative inline-block text-left ${showOption == 'countries' ? 'z-20' : ''} w-full`}>
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

                                                                                    <ul className="py-1 overflow-x-scroll h-[175px]">
                                                                                        {

                                                                                            csearch.map((ele, ind) => {
                                                                                                return (
                                                                                                    <li key={key} className="px-[12px] py-2  hover:text-[#87ceeb] active:text-[#00d8ff] cursor-pointer "
                                                                                                        onClick={() => {
                                                                                                            setcountry(ele.name)
                                                                                                            setCountryid(ele.id)
                                                                                                            setIsOpen(false)
                                                                                                            setShowOption('')
                                                                                                        }}
                                                                                                    >{ele.name}</li>
                                                                                                )
                                                                                            })
                                                                                        }

                                                                                    </ul>
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div className='w-full'>
                                                                        <div className={`relative inline-block text-left ${showOption == 'states' ? 'z-20' : ''} w-full`}>
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
                                                                                    <ul className="py-1 overflow-x-scroll h-[175px]">
                                                                                        {

                                                                                            ssearch.map((ele, ind) => {
                                                                                                return (
                                                                                                    <li key={ind} className="px-[12px] py-2  hover:text-[#87ceeb] active:text-[#00d8ff] cursor-pointer "
                                                                                                        onClick={() => {
                                                                                                            setStateid(ele.id)
                                                                                                            setstate(ele.name)
                                                                                                            setIsOpen(false)
                                                                                                            setShowOption('')
                                                                                                        }}
                                                                                                    >{ele.name}</li>
                                                                                                )
                                                                                            })
                                                                                        }

                                                                                    </ul>
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div className='w-full'>
                                                                        <div className={`relative inline-block text-left ${showOption == 'districts' ? 'z-20' : ''} w-full`}>
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
                                                                                    <ul className="py-1 overflow-x-scroll h-[175px]">
                                                                                        {

                                                                                            dsearch.map((ele, ind) => {
                                                                                                return (
                                                                                                    <li key={ind} className="px-[12px] py-2  hover:text-[#87ceeb] active:text-[#00d8ff] cursor-pointer "
                                                                                                        onClick={() => {
                                                                                                            setdistrict(ele.name)
                                                                                                            setIsOpen(false)
                                                                                                            setShowOption('')
                                                                                                        }}
                                                                                                    >{ele.name}</li>
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

                                                                                        <ul className="py-1 overflow-x-scroll h-[175px]">
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
                                                                            onChange={(e) => handleInputChange(e, key)}
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
                                            </div>
                                        </>
                                    )
                                })
                            }





                        </div>
                    </div>


                    {/* buttons */}
                    <div className='mt-[12px] space-y-[12px]'>

                        <div className=' text-white  text-[14px] w-full'>
                            <div>
                                <button className={` bg-[#1C202C]  justify-center items-center text-xl rounded-[8px] h-[40px] w-full border-[2px] border-[#1C202C]  ${postFilled ? ' hover:bg-[#1C202C] flex  active:bg-[#00d8ff] active:text-black hover:border-[#00d8ff] hover:text-[#00d8ff]' : 'bg-[#6290c0]' } `}
                                    onClick={() => {
                                        if(postFilled){

                                        setRenderComponent(1);
                                        }
                                        
                                        
                                        }}>
                                    <span className='font-bold'>
                                        Post
                                    </span>
                                </button>

                            </div>

                        </div>
                        <div className=' text-white  text-[14px] w-full'>
                            <div>
                                <button className='  bg-[#1C202C] flex  active:bg-[#00d8ff] active:text-black  justify-center items-center text-xl rounded-[8px] h-[40px] w-full border-[2px] border-[#1C202C] hover:border-[#00d8ff] hover:text-[#00d8ff]  '>
                                    <span className='font-bold'>
                                        Preview
                                    </span>
                                </button>

                            </div>

                        </div>
                        <div className=' text-white  text-[14px] w-full'>
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
