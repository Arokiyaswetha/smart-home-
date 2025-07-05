import React from 'react';
import { ChevronLeft, Tv2, Fridge, Lightbulb } from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const EnergySaver = () => {
  const activeDevices = [
    {
      name: 'Living Room Light',
      mode: 'Energy Saver',
      type: 'Light',
      setting: 'Auto',
      usage: '60W',
      icon: <Lightbulb className="text-blue-600" />,
    },
    {
      name: 'Kitchen Fridge',
      mode: 'Energy Saver',
      type: 'Fridge',
      setting: 'Auto',
      usage: '100W',
      icon: <Fridge className="text-blue-500" />,
    },
    {
      name: 'Family Room TV',
      mode: 'Energy Saver',
      type: 'TV',
      setting: 'Manual',
      usage: '45W',
      icon: <Tv2 className="text-blue-400" />,
    },
  ];

  const energyData = [
    { name: 'Mon', usage: 80 },
    { name: 'Tue', usage: 75 },
    { name: 'Wed', usage: 60 },
    { name: 'Thu', usage: 58 },
    { name: 'Fri', usage: 55 },
    { name: 'Sat', usage: 35 },
    { name: 'Sun', usage: 30 },
    { name: 'Prev', usage: 95 },
    { name: 'Now', usage: 60 },
    { name: 'Avg', usage: 60 },
    { name: 'Peak', usage: 98 },
    { name: 'Low', usage: 22 },
  ];

  return (
    <div className="flex-1 bg-white p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center text-sm gap-1 text-gray-500">
          <ChevronLeft className="w-4 h-4" />
          <span>Dashboard</span>
          <span>{'>'}</span>
          <span>Device control</span>
          <span>{'>'}</span>
          <span className="font-semibold text-black">Energy Saver</span>
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

      {/* Active Devices Table */}
      <h2 className="text-xl font-bold mb-3">Active Devices</h2>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-200 text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-2">Device</th>
              <th className="px-4 py-2">Mode</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Setting</th>
              <th className="px-4 py-2">Usage</th>
            </tr>
          </thead>
          <tbody>
            {activeDevices.map((device, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2 flex items-center gap-2">{device.icon}{device.name}</td>
                <td className="px-4 py-2">{device.mode}</td>
                <td className="px-4 py-2">{device.type}</td>
                <td className="px-4 py-2">{device.setting}</td>
                <td className="px-4 py-2">{device.usage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Energy Saver Mode Info */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Energy Saver Mode</h3>
        <p className="text-sm text-gray-600">
          Energy Saver is now active. All compatible appliances are running in low-power mode.
        </p>
      </div>

      {/* Energy Usage Chart */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Energy Usage</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={energyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="usage" fill="#9333ea" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Deactivate Button */}
      <div className="mt-4">
        <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">
          Deactivate
        </button>
      </div>
    </div>
  );
};

export default EnergySaver;
