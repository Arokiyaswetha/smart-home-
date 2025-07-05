import React from 'react';
import { BedDouble, ShowerHead, Plug, Lamp, Sofa } from 'lucide-react';

const rooms = [
  { name: 'Living Room', devices: 5, icon: <Sofa /> },
  { name: 'Bedroom', devices: 3, icon: <BedDouble /> },
  { name: 'Kitchen', devices: 2, icon: <Plug /> },
  { name: 'Bathroom', devices: 1, icon: <ShowerHead /> }
];

const unassignedDevices = [
  { name: 'Small Plug', status: 'Online', icon: <Plug /> },
  { name: 'Ceiling Light', status: 'Online', icon: <Lamp /> }
];

export default function RoomManagement() {
  return (
    <div className="flex-1 bg-white p-8">
      {/* Breadcrumb */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-sm text-gray-600 flex gap-1">
          <span>Dashboard</span>
          <span>{'>'}</span>
          <span className="font-semibold text-black">Room Management</span>
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

      {/* Header */}
      <h2 className="text-xl font-bold mb-2">Organize Devices</h2>
      <p className="text-sm text-gray-600 mb-6">
        Group and manage devices by room or zone for easier control
      </p>

      {/* Add Room Button */}
      <button className="bg-purple-600 text-white px-4 py-2 rounded-md mb-6 hover:bg-purple-700 transition">
        Add Room
      </button>

      {/* Room Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="bg-purple-100 text-purple-900 p-4 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <div className="text-2xl mb-2">{room.icon}</div>
            <h4 className="font-semibold text-md">{room.name}</h4>
            <p className="text-sm text-gray-700">
              {room.devices} device{room.devices > 1 ? 's' : ''} assigned
            </p>
          </div>
        ))}
      </div>

      {/* Unassigned Devices */}
      <h3 className="text-lg font-bold mb-4">Unassigned Devices</h3>
      <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
        {unassignedDevices.map((device, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-4 py-3 border-b last:border-none"
          >
            <div className="flex items-center gap-3">
              <div className="text-lg text-gray-700">{device.icon}</div>
              <span className="font-medium">{device.name}</span>
            </div>
            <div className="text-sm text-gray-600">Not assigned</div>
            <div className="text-sm text-green-600">{device.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
