import React, { useState } from 'react';

export default function ProfileSettings() {
  const [profile, setProfile] = useState({
    fullName: 'Alex Morgan',
    email: 'alex.morgan@email.com',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = () => {
    alert('Profile saved:\n' + JSON.stringify(profile, null, 2));
    // Here you can integrate Firebase, API, or backend service
  };

  return (
    <div className="flex-1 bg-white p-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-4">
        Dashboard {'>'} Settings {'>'} <span className="text-black font-semibold">Profile</span>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold mb-6">Profile Settings</h2>

      {/* Form */}
      <div className="space-y-6 max-w-xl">
        {/* Full Name */}
        <div>
          <label className="block font-semibold mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={profile.fullName}
            onChange={handleChange}
            className="w-full p-3 bg-purple-100 rounded-md outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="w-full p-3 bg-purple-100 rounded-md outline-none"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block font-semibold mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Add phone number"
            value={profile.phone}
            onChange={handleChange}
            className="w-full p-3 bg-purple-100 rounded-md outline-none"
          />
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="bg-gradient-to-r from-purple-600 to-purple-400 text-white px-6 py-2 rounded-md shadow-md hover:opacity-90"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
