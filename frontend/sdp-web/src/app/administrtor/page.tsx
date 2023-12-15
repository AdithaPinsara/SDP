// pages/AdministratorPage.js
"use client"

import React, { useState } from 'react';
import Dropdown from '../components/Dropdown';

const name = 'Jhone';
const ID = 'S123';
const division = 'Kandy';

const dropdownOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

const AdministratorPage = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (value: React.SetStateAction<string>) => {
    // Handle the selected option, e.g., filter data or make an API request
    setSelectedOption(value);
  };

  return (
    <div className="flex flex-col h-screen p-4">
      <div className="flex justify-between items-center mb-8">
        <div className="text-left">
          <p className="text-lg">Hey {name}</p>
          <div className="flex items-center">
            <p className="text-md">Administrator - {ID}</p>s
            <div className="w-4"></div> {/* Add a gap */}
            <p className="text-md text-gray-500">{division} Division</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Profile Edit</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded">Sign Out</button>
        </div>
      </div>
      <div className='flex justify-end px-2'>
        <p className="space-x-3">Filter by:</p>
        <div className='w-4'></div>
        <Dropdown options={dropdownOptions} onSelect={handleSelect} />
        <div className='w-4'></div>
        <Dropdown options={dropdownOptions} onSelect={handleSelect} />
      </div>
      <div className='p-4'></div>
      <div className="flex space-x-4">
        <div className="bg-gray-200 p-4 rounded flex-1">
          <h2 className="text-lg font-semibold">Opend Complaints</h2>
          <div className="bg-white p-2 mt-2 flex justify-between items-center">
            <div className="flex flex-col">
              <p>Date</p>
              <p>Task</p>
            </div>
            <button className="bg-blue-500 text-white px-2 py-1 rounded">Open</button>
          </div>
        </div>

        <div className="bg-gray-200 p-4 rounded flex-1">
          <h2 className="text-lg font-semibold">In Progress Complaints</h2>
          {/* Task Box */}
          <div className="bg-white p-2 mt-2 flex justify-between items-center">
            <div className="flex flex-col">
              <p>Date</p>
              <p>Task</p>
            </div>
            <button className="bg-blue-500 text-white px-2 py-1 rounded">Open</button>
          </div>
        </div>

        <div className="bg-gray-200 p-4 rounded flex-1">
          <h2 className="text-lg font-semibold">In Review Complaints</h2>
          {/* Task Box */}
          <div className="bg-white p-2 mt-2 flex justify-between items-center">
            <div className="flex flex-col">
              <p>Date</p>
              <p>Task</p>
            </div>
            <button className="bg-blue-500 text-white px-2 py-1 rounded">Open</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdministratorPage;
