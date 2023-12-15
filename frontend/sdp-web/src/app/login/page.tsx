// components/LoginPage.js
"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const LoginPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('forest');

  const handleDepartmentChange = (department: React.SetStateAction<string>) => {
    setSelectedDepartment(department);
  };

  return (
    <div className="flex justify-between items-center h-screen p-4">
      <div className="w-1/2">
        <Image src="/your-image.jpg" alt="Your Image" width={300} height={300} />
      </div>
      <div className="w-1/2 p-8 border border-gray-300 rounded">
        <h1 className="text-4xl font-bold mb-4">Nice to see you!</h1>
        <p className="mb-4">Choose your department and enter the credentials:</p>
        <div className="flex mb-4">
          <button
            className={`flex-1 p-2 border ${selectedDepartment === 'forest' ? 'bg-green-500 text-white' : ''}`}
            onClick={() => handleDepartmentChange('forest')}
          >
            Forest Reserve
          </button>
          <button
            className={`flex-1 p-2 border ${selectedDepartment === 'wildlife' ? 'bg-green-500 text-white' : ''}`}
            onClick={() => handleDepartmentChange('wildlife')}
          >
            Wildlife Department
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <label className="flex flex-col">
            Office ID:
            <input type="text" name="officeId" className="border p-2" />
          </label>
          <label className="flex flex-col">
            Password:
            <input type="password" name="password" className="border p-2" />
          </label>
          <button type="button" className="bg-blue-500 text-white p-2 rounded">
            Login
          </button>
          <p>
            Don't have an account? <a href="#" className="text-blue-500">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
