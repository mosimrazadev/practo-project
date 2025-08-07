// src/pages/DoctorsList.jsx
import React from "react";
import { useSearch } from "../store/SearchContext";

const names = [
  "Dr. Aarav Sharma", "Dr. Isha Verma", "Dr. Rohan Nair", "Dr. Meera Patel",
  "Dr. Kabir Kapoor", "Dr. Anaya Reddy", "Dr. Dev Bose", "Dr. Tara Malhotra",
  "Dr. Neha Singh", "Dr. Arjun Das"
];

const clinics = [
  "Care Clinic", "Healing Touch", "City Health Centre", "Wellness Clinic",
  "Pulse Medical", "Hope Hospital", "Sunshine Clinic"
];

const images = [
  ...Array.from({ length: 20 }, (_, i) => `https://randomuser.me/api/portraits/men/${i}.jpg`),
  ...Array.from({ length: 20 }, (_, i) => `https://randomuser.me/api/portraits/women/${i}.jpg`)
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

  const doctorsList = Array.from({ length: 12 }, (_, i) => ({
    name: names[i % names.length],
    specialization: doctorType || "Dermatologist",
    experience: `${5 + (i % 20)} years experience`,
    location: location || "Bangalore",
    clinic: clinics[i % clinics.length],
    fee: `₹${300 + (i % 5) * 100}`,
    rating: `${85 + (i % 10)}%`,
    patientStories: `${100 + i * 3} Patient Stories`,
    image: images[i % images.length]
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Search Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">
          {doctorsList.length} {doctorType || "Doctors"} available in {location || "Bangalore"}
        </h2>
        <p className="text-gray-500 mt-1">
          Book appointments with minimum wait-time & verified doctor details
        </p>
      </div>

      {/* Filter Row */}
      <div className="flex flex-wrap items-center gap-4 mb-6 bg-blue-900 p-3 rounded-md">
        <button className="bg-white text-blue-900 font-medium px-4 py-1 rounded">Gender</button>
        <button className="bg-white text-blue-900 font-medium px-4 py-1 rounded">Patient Stories</button>
        <button className="bg-white text-blue-900 font-medium px-4 py-1 rounded">Experience</button>
        <button className="bg-white text-blue-900 font-medium px-4 py-1 rounded">All Filters</button>

        <select className="ml-auto bg-white text-blue-900 px-4 py-1 rounded border-none">
          <option>Relevance</option>
          <option>Number of patient stories - High to low</option>
          <option>Experience - High to Low</option>
          <option>Consultation Fee - High to Low</option>
          <option>Consultation Fee - Low to High</option>
        </select>
      </div>

      {/* Location + Specialization Dropdowns */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <select
          value={location}
          onChange={(e) => setSearchData((prev) => ({ ...prev, location: e.target.value }))}
          className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/2"
        >
          {cities.map((city, idx) => (
            <option key={idx} value={city}>{city}</option>
          ))}
        </select>

        <select
          value={doctorType}
          onChange={(e) => setSearchData((prev) => ({ ...prev, doctorType: e.target.value }))}
          className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/2"
        >
          {specializations.map((type, idx) => (
            <option key={idx} value={type}>{type}</option>
          ))}
        </select>
      </div>

      {/* Doctor Cards */}
      <div className="flex flex-col gap-6">
        {doctorsList.map((doc, idx) => (
          <div
            key={idx}
            className="border rounded-xl shadow-sm p-4 bg-white flex flex-col md:flex-row gap-4 items-start"
          >
            <img
              src={doc.image}
              alt={doc.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="text-lg font-bold text-blue-900">{doc.name}</h3>
              <p className="text-sm text-gray-600">{doc.specialization}</p>
              <p className="text-sm">{doc.experience}</p>
              <p className="text-sm">{doc.clinic}, {doc.location}</p>
              <p className="text-sm font-medium mt-1">{doc.fee} Consultation Fees</p>
              <p className="text-sm text-green-600 font-semibold mt-1">
                {doc.rating} • {doc.patientStories}
              </p>
              <div className="flex gap-2 mt-2">
                <button className="bg-blue-500 text-white px-4 py-1 rounded">Book Clinic Visit</button>
                <button className="border border-blue-500 text-blue-500 px-4 py-1 rounded">Contact Clinic</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
