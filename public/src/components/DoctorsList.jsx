// src/pages/DoctorsList.jsx
import React from "react";
import { useSearch } from "../store/SearchContext";
import { CiLocationOn } from "react-icons/ci";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import { PiSealCheckFill } from "react-icons/pi";
import { BiSolidLike } from "react-icons/bi";
import { IoCall } from "react-icons/io5";


const names = ["Dr. Aarav Sharma", "Dr. Isha Verma", "Dr. Rohan Nair", "Dr. Meera Patel",
   "Dr. Kabir Kapoor", "Dr. Dev Bose", "Dr. Arjun Das", "Dr. Kunal Joshi", "Dr. Vikram Chauhan", "Dr. Sameer Khanna",
   "Dr. Neha Singh", "Dr. Priya Mehra", "Dr. Riya Banerjee", "Dr. Sneha Kulkarni", "Dr. Pooja Menon", "Dr. Anjali Sinha", "Dr. Kavya Iyer",
  "Dr. Shreya Pillai", "Dr. Aditi Deshmukh", "Dr. Simran Kaur",
  "Dr. Rajiv Krishnan", "Dr. Mohit Tandon", "Dr. Manish Choudhary", "Dr. Nikhil Bhatia","Dr. Siddharth Ghosh", "Dr. Harshita Jain",
  "Dr. Aarush Mehta", "Dr. Raghav Malhotra", "Dr. Karan Oberoi"
];


const clinics = [
  "Care Clinic", "Healing Touch", "City Health Centre", "Wellness Clinic",
  "Pulse Medical", "Hope Hospital", "Sunshine Clinic"
];

const images = [
  ...Array.from({ length: 1 }, (_, i) => `https://randomuser.me/api/portraits/men/9.jpg`),
  ...Array.from({ length: 1 }, (_, i) => `https://randomuser.me/api/portraits/women/0.jpg`),
  ...Array.from({ length: 1 }, (_, i) => `https://randomuser.me/api/portraits/men/7.jpg`),
  ...Array.from({ length: 1 }, (_, i) => `https://randomuser.me/api/portraits/women/2.jpg`),
  ...Array.from({ length: 6 }, (_, i) => `https://randomuser.me/api/portraits/men/${i}.jpg`),
  ...Array.from({ length: 10 }, (_, i) => `https://randomuser.me/api/portraits/women/${i}.jpg`),
  ...Array.from({ length: 9 }, (_, i) => `https://randomuser.me/api/portraits/men/${i}.jpg`),
];

const cities = [
  "Bangalore", "Delhi", "Mumbai", "Hyderabad", "Chennai", "Kolkata",
  "Pune", "Ahmedabad", "Jaipur", "Surat", "Lucknow", "Bhopal", "Patna", "Indore", "Chandigarh"
];

const specializations = [
  "Dentist", "Gynecologist/obstetrician", "General Physician", "Dermatologist",
  "Ear-nose-throat (ent) Specialist", "Homoeopath", "Ayurveda"
];

const DoctorsList = () => {
  const { searchData, setSearchData } = useSearch();
  const { location, doctorType } = searchData;

  const doctorsList = Array.from({ length: 29 }, (_, i) => ({
    name: names[i % names.length],
    specialization: doctorType || "Dermatologist",
    experience: `${8 + (i % 20)} years experience overall`,
    location: location || "Bangalore",
    clinic: clinics[i % clinics.length],
    fee: `₹${300 + (i % 5) * 100}`,
    rating: `${85 + (i % 10)}%`,
    patientStories: `${100 + i * 3} Patient Stories`,
    image: images[i % images.length]
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">

      {/* Location + Specialization Dropdowns */}
      <div className="flex justify-center flex-col md:flex-row mb-11 h-10">
          <div className="flex items-center bg-white border-[0.75px] border-[#b4b4be] border-r-0 rounded-l-xs relative cursor-pointer">  
            <CiLocationOn className='cursor-default absolute left-6 top-3' />
              <select value={location} onChange={(e) => setSearchData((prev) => ({ ...prev, location: e.target.value }))} className="w-88 pl-12 text-[14px] border-none outline-none cursor-pointer appearance-none">
                {cities.map((city, idx) => (
                  <option key={idx} value={city}>{city}</option>
                 ))}
             </select>
          </div>  

          <div className="flex items-center bg-white border-[0.75px] border-[#b4b4be] rounded-l-xs relative cursor-pointer">
             <IoIosSearch className="cursor-default absolute left-6 top-3"/>
             <select  value={doctorType} onChange={(e) => setSearchData((prev) => ({ ...prev, doctorType: e.target.value }))} className="w-133 pl-12 mr-8 text-[14px] border-none outline-none cursor-pointer appearance-none">
               {specializations.map((type, idx) => (
               <option key={idx} value={type}>{type}</option>
                ))}
             </select>
         </div>

         <div className="pl-5 ">
          <h4 className="text-[12px] text-[#737382]">Fed up of endless wait?</h4>
          <div className="flex items-center mt-1.5">
            <h4 className="text-sm text-[#414146]">Look for clinic with </h4>
            <h4 className="flex items-center ml-1 text-sm text-[#8a45e6] font-semibold cursor-pointer hover:underline">Prime <PiSealCheckFill className="ml-1 w-4.5 h-4.5"/></h4>
          </div>
         </div>
             </div>

   {/* Filter Row */}
    <div className="flex flex-wrap items-center justify-center gap-5 mb-5 bg-blue-900 p-2">
        
      <div className="flex items-center bg-[#434ea2] relative rounded-xs">
        <select className="text-white px-2.5 py-1 pr-15 text-sm border-none outline-none cursor-pointer appearance-none">
            <option className="bg-white text-[#414146]" hidden>Gender</option>
            <option className="bg-white text-[#414146]">Male Doctor</option>
            <option className="bg-white text-[#414146]">Female Doctor</option>
        </select>
        <IoIosArrowDown className="text-white absolute right-2 top-2" />
     </div>

     <div className="flex items-center bg-[#434ea2] relative rounded-xs">
        <select className="text-white px-2.5 py-1 pr-7.5 text-sm border-none outline-none cursor-pointer appearance-none">
            <option className="bg-white text-[#414146]" hidden>Patient Stories</option>
            <option className="bg-white text-[#414146]">10+ Patient Stories</option>
            <option className="bg-white text-[#414146]">10+ Patient Stories</option>
            <option className="bg-white text-[#414146]">210+ Patient Stories</option>
        </select>
        <IoIosArrowDown className="text-white absolute right-2 top-2" />
     </div>

     <div className="flex items-center bg-[#434ea2] relative rounded-xs">
        <select className="text-white px-2.5 py-1 pr-4 text-sm border-none outline-none cursor-pointer appearance-none">
            <option className="bg-white text-[#414146]" hidden>Experience</option>
            <option className="bg-white text-[#414146]">5+ Years of experience</option>
            <option className="bg-white text-[#414146]">10+ Years of experience</option>
            <option className="bg-white text-[#414146]">15+ Years of experience</option>
            <option className="bg-white text-[#414146]">20+ Years of experience</option>
        </select>
        <IoIosArrowDown className="text-white absolute right-2 top-2" />
     </div>
        

        <select className="text-white px-2 py-0.5 text-sm border-none outline-none cursor-pointer">
            <option className="bg-white text-[#414146]" hidden>All Filters</option>
        </select>

        <div className="flex items-center ml-6 gap-2">
          <h5 className="text-white text-sm">Sort By</h5>
            <div className="flex items-center bg-[#434ea2] relative rounded-xs">
               <select className="text-white px-2.5 py-1 text-sm border-none outline-none cursor-pointer appearance-none">
                <option className="bg-white text-[#414146]" hidden>Relevance</option>
                <option className="bg-white text-[#414146]">Number of patient stories - High to low</option>
                <option className="bg-white text-[#414146]">Experience - High to Low</option>
                <option className="bg-white text-[#414146]">Consultation Fee - High to Low</option>
                <option className="bg-white text-[#414146]">Consultation Fee - Low to High</option>
               </select>
              <IoIosArrowDown className="text-white absolute right-2 top-2" />
            </div>
        </div>
      </div>

      {/* Search Header */}
      <div className="mb-8 border-b-2 border-[#f0f0f5]">
        <h2 className="text-2xl font-semibold">
          {doctorsList.length} {doctorType || "Doctors"} available in {location || "Bangalore"}
        </h2>
        <p className="flex items-center gap-1.5 text-[16px] text-[#2d2d32] mt-3 mb-9">
        <PiSealCheckFill className="w-6 h-6" />Book appointments with minimum wait-time & verified doctor details
        </p>
      </div>



      {/* Doctor Cards */}
      <div className="flex flex-col relative">
        {doctorsList.map((doc, idx) => (
          <div key={idx} className="border-b-2 border-[#f0f0f5] py-6 bg-white flex flex-col md:flex-row gap-4 items-start">

            <img src={doc.image}alt={doc.name}className="w-35 h-35 rounded-full object-cover"/>

            <div className="">
              <h3 className="text-[21px] font-medium text-[#199fd9] cursor-pointer hover:underline">{doc.name}</h3>
              <p className="text-sm text-[#737382]">{doc.specialization}</p>
              <p className="text-sm text-[#737382]">{doc.experience}</p>
              <p className="text-sm text-[#414146] font-semibold mt-2 cursor-pointer hover:underline">{doc.location} • <span className="font-normal">{doc.clinic}</span></p>
              <p className="text-sm text-[#414146] mt-1 pb-3 border-b border-[#d2d2d7] border-dashed">{doc.fee} Consultation fee at clinic</p>
              <div className="flex items-center mt-4 cursor-pointer">
                <span className="flex items-center gap-0.5 py-0.5 px-3 bg-[#00a500] text-sm font-medium text-white rounded-sm"><BiSolidLike />{doc.rating}</span>
                <p className="text-sm text-[#414146] font-medium ml-4 underline">{doc.patientStories}</p>
              </div>
         
            </div>
            <div className="flex flex-col gap-2 mt-8 absolute right-3.5">
                <button className="bg-[#199fd9] text-sm font-semibold text-white px-12.5 py-2.5 rounded cursor-pointer">Book Clinic Visit</button>
                <button className="flex items-center justify-center gap-1.5 border-2 border-[#dcdcdc] text-[#199fd9] font-medium px-4 py-1.5 rounded cursor-pointer hover:bg-[#199fd9] hover:text-white"><IoCall />Contact Clinic</button>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
