import React, { useState } from 'react';
import { Plus, Lightbulb, Fan, Thermometer } from 'lucide-react';

export default function AddRoom() {
  const [roomName, setRoomName] = useState('');
  const [assignedDevices, setAssignedDevices] = useState([]);

  const devices = [
    { name: 'Smart Light', location: 'Living Room', icon: <Lightbulb /> },
    { name: 'Ceiling Fan', location: 'Bedroom', icon: <Fan /> },
    { name: 'Thermostat', location: 'Hallway', icon: <Thermometer /> },
  ];

  const handleAssign = (device) => {
    if (!assignedDevices.includes(device.name)) {
      setAssignedDevices([...assignedDevices, device.name]);
    }
  };

  return (
    <div className="flex-1 bg-white p-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-4">
        <span>Dashboard {'>'} Room Management {'>'} </span>
        <span className="font-semibold text-black">Add Room</span>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold mb-4">Room Details</h2>

      {/* Room Name Input */}
      <div className="mb-6">
        <label className="block font-semibold mb-2">Room Name</label>
        <input
          type="text"
          placeholder="Enter room name"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          className="w-full bg-purple-100 p-3 rounded-md outline-none"
        />
      </div>

      {/* Assign Devices */}
      <h3 className="font-semibold text-lg mb-4">Assign Devices</h3>
      <div className="space-y-4">
        {devices.map((device, index) => (
          <div key={index} className="flex items-center justify-between bg-purple-100 p-3 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="text-white bg-purple-700 p-2 rounded-full">{device.icon}</div>
              <div>
                <div className="font-semibold">{device.name}</div>
                <div className="text-sm text-gray-700">{device.location}</div>
              </div>
            </div>
            <button
              onClick={() => handleAssign(device)}
              className="text-purple-700 text-xl hover:scale-110"
              title="Assign"
            >
              <Plus size={20} />
            </button>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex gap-4">
        <button className="bg-purple-600 text-white px-5 py-2 rounded-md shadow hover:bg-purple-700">
          Save Room
        </button>
        <button className="bg-purple-200 text-purple-800 px-5 py-2 rounded-md hover:bg-purple-300">
          Cancel
        </button>
      </div>
    </div>
  );
}

