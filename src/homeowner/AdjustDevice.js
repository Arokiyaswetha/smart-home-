import React from 'react';
import { ChevronLeft, Sun, Wind, MonitorSmartphone, Snowflake } from 'lucide-react';

function AdjustDevices() {
  const lightingDevices = [
    { name: 'Living Room', icon: <Sun />, actions: ['Dim', 'Turn off'] },
    { name: 'Bed Room', icon: <Sun />, actions: ['Dim', 'Turn off'] },
  ];

  const fanDevices = [
    { name: 'Living Room Fan', icon: <Wind />, actions: ['Slower', 'Turn off'] },
    { name: 'Bed Room Fan', icon: <Wind />, actions: ['Slower', 'Turn off'] },
  ];

  const otherDevices = [
    { name: 'Smart TV', icon: <MonitorSmartphone />, actions: ['Power Save', 'Turn off'] },
    { name: 'AC', icon: <Snowflake />, actions: ['Eco Boost', 'Turn off'] },
  ];

  const renderDeviceCards = (devices) =>
    devices.map((device, index) => (
      <div
        key={index}
        className="bg-purple-100 p-5 rounded-xl shadow-md hover:shadow-lg space-y-3"
      >
        <div>{device.icon}</div>
        <div className="font-bold">{device.name}</div>
        <div className="flex gap-2">
          {device.actions.map((action, idx) => (
            <button
              key={idx}
              className="bg-purple-600 text-white text-sm px-4 py-1 rounded hover:bg-purple-700"
            >
              {action}
            </button>
          ))}
        </div>
      </div>
    ));

  return (
    <div className="flex-1 bg-white p-8">
      {/* Breadcrumb Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center text-sm gap-1 text-gray-500">
          <ChevronLeft className="w-4 h-4" />
          <span>Dashboard</span>
          <span>{'>'}</span>
          <span>Device control</span>
          <span>{'>'}</span>
          <span className="font-semibold text-black">Adjust devices</span>
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

      <h1 className="text-2xl font-bold mb-4">Adjust Devices</h1>

      {/* Lighting */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Lighting</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderDeviceCards(lightingDevices)}
        </div>
      </section>

      {/* Fans */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Fans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderDeviceCards(fanDevices)}
        </div>
      </section>

      {/* Other Devices */}
      <section>
        <h2 className="text-lg font-semibold mb-3">Other Devices</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderDeviceCards(otherDevices)}
        </div>
      </section>
    </div>
  );
}

export default AdjustDevices;
