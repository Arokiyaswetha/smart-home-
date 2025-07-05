import React from 'react';
import { ChevronLeft, Lightbulb, Thermometer, Lock } from 'lucide-react';

export default function DeviceControl() {
  const devices = [
    {
      icon: <Lightbulb className="text-blue-600 w-6 h-6" />,
      name: 'Living Room Light',
      status: 'Online',
      room: 'Living Room',
      type: 'Light',
      action: 'Turn off',
    },
    {
      icon: <Thermometer className="text-blue-600 w-6 h-6" />,
      name: 'Kitchen Thermostat',
      status: 'Idle',
      room: 'Kitchen',
      type: 'Thermostat',
      action: 'Adjust',
    },
    {
      icon: <Lock className="text-blue-600 w-6 h-6" />,
      name: 'Front Door Lock',
      status: 'Locked',
      room: 'Entrance',
      type: 'Lock',
      action: 'Unlock',
    },
  ];

  return (
    <div className="flex-1 bg-white p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center text-sm gap-1 text-gray-500">
          <ChevronLeft className="w-4 h-4" />
          <span className="text-gray-700">Dashboard</span>
          <span>{'>'}</span>
          <span className="font-semibold text-black">Device control</span>
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

      {/* Tabs */}
      <div className="flex gap-10 border-b mb-4">
        <button className="border-b-2 border-black font-semibold pb-1">Devices</button>
        <button className="text-gray-500 hover:text-black">Adjust devices</button>
        <button className="text-gray-500 hover:text-black">Energy Saver</button>
      </div>

      <p className="text-gray-600 mb-6">Manage and control your connected devices.</p>

      {/* Device Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {devices.map((device, idx) => (
          <div
            key={idx}
            className="bg-purple-100 p-5 rounded-xl shadow-md hover:shadow-lg space-y-3"
          >
            <div>{device.icon}</div>
            <div className="font-bold">{device.name}</div>
            <div className="text-sm text-gray-700">
              <p>Status: {device.status}</p>
              <p>Room: {device.room}</p>
              <p>Type: {device.type}</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-purple-600 text-white text-sm px-4 py-1 rounded hover:bg-purple-700">
                {device.action}
              </button>
              <button className="bg-purple-300 text-black text-sm px-4 py-1 rounded hover:bg-purple-400">
                Settings
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Device */}
      <div>
        <h3 className="text-lg font-bold mb-2">Add New Device</h3>
        <button className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800">
          Add device
        </button>
      </div>
    </div>
  );
}
