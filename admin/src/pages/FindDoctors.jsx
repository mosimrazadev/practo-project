import React from 'react'
import findDocBg from "../assets/bg-practo.svg"
import { CiLocationOn } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineComment } from "react-icons/md";
import { PiShoppingCart, PiFlaskLight } from "react-icons/pi";
import { LiaBookMedicalSolid } from "react-icons/lia";
import { SlBookOpen } from "react-icons/sl";
import { CgBriefcase } from "react-icons/cg";

const heroShortcuts = [
  {title: 'Consult with a doctor', svg: MdOutlineComment},
  {title: 'Order Medicines', svg: PiShoppingCart},
  {title: 'View medical records', svg: LiaBookMedicalSolid},
  {title: 'Book test', svg: PiFlaskLight, text:'NEW', featured: true},
  {title: 'Read articles', svg: SlBookOpen , icon: true},
  {title: 'For healthcare providers', svg: CgBriefcase},

]


const FindDoctors = () => {
  return (
    <div className='w-full h-auto md:h-auto bg-gray-100'>                                            

     {/*hero-section*/}
      <div className='flex items-center mt-7 bg-[#28328c] relative'>                                           
         <div>
           <img className='object-contain' src={findDocBg} alt="FindDocHeroBg" />                                          
         </div>

         {/*hero-section text-content*/}
         <div className='flex flex-col items-center z-1 absolute w-full '>                                                                               
          <h3 className='text-white text-[40px] font-semibold text-center mt-20 '>Your home for health</h3>        
          <h3 className='text-white text-[26px] font-semibold text-center mt-8'>Find and Book</h3>

          {/*placeholders & searches*/}
           <div className='flex flex-col items-start mt-2'>  
             
             <div className='flex items-center cursor-pointer'>
             <div className='flex items-center gap-1.5 w-80 py-3.5 px-2.5 text-[14px] bg-white border-[0.75px] border-[#b4b4be] border-r-0 rounded-l-xs'>
                <CiLocationOn className='cursor-default'/>                                                                        
                <input type='text' placeholder= 'Enter your location' className='text-black placeholder-black outline-none cursor-pointer'/>
             </div>                                                                    
             <div className='flex items-center gap-1.5 w-118 py-3.5 px-2.5 text-[14px] bg-white border-[0.75px] border-[#b4b4be] rounded-r-xs'>
                 <IoIosSearch className='cursor-default'/>
                 <input type='text' placeholder='Search doctors, clinics, hospitals, etc.' className='w-full text-black placeholder-black outline-none  cursor-pointer'/>
             </div>
             </div>

             <div className='flex items-center gap-5 py-3.5 text-[14px] text-[#8d93b3] '>
              <span>Popular searches:</span>
              <span className=' hover:text-white hover:underline cursor-pointer'>Dermatologist</span>
              <span className=' hover:text-white hover:underline cursor-pointer'>Pediatrician</span>
              <span className=' hover:text-white hover:underline cursor-pointer'>Gynecologist/Obstetrician</span>
              <span className=' hover:text-white hover:underline cursor-pointer'>Others</span>
             </div>

          </div>


          {/*hero-shortcuts */}                                   
          <div className='flex justify-center w-full py-4.5 mt-46 text-white bg-[#1d2869]'>
             {heroShortcuts.map(short => (
                <div className='group flex items-center flex-col border-r-[1px] border-[#4a5387] cursor-pointer'>
                  <div className={short.featured ? 'flex items-center' : ""} >
                   {<short.svg className={`mb-1 transition-transform duration-300 transform group-hover:scale-125 ${short.icon ? 'w-4.5 h-5.5' : 'w-6 h-5.5'}`}/>}
                   <span className={short.featured? `text-[10px] border rounded bg-[#00a500] py-0.25 px-1 relative bottom-1` : ''}>{short.text}</span>
                   </div>
                   <h5 className='text-[#b8bbd9] text-[14px] px-8 group-hover:text-white'>{short.title}</h5>
                </div>
               ))}
          </div>

        </div> 
      </div> 
    </div>
  )
}

export default FindDoctors