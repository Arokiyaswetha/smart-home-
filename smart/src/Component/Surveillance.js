import React from "react";

const Surveillance = () => {
  const motionLogs = [
    { time: "2024-06-12 21:14", zone: "Front Door" },
    { time: "2024-06-12 20:45", zone: "Garage" },
  ];

  const accessLogs = [
    { time: "2024-06-12 21:10", action: "Door Unlocked", user: "Homeowner" },
    { time: "2024-06-12 19:00", action: "Door Unlocked", user: "Homeowner" },
  ];

  return (
    <div className="p-6">
      {/* Page Title */}
      <h2 className="text-2xl font-bold mb-4">Live Camera Feed</h2>

      {/* Camera Image */}
      <img
        src="https://images.unsplash.com/photo-1581091012184-de98f0388944?auto=format&fit=crop&w=600&q=80"
        alt="Camera Feed"
        className="rounded-lg w-full max-w-md mb-6"
      />

      {/* Motion Detection Section */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold">Motion Detection</h3>
        <label className="flex items-center gap-2 mt-2 mb-4">
          <input type="checkbox" className="accent-purple-600" />
          <span>Enable Alerts</span>
        </label>

        <h4 className="font-semibold mb-2">Recent Activity</h4>
        <ul className="space-y-1">
          {motionLogs.map((log, index) => (
            <li
              key={index}
              className="flex justify-between text-sm border-b py-1 items-center"
            >
              <span>{log.time}</span>
              <span>Motion detected</span>
              <span>Zone: {log.zone}</span>
              <span className="text-xl text-gray-400">⚠️</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Remote Door Control Section */}
      <section>
        <h3 className="text-xl font-semibold mb-3">Remote Door Control</h3>
        <div className="space-x-3 mb-4">
          <button className="bg-purple-700 text-white px-4 py-1 rounded">Lock door</button>
          <button className="bg-gray-300 px-4 py-1 rounded">Unlock</button>
        </div>

        <h4 className="font-semibold mb-2">Access Logs</h4>
        <ul className="space-y-1">
          {accessLogs.map((log, index) => (
            <li
              key={index}
              className="flex justify-between text-sm border-b py-1 items-center"
            >
              <span>{log.time}</span>
              <span>{log.action}</span>
              <span>User: {log.user}</span>
              <span className="text-xl text-gray-400">⚠️</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Surveillance;
