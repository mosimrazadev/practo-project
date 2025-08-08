import React from 'react'
import navlogo from '../assets/practo.svg'
import { Link } from 'react-router-dom'
import { GoChevronDown } from "react-icons/go";
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex items-center justify-around pt-4.5 pb-2 px-25 shadow-md'>
        <div className='flex items-center gap-5 '>
           <div className='w-[108px] h-[25px] cursor-pointer mr-8 mb-1.5'>
            <img src={navlogo} alt="navlogo" />
            </div>

           <SideLink link = '/' label = 'Find Doctors'/>
           <SideLink link = '/videoconsult' label = 'Video Consult'/>
           <SideLink link = '/surgeries' label = 'Surgeries'/>

        </div>

        <div className='flex items-center gap-5 pb-[13px]'>
            <div className='flex items-center gap-1.5 cursor-pointer'>
                <span className='bg-blue-900 text-white text-[8px] font-medium py-[1px] px-[6px] rounded-lg mt-1'>NEW</span>
                <span className=' navMenuFont'>For Corporates</span>
                <span className='text-base mt-1'><GoChevronDown/></span>
            </div>
            <div className='flex items-center gap-1.5 cursor-pointer navMenuFont'>
                <span className=' navMenuFont'>For Providers</span>
                <span className='text-base mt-1'><GoChevronDown /></span>
            </div>           
            <div className='flex items-center gap-1.5 cursor-pointer'>
                <span className=' navMenuFont'>Security & help</span>
                <span className='text-base mt-1'><GoChevronDown /></span>
            </div>
            <div>
                <button className=' text-[12px] font-medium text-[#737382] rounded-sm py-1.5 px-2.5 border border-[#d3d3d3] cursor-pointer hover:text-[#0398fc] hover:border-[#0398fc]'>Login / Signup</button>
            </div>
        </div>
    </div>
  )
}

const SideLink = ({link, label}) => {
  const {pathname} = useLocation();
  const isActive = pathname === link

    return(
        <Link to={link} className={isActive ? "text-[#28328c] border-b-[5px] border-[#199FD9] font-medium pb-2" : "border-b-[5px] border-transparent text-[#2d2d32] font-medium pb-2"}>
            {label}
        </Link>
    )
}

export default Navbar