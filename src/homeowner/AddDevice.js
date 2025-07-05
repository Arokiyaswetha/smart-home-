import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

export default function AddDevice() {
  const [image, setImage] = useState('https://images.unsplash.com/photo-1587829741301-dc798b83add3');

  const handleImageUpload = () => {
    alert('Image upload triggered');
  };

  const handleSubmit = () => {
    alert('Device added successfully!');
  };

  return (
    <div className="flex-1 bg-white p-8">
      {/* Breadcrumb Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center text-sm gap-1 text-gray-500">
          <ChevronLeft className="w-4 h-4" />
          <span>Dashboard</span>
          <span>{'>'}</span>
          <span>Device Control</span>
          <span>{'>'}</span>
          <span className="font-semibold text-black">Add Device</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium">Alex Morgan</span>
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>

      <h1 className="text-2xl font-bold mb-2">Add New Device</h1>
      <h2 className="text-lg font-semibold mb-6">Devices Details</h2>

      <form className="space-y-5 max-w-2xl">
        {/* Device Fields */}
        {[
          { label: 'Device Name', placeholder: 'e.g. Living Room Light' },
          { label: 'Device Type', placeholder: 'e.g.Light,AC, TV' },
          { label: 'Room', placeholder: 'e.g. Living Room' },
          { label: 'Serial Number', placeholder: 'Enter device serial number' },
          { label: 'Device Name', placeholder: 'Optional notes' }
        ].map((field, i) => (
          <div key={i}>
            <label className="block font-medium text-gray-800 mb-1">{field.label}</label>
            <input
              type="text"
              placeholder={field.placeholder}
              className="w-full p-3 rounded-lg bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
        ))}

        {/* Image Preview */}
        <div>
          <label className="block font-medium text-gray-800 mb-1">Device Image</label>
          <img src={image} alt="Uploaded" className="w-64 rounded shadow-md" />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-2">
          <button
            type="button"
            onClick={handleImageUpload}
            className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800"
          >
            Upload Image
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            Add Device
          </button>
          <button
            type="button"
            className="bg-purple-300 text-black px-4 py-2 rounded hover:bg-purple-400"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
